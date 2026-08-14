"use client"

import * as React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Search, X, ExternalLink, BookOpen } from "lucide-react"
import { Dialog } from "@base-ui/react/dialog"
import { Book } from "@/lib/books"

interface SearchDialogProps {
  books: Book[]
  trigger?: React.ReactNode
}

function normalizeText(text?: string | null): string {
  if (!text) return ""
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
}

export function SearchDialog({ books, trigger }: SearchDialogProps) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)

  // Global shortcut Cmd+K / Ctrl+K
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Auto-focus input when opened
  React.useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 60)
    } else {
      setQuery("")
    }
  }, [open])

  // Submit search to main page on Enter
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/?q=${encodeURIComponent(query.trim())}#lista`)
    } else {
      router.push("/")
    }
    setOpen(false)
  }

  // Filter books by title, author, or category
  const filteredBooks = React.useMemo(() => {
    const q = normalizeText(query)
    if (!q) return []

    return books.filter((b) => {
      const matchTitle = normalizeText(b.title).includes(q)
      const matchAuthor = normalizeText(b.author).includes(q)
      const matchCategory = normalizeText(b.category).includes(q)
      return matchTitle || matchAuthor || matchCategory
    })
  }, [books, query])

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {trigger ? (
        <Dialog.Trigger render={trigger as React.ReactElement} />
      ) : (
        <Dialog.Trigger
          type="button"
          aria-label="Caută"
          className="flex items-center gap-4 font-work uppercase tracking-[1px] text-sm text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
        >
          <span className="hidden sm:inline">Caută</span>
          <Search className="h-5 w-5" />
        </Dialog.Trigger>
      )}

      <Dialog.Portal>
        {/* Backdrop overlay covering the rest of the page */}
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs transition-opacity duration-500 ease-out data-ending-style:opacity-0 data-starting-style:opacity-0" />

        {/* Full-width top search banner taking up the header area with identical header background and blur */}
        <Dialog.Popup className="fixed top-0 inset-x-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40 shadow-xl transition-all duration-500 ease-out data-ending-style:-translate-y-6 data-ending-style:opacity-0 data-starting-style:-translate-y-6 data-starting-style:opacity-0 flex flex-col">
          
          {/* Main Search Bar Header */}
          <div className="relative mx-auto w-full max-w-full px-6 md:px-10 pt-6 pb-6">
            
            {/* Close Button in top right corner - hidden on mobile */}
            <div className="absolute right-6 md:right-10 top-6 hidden sm:block">
              <Dialog.Close
                render={
                  <button
                    type="button"
                    aria-label="Închide căutarea"
                    className="flex items-center gap-2.5 font-work uppercase tracking-[1px] text-sm text-foreground/80 hover:text-foreground transition-colors cursor-pointer pt-1 shrink-0"
                  />
                }
              >
                <span>Închide</span>
                <X className="w-5 h-5" />
              </Dialog.Close>
            </div>

            {/* Centered Search form and subtitle */}
            <form onSubmit={handleSubmit} className="mx-auto flex flex-col items-center justify-center max-w-2xl px-4 sm:px-12 text-center">
              <div className="relative w-full flex items-center justify-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Introdu cuvinte-cheie"
                  className="w-full bg-transparent font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl text-foreground placeholder:text-foreground/40 outline-none border-none p-0 text-center slow-caret"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="absolute right-0 p-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    aria-label="Șterge textul"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Subtitle */}
              <p className="mt-2 font-work uppercase tracking-[1px] text-[11px] sm:text-xs text-foreground/50 text-center select-none">
                Apasă tasta Enter
              </p>
            </form>

          </div>

          {/* Results Dropdown Container (When search query is entered) */}
          {query.trim() && (
            <div className="border-t border-border/40 bg-background/80 backdrop-blur-md max-h-[65vh] overflow-y-auto px-6 md:px-10 py-6">
              <div className="mx-auto w-full">
                
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-border/30 text-xs font-work uppercase tracking-wider text-muted-foreground">
                  <span>
                    {filteredBooks.length === 0
                      ? "Niciun rezultat găsit"
                      : `${filteredBooks.length} ${
                          filteredBooks.length === 1 ? "carte găsită" : "cărți găsite"
                        }`}
                  </span>
                  <span>Rezultate pentru &ldquo;{query}&rdquo;</span>
                </div>

                {filteredBooks.length === 0 ? (
                  <div className="py-12 text-center text-muted-foreground">
                    <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-30" />
                    <p className="font-serif text-lg text-foreground/80">Nu a fost găsită nicio carte</p>
                    <p className="text-xs mt-1 text-muted-foreground">
                      Încearcă să cauți după autor, titlul operei sau categoria dorită.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredBooks.map((book) => (
                      <a
                        key={book.id}
                        href={book.buyUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3.5 p-3 rounded-lg border border-border/40 bg-card/60 hover:bg-muted/40 hover:border-border transition-all group"
                      >
                        {/* Cover image */}
                        <div className="relative w-12 h-18 shrink-0 overflow-hidden rounded bg-neutral-800 shadow-xs">
                          <Image
                            src={book.cover || "/placeholder.svg"}
                            alt={book.title}
                            fill
                            sizes="48px"
                            className="object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>

                        {/* Text info */}
                        <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                          <div>
                            <span className="block text-[10px] font-work uppercase tracking-wider text-primary line-clamp-1">
                              {book.category}
                            </span>
                            <h4 className="font-serif text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug mt-0.5">
                              {book.title}
                            </h4>
                            {book.author && book.author.trim() !== "" && !book.author.includes("*") && book.author.toLowerCase() !== "anonim" && (
                              <p className="text-xs italic text-muted-foreground mt-0.5 line-clamp-1">
                                de {book.author}
                              </p>
                            )}
                          </div>

                          <div className="mt-2 flex items-center text-[11px] text-primary/80 group-hover:text-primary font-medium">
                            <span>Vezi cartea</span>
                            <ExternalLink className="w-3 h-3 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

"use client"

import * as React from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { X, Search } from "lucide-react"
import { BookCard } from "@/components/book-card"
import { Book } from "@/lib/books"
import { useReadBooks } from "@/lib/read-books-context"

interface BooksCatalogProps {
  initialBooks: Book[]
}

function normalizeText(text?: string | null): string {
  if (!text) return ""
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
}

export function BooksCatalog({ initialBooks }: BooksCatalogProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const query = searchParams.get("q") || ""
  
  const { readCount, isLoaded } = useReadBooks()

  // Filter books by search query
  const displayedBooks = React.useMemo(() => {
    const q = normalizeText(query)
    if (!q) return initialBooks

    return initialBooks.filter((book) => {
      const matchTitle = normalizeText(book.title).includes(q)
      const matchAuthor = normalizeText(book.author).includes(q)
      const matchCategory = normalizeText(book.category).includes(q)
      return matchTitle || matchAuthor || matchCategory
    })
  }, [initialBooks, query])

  // Group filtered books by category preserving order
  const booksByCategory = React.useMemo(() => {
    return displayedBooks.reduce((acc, book) => {
      const category = book.category || "Altele"
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(book)
      return acc
    }, {} as Record<string, Book[]>)
  }, [displayedBooks])

  const currentReadCount = isLoaded ? readCount : 0

  const clearSearch = () => {
    router.push("/")
  }

  return (
    <div id="lista" className="mt-12 space-y-12">

      {/* Ultra-Minimal Reading Counter blending with background */}
      <div className="flex items-center text-xs font-work uppercase tracking-[0.2em] text-muted-foreground">
        <span>Cărți citite: <strong className="text-foreground font-semibold ml-1">{currentReadCount}</strong></span>
      </div>

      {/* Active Search Banner */}
      {query && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-border bg-card/60 backdrop-blur-xs">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                Rezultate pentru: <span className="font-serif italic text-primary font-semibold">&ldquo;{query}&rdquo;</span>
              </p>
              <p className="text-xs text-muted-foreground">
                {displayedBooks.length === 0
                  ? "Nicio carte găsită"
                  : `${displayedBooks.length} ${
                      displayedBooks.length === 1 ? "carte găsită" : "cărți găsite"
                    }`}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={clearSearch}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-background hover:bg-muted text-xs font-work uppercase tracking-[1px] text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
          >
            <span>Arată toate cărțile</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Empty State */}
      {displayedBooks.length === 0 ? (
        <div className="py-20 text-center space-y-4">
          <p className="font-serif text-2xl text-foreground">
            Nicio carte nu corespunde căutării
          </p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Nu am găsit niciun titlu pentru termenul &ldquo;{query}&rdquo;. Încearcă să cauți alt termen.
          </p>
          <button
            type="button"
            onClick={clearSearch}
            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-work uppercase tracking-[1px] text-xs font-medium hover:opacity-90 transition-opacity cursor-pointer"
          >
            Vezi toate cele {initialBooks.length} cărți
          </button>
        </div>
      ) : (
        /* Render Categories and Books */
        Object.entries(booksByCategory).map(([category, categoryBooks]) => (
          <section
            key={category}
            aria-label={category}
            className="scroll-mt-24 space-y-8"
          >
            {/* Category Subtitle */}
            <div className="border-b border-border/60 pb-4">
              <h2 className="font-work uppercase tracking-[1.5px] text-sm md:text-base font-semibold text-primary">
                {category}
              </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {categoryBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  )
}

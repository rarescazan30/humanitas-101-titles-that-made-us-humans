"use client"

import * as React from 'react'
import Image from 'next/image'
import { ArrowUpRight, Check } from 'lucide-react'
import type { Book } from '@/lib/books'
import { useReadBooks } from '@/lib/read-books-context'

export function BookCard({ book }: { book: Book }) {
  const { isRead, toggleRead, isLoaded } = useReadBooks()
  const read = isLoaded && isRead(book.id)

  const handleToggleRead = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleRead(book.id)
  }

  return (
    <a
      href={book.buyUrl || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col h-full cursor-pointer transition-opacity duration-300 ${
        read ? "opacity-90 hover:opacity-100" : ""
      }`}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-secondary shadow-sm ring-1 ring-border transition-all duration-300 group-hover:shadow-md">
        <Image
          src={book.cover || '/placeholder.svg'}
          alt={`Cover of ${book.title} by ${book.author}`}
          fill
          sizes="(min-width: 512px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />

        {/* Read badge on cover corner */}
        {read && (
          <div className="absolute top-2.5 right-2.5 z-10 inline-flex items-center gap-1 bg-background/90 text-primary border border-primary/40 backdrop-blur-xs px-2 py-0.5 text-[10px] font-work uppercase tracking-wider font-semibold rounded-xs shadow-sm">
            <Check className="w-3 h-3 text-primary stroke-[3]" />
            <span>Citită</span>
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {book.category}
        </p>

        <h3 className="mt-2 text-pretty font-serif text-2xl leading-tight text-foreground transition-colors group-hover:text-primary">
          {book.title}
        </h3>

        {book.author && book.author.trim() !== "" && !book.author.includes("*") && book.author.toLowerCase() !== "anonim" && (
          <p className="mt-1 text-sm italic text-muted-foreground">
            de {book.author}
          </p>
        )}

        <p className="mt-3 flex-1 text-pretty leading-relaxed text-foreground/80">
          {book.description}
        </p>

        {/* Action footer: Buy link & Read Toggle */}
        <div className="mt-5 pt-3 border-t border-border/30 flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 border-b border-primary/40 pb-0.5 text-xs font-work font-medium uppercase tracking-wider text-primary transition-colors group-hover:border-primary">
            <span>Cumpără</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="sr-only">{book.title}</span>
          </div>

          <button
            type="button"
            onClick={handleToggleRead}
            aria-label={read ? `Marchează ${book.title} ca necitită` : `Marchează ${book.title} ca citită`}
            className={`inline-flex items-center gap-2 text-xs sm:text-sm font-work uppercase tracking-[1px] px-3.5 py-2 rounded-md border transition-all cursor-pointer ${
              read
                ? "bg-primary/15 border-primary/50 text-primary font-semibold shadow-xs"
                : "bg-background/80 border-border text-muted-foreground hover:text-foreground hover:border-foreground/60 hover:bg-muted"
            }`}
            title={read ? "Marchează ca necitită" : "Marchează ca citită"}
          >
            <Check className={`w-4 h-4 ${read ? "text-primary stroke-[3]" : "text-muted-foreground/80 stroke-[2]"}`} />
            <span>{read ? "Citită" : "Am citit"}</span>
          </button>
        </div>
      </div>
    </a>
  )
}
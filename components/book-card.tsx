import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { Book } from '@/lib/books'

export function BookCard({ book }: { book: Book }) {
  return (
    <a
      href={book.buyUrl || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col h-full cursor-pointer"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-secondary shadow-sm ring-1 ring-border transition-shadow duration-300 group-hover:shadow-md">
        <Image
          src={`/humanitas-101-titles-that-made-us-humans${book.cover}` || '/placeholder.svg'}
          alt={`Cover of ${book.title} by ${book.author}`}
          fill
          sizes="(min-width: 512px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span>{book.category}</span>
          <span aria-hidden="true" className="h-px w-4 bg-border" />
          <span>{book.year}</span>
        </div>

        <h3 className="mt-2 text-pretty font-serif text-2xl leading-tight text-foreground transition-colors group-hover:text-primary">
          {book.title}
        </h3>

        <p className="mt-1 text-sm italic text-muted-foreground">
          by {book.author}
        </p>

        <p className="mt-3 flex-1 text-pretty leading-relaxed text-foreground/80">
          {book.description}
        </p>

        <div className="mt-5 inline-flex items-center gap-1.5 self-start border-b border-primary/40 pb-0.5 text-sm font-medium uppercase tracking-wider text-primary transition-colors group-hover:border-primary">
          <span>Cumpără</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="sr-only">{book.title}</span>
        </div>
      </div>
    </a>
  )
}
import { BookCard } from '@/components/book-card'
import { books } from '@/lib/books'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        {/* Masthead */}
        <header className="border-b border-border pb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            The Margin
          </p>
          <h1 className="mt-6 max-w-3xl text-balance font-serif text-4xl leading-[1.1] text-foreground md:text-6xl">
            A curated reading list for the long winter ahead
          </h1>
          <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-foreground/80">
            <p className="text-pretty">
              Each season, our editors gather the books that lingered longest —
              the novels and essays we pressed into the hands of friends and
              argued about over dinner. This is not a list of what is popular,
              but of what is worth your evenings.
            </p>
            <p className="text-pretty">
              Six titles, chosen with care. Pour something warm, and begin
              wherever the cover calls to you.
            </p>
          </div>
        </header>

        {/* Grid */}
        <section
          aria-label="Recommended books"
          className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </section>

        {/* Footer note */}
        <footer className="mt-20 border-t border-border pt-8">
          <p className="max-w-xl text-sm italic leading-relaxed text-muted-foreground">
            &ldquo;A reader lives a thousand lives before he dies. The man who
            never reads lives only one.&rdquo; — Compiled by the editors of The
            Margin.
          </p>
        </footer>
      </div>
    </main>
  )
}

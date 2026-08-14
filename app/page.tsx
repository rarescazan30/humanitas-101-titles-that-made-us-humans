import { BookCard } from '@/components/book-card'
import { Header } from '@/components/header'
import { books } from '@/lib/books'

export default function Page() {
  // Group books dynamically by category while preserving insertion order
  const booksByCategory = books.reduce((acc, book) => {
    const category = book.category || 'Altele'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(book)
    return acc
  }, {} as Record<string, typeof books>)

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        {/* Masthead */}
        <header id="cuvant" className="border-b border-border pb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">
            Librăriile Humanitas
          </p>
          <h1 className="mt-6 h-20 max-w-4xl text-balance font-serif text-4xl leading-[1.1] text-foreground md:text-6xl">
            Cărțile care ne-au făcut oameni
          </h1>
          <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/80">
            <p className="text-pretty">
              O selecție esențială de cărți, aleasă de Gabriel Liiceanu.
              O listă de lectură fundamentală, reunită aici sub egida proiectului „Cărțile care ne-au făcut oameni”.
            </p>
            <p className="text-pretty">
              Circa 100 de cărți alese de Gabriel Liiceanu pentru o așezare firească în plan cultural.
              Sunt lecturile la capătul cărora nu vei mai fi omul de dinainte.
            </p>
          </div>
        </header>

        {/* Categories Sections */}
        <div id="lista" className="mt-16 space-y-20">
          {Object.entries(booksByCategory).map(([category, categoryBooks]) => (
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
          ))}
        </div>

        {/* Footer note */}
        <footer className="mt-24 border-t border-border pt-8">
          <p className="max-w-1xl text-sm italic leading-relaxed text-muted-foreground">
            &ldquo;Ne este dat, acum, să participăm, cu vârtuțile noastre, la zidirea de necrezut a lumii de mâine.
            <br></br>Și iarăși graiul nostru românesc va veni să spună că putem s-o facem.&rdquo; — Constantin Noica.
          </p>
        </footer>
      </div>
    </main>
  )
}

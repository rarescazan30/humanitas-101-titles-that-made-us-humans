import { BookCard } from '@/components/book-card'
import { Header } from '@/components/header'
import { books } from '@/lib/books'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        {/* Masthead */}
        <header className="border-b border-border pb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">
          Librăriile Humanitas
          </p>
          <h1 className="mt-6 h-20 max-w-4xl text-balance font-serif text-4xl leading-[1.1] text-foreground md:text-6xl">
          Cărțile care ne-au făcut oameni
          </h1>
          <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/80">
            <p className="text-pretty">
            O selecție esențială de cărți, curatoriată de Gabriel Liiceanu. 
            O listă de lectură fundamentală, reunită aici sub egida proiectului „Cărțile care ne-au făcut oameni”.
            </p>
            <p className="text-pretty">
            Circa 100 de cărți alese de Gabriel Liiceanu pentru o așezare firească în plan cultural.
            Sunt lecturile la capătul cărora nu vei mai fi omul de dinainte.
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
          <p className="max-w-1xl text-sm italic leading-relaxed text-muted-foreground">
            &ldquo;Ne este dat, acum, să participăm, cu vârtuțile noastre, la zidirea de necrezut a lumii de mâine.
            <br></br>Și iarăși graiul nostru românesc va veni să spună că putem s-o facem.&rdquo; — Constantin Noica.
          </p>
        </footer>
      </div>
    </main>
  )
}

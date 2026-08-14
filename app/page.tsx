import { Suspense } from 'react'
import { Header } from '@/components/header'
import { BooksCatalog } from '@/components/books-catalog'
import { books } from '@/lib/books'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        {/* Masthead */}
        <header id="cuvant" className="border-b border-border pb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">
            Librăriile Humanitas
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.1] text-foreground md:text-6xl">
            Cărțile care <span className="whitespace-nowrap">ne-au</span> făcut oameni
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

        {/* Books Catalog & Categories with URL Query Filtering */}
        <Suspense fallback={<div className="py-20 text-center text-muted-foreground">Se încarcă catalogul...</div>}>
          <BooksCatalog initialBooks={books} />
        </Suspense>

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

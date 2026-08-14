import Image from 'next/image'
import Link from 'next/link'
import { MinimalBookSheet } from "@/components/minimal-book-sheet";
import { SearchDialog } from "@/components/search-dialog";
import { books } from "@/lib/books";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-22 max-w-full items-center justify-between px-6 md:px-10">
        
        {/* LEFT ZONE: MENU & NAV LINKS */}
        <div className="flex flex-1 items-center gap-6 md:gap-8">
          
          {/* Hamburger Sheet Component */}
          <MinimalBookSheet books={books} />
          
          {/* Navigation Links */}
          <div className="hidden sm:flex items-center gap-6">
            <Link 
              href="/cuvant-despre-lista" 
              className="font-work uppercase tracking-[1px] text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              Cuvânt despre listă
            </Link>
            <Link 
              href="/" 
              className="font-work uppercase tracking-[1px] text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              Lista
            </Link>
          </div>

        </div>

        {/* CENTER ZONE: Logo */}
        <div className="flex justify-center">
          <Link href="/" className="flex items-center mt-1">
            <Image 
              src="/logo-grupul-humanitas.svg"
              alt="Logo Grupul Humanitas" 
              width={160}
              height={40}
              className="h-7 md:h-10 w-auto invert transition-all translate-y-[2px]"
            />
          </Link>
        </div>

        {/* RIGHT ZONE: SEARCH */}
        <div className="flex flex-1 items-center justify-end gap-6">
          <SearchDialog books={books} />
        </div>

      </nav>
    </header>
  )
}
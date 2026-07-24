import Link from 'next/link'
import { Menu, Search } from 'lucide-react'
import { MinimalBookSheet } from "@/components/minimal-book-sheet";
import { books } from "@/lib/books";

  export interface Book {
    id: string;
    title: string;
    author: string;
    category: string;
    cover: string;
  }

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-22 max-w-full items-center justify-between px-6 md:px-10">
        
        {/* LEFT ZONE: Menu & Navigation */}
        <div className="flex flex-1 items-center gap-6">
          <MinimalBookSheet books={books} />
          
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="#cuvant" className="hidden md:inline font-work uppercase tracking-[1px] text-sm text-foreground/80 hover:text-foreground transition-colors">
              Cuvânt despre listă
            </Link>
            <Link href="#lista" className="font-work uppercase tracking-[1px] text-sm text-foreground/80 hover:text-foreground transition-colors">
              Lista
            </Link>
          </div>
        </div>

        {/* CENTER ZONE: Logo */}
        <div className="flex justify-center">
          <Link href="/" className="flex items-center mt-1">
            <img 
              src="/humanitas-101-titles-that-made-us-humans/logo-grupul-humanitas.svg"
              alt="Logo Grupul Humanitas" 
              className="h-7 md:h-10 w-auto invert transition-all translate-y-[2px]"
            />
          </Link>
        </div>

        {/* RIGHT ZONE: External Link & Search */}
        <div className="flex flex-1 items-center justify-end gap-6">
          <a 
            href="https://humanitas.ro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:inline font-work uppercase tracking-[1px] text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            Librăriile Humanitas
          </a>
          
          <button className="flex items-center gap-4 font-work uppercase tracking-[1px] text-sm text-foreground/80 hover:text-foreground transition-colors">
            <span className="hidden sm:inline">Caută</span>
            <Search className="h-5 w-5" />
          </button>
        </div>

      </nav>
    </header>
  )
}
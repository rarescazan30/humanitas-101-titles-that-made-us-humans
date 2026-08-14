import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { MinimalBookSheet } from "@/components/minimal-book-sheet";
import { books } from "@/lib/books";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-22 max-w-full items-center justify-between px-6 md:px-10">
        
        {/* LEFT ZONE: ALWAYS VISIBLE ON MOBILE */}
        <div className="flex flex-1 items-center gap-6">
          
          {/* Your sheet component */}
          <MinimalBookSheet books={books} />
          
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

        {/* RIGHT ZONE */}
        <div className="flex flex-1 items-center justify-end gap-6">
          <button className="flex items-center gap-4 font-work uppercase tracking-[1px] text-sm text-foreground/80 hover:text-foreground transition-colors">
            {/* The word "Caută" is hidden on mobile here, but the icon shows! */}
            <span className="hidden sm:inline">Caută</span>
            <Search className="h-5 w-5" />
          </button>
        </div>

      </nav>
    </header>
  )
}
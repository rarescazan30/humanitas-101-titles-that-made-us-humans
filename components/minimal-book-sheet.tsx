import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  cover: string;
}

interface BookSheetProps {
  books: Book[];
}

export function MinimalBookSheet({ books }: BookSheetProps) {
  // 1. Group books dynamically by their category
  const booksByCategory = books.reduce((acc, book) => {
    const category = book.category || "Altele";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(book);
    return acc;
  }, {} as Record<string, Book[]>);

  return (
    <Sheet>
      <SheetTrigger aschild="true">
      <button
          type="button"
          aria-label="Open menu"
          className="hidden md:inline font-work uppercase tracking-[1px] text-sm text-foreground/80 hover:text-foreground transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[360px] sm:w-[420px] flex flex-col p-6">
        <SheetHeader className="pb-4 border-b">
          <SheetTitle className="hidden md:inline font-work uppercase tracking-[1px] text-sm text-foreground/80 hover:text-foreground transition-colors">Cărți Recomandate</SheetTitle>
        </SheetHeader>

        {/* Scrollable Container */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-6 mt-4">
          {Object.entries(booksByCategory).map(([category, categoryBooks]) => (
            <div key={category} className="space-y-3">
              {/* Category Header */}
              <h3 className="mt-5 font-work uppercase text-sm max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/80">
                {category}
              </h3>

              {/* Minimalist Book List */}
                <div className="space-y-2">
                {categoryBooks.map((book) => (
                    <a
                    key={book.id}
                    href={book.buyUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-1.5 rounded-md hover:bg-white/5 transition-colors group cursor-pointer block"
                    >
                    {/* Small Thumbnail Cover */}
                    <div className="relative w-8 h-12 flex-shrink-0 overflow-hidden rounded bg-neutral-800">
                        <Image
                        src={book.cover}
                        alt={book.title}
                        fill
                        sizes="32px"
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                    </div>

                    {/* Title & Author Only */}
                    <div className="min-w-0 flex-1">
                        <h4 className="text-sm max-w-3xl leading-snug text-foreground/80 truncate group-hover:text-foreground transition-colors">
                        {book.title}
                        </h4>
                        {book.author && (
                        <p className="text-[11px] text-neutral-400 truncate mt-0.5">
                            {book.author}
                        </p>
                        )}
                    </div>
                    </a>
                ))}
                </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
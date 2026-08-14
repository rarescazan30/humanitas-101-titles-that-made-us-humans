"use client"

import * as React from "react"

const STORAGE_KEY = "humanitas_read_books_v1"

type ReadFilter = "all" | "unread" | "read"

interface ReadBooksContextType {
  readBookIds: string[]
  isRead: (id: string) => boolean
  toggleRead: (id: string) => void
  readCount: number
  filter: ReadFilter
  setFilter: (filter: ReadFilter) => void
  isLoaded: boolean
}

const ReadBooksContext = React.createContext<ReadBooksContextType | undefined>(undefined)

export function ReadBooksProvider({ children }: { children: React.ReactNode }) {
  const [readBookIds, setReadBookIds] = React.useState<string[]>([])
  const [filter, setFilter] = React.useState<ReadFilter>("all")
  const [isLoaded, setIsLoaded] = React.useState(false)

  // Load from localStorage on mount
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          setReadBookIds(parsed)
        }
      }
    } catch (e) {
      console.error("Error reading read books from localStorage", e)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Toggle read status and persist
  const toggleRead = React.useCallback((id: string) => {
    setReadBookIds((prev) => {
      let next: string[]
      if (prev.includes(id)) {
        next = prev.filter((item) => item !== id)
      } else {
        next = [...prev, id]
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch (e) {
        console.error("Error saving read books to localStorage", e)
      }
      return next
    })
  }, [])

  const isRead = React.useCallback(
    (id: string) => {
      return readBookIds.includes(id)
    },
    [readBookIds]
  )

  const value = React.useMemo(
    () => ({
      readBookIds,
      isRead,
      toggleRead,
      readCount: readBookIds.length,
      filter,
      setFilter,
      isLoaded,
    }),
    [readBookIds, isRead, toggleRead, filter, isLoaded]
  )

  return (
    <ReadBooksContext.Provider value={value}>
      {children}
    </ReadBooksContext.Provider>
  )
}

export function useReadBooks() {
  const context = React.useContext(ReadBooksContext)
  if (!context) {
    throw new Error("useReadBooks must be used within a ReadBooksProvider")
  }
  return context
}

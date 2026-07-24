export type Book = {
  id: string
  title: string
  author: string
  year: string
  category: string
  description: string
  cover: string
}

export const books: Book[] = [
  {
    id: 'quiet-tide',
    title: 'The Quiet Tide',
    author: 'Eleanor Vance',
    year: '2024',
    category: 'Fiction',
    description:
      'A widow returns to the coastal village of her childhood and finds the sea has kept every secret she left behind. Spare and luminous, it is a meditation on grief and the slow work of return.',
    cover: '/covers/quiet-tide.png',
  },
  {
    id: 'salt-houses',
    title: 'Salt Houses',
    author: 'Nadia Rahman',
    year: '2023',
    category: 'Fiction',
    description:
      'Four generations of a displaced family measure their lives in the houses they build and lose. Rahman writes with a cartographer\u2019s patience, mapping the geography of belonging.',
    cover: '/covers/salt-houses.png',
  },
  {
    id: 'the-lantern',
    title: 'The Lantern Keeper',
    author: 'Tomas Brandt',
    year: '2022',
    category: 'Historical',
    description:
      'On a remote northern island, a lighthouse keeper records the ships that never arrive. A haunting parable about duty, solitude, and the light we keep for others.',
    cover: '/covers/the-lantern.png',
  },
  {
    id: 'winter-orchard',
    title: 'The Winter Orchard',
    author: 'Margaret Doyle',
    year: '2024',
    category: 'Fiction',
    description:
      'A failing orchard becomes the last battleground between a father and the daughter who refuses to sell it. Doyle renders the ordinary with devastating tenderness.',
    cover: '/covers/winter-orchard.png',
  },
  {
    id: 'paper-cities',
    title: 'Paper Cities',
    author: 'Idris Okonkwo',
    year: '2023',
    category: 'Essays',
    description:
      'A dazzling collection of essays on the cities we invent and the ones we are forced to leave. Okonkwo moves between memoir and architecture with rare intellectual grace.',
    cover: '/covers/paper-cities.png',
  },
  {
    id: 'the-cartographer',
    title: "The Cartographer's Daughter",
    author: 'Sofia Marchetti',
    year: '2021',
    category: 'Historical',
    description:
      'In wartime Trieste, a mapmaker\u2019s daughter learns that borders are drawn as easily as they are erased. A sweeping novel about inheritance, exile, and the maps we carry within us.',
    cover: '/covers/the-cartographer.png',
  },
]

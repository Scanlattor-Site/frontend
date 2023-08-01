/* eslint-disable no-use-before-define */
declare namespace MangasType {
  type MangaStatus = 'ongoing' | 'cancelled' | 'completed'
  interface ChapterManga {
    id: string
    title?: string
    number: DoubleRange
    content: string
    createdById: string
    createdBy: UserTypes.UserProps
    createdAt: string
    updatedAt?: string
    mangaId: string
    manga?: MangaProps | null
  }

  interface MangaProps {
    id: string
    title: string
    slug: string
    author: string | null
    chapters: ChapterManga[]
    createdAt: string
    releaseDate: string
    status: MangaStatus
    synopsis: string
    thumbnail: string
    updatedAt: string
    views: number
    rate: number
  }

  interface SearchProps {
    id: string
    title: string
    synopsis: string
    thumbnail: string
    slug: string
  }
}

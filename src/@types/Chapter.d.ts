/* eslint-disable no-use-before-define */
declare namespace ChapterType {
  interface MangaChapter {
    id: string
    title: string
    slug: string
    author: string | null
    chapters: ChapterProps[]
    createdAt: string
    releaseDate: string
    status: MangaStatus
    synopsis: string
    thumbnail: string
    updatedAt: string
    views: number
    rate: number
  }

  interface ChapterProps {
    id: string
    title?: string
    number: DoubleRange
    content: string
    createdById: string
    createdBy: UserTypes.UserProps
    createdAt: string
    updatedAt?: string
    mangaId: string
    manga?: MangaProps
  }
}

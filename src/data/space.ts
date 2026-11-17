// بيانات قسم «مساحة» — المكتبة والحكايات والمصادر.
// المحتوى يُضاف هنا لاحقًا من قِبل صاحب الموقع؛ لا تُخترع أي بيانات.
// كل المصفوفات فارغة عمدًا حتى تُنشر مادة حقيقية.

export interface Book {
  slug: string
  title: string
  description: string
  author: string
  category: string
  status: string
  cover?: string
}

export interface MahkaaStory {
  slug: string
  title: string
  kind: 'comics' | 'illustrated' | 'fiction' | 'series'
  description: string
  chapters: string[]
}

export interface Source {
  id: string
  title: string
  kind: string
  author: string
  year: string
  url?: string
  category: string
  related: string[]
}

export const books: Book[] = []
export const mahkaaStories: MahkaaStory[] = []
export const sources: Source[] = []

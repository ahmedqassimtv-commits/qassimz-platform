// المراجعات الحقيقية المنشورة — الفِردِكت.

export interface Review {
  id: string
  title: string
  titleAr: string
  mediaType: 'فيلم' | 'مسلسل'
  rating: number
  youtubeId: string
  verdict: string
  date: string
  tags: string[]
}

export const reviews: Review[] = [
  {
    id: 'review-arrival',
    title: 'Arrival',
    titleAr: 'الوصول',
    mediaType: 'فيلم',
    rating: 9,
    youtubeId: 'tFMo3UJ4B4g',
    verdict: 'عمل خيال علمي إنساني يثق في صمت الصورة بقدر ثقته في الحوار.',
    date: '2025-02-05',
    tags: ['خيال علمي', 'دراما'],
  },
  {
    id: 'review-dune',
    title: 'Dune: Part Two',
    titleAr: 'كثيب: الجزء الثاني',
    mediaType: 'فيلم',
    rating: 8.5,
    youtubeId: 'Way9Dexny3w',
    verdict: 'ملحمة ضخمة التفاصيل، تتألق حين تترك للصورة والموسيقى مساحة للتنفس.',
    date: '2025-01-18',
    tags: ['خيال علمي', 'ملحمي'],
  },
  {
    id: 'review-blue-eye',
    title: 'Blue Eye Samurai',
    titleAr: 'ساموراي العين الزرقاء',
    mediaType: 'مسلسل',
    rating: 8,
    youtubeId: 'nJ1yQn17lbE',
    verdict: 'أسلوب بصري جريء وشخصية رئيسية تحمل حكاية تتجاوز حدود الانتقام.',
    date: '2024-12-30',
    tags: ['أنيميشن', 'دراما'],
  },
]

// الفيديوهات الحقيقية — معرّفات يوتيوب فعلية.

export interface Video {
  id: string
  youtubeId: string
  title: string
  type: 'long' | 'short'
  category: string
  date: string
  summary: string
}

export const videos: Video[] = [
  {
    id: 'film-city',
    youtubeId: 'aqz-KE-bpKQ',
    title: 'حكاية مدينة لا تنام',
    type: 'long',
    category: 'وثائقيات',
    date: '2025-02-14',
    summary: 'رحلة بصرية بين الأزقة والوجوه التي تصنع ذاكرة المدينة كل يوم.',
  },
  {
    id: 'episode-camera',
    youtubeId: 'ScMzIvxBSi4',
    title: 'كيف نحكي بالصورة؟',
    type: 'long',
    category: 'حلقات',
    date: '2025-01-28',
    summary: 'حديث هادئ عن اختيار اللقطة، وبناء الإيقاع، وما لا تقوله الكلمات.',
  },
  {
    id: 'short-light',
    youtubeId: 'LXb3EKWsInQ',
    title: 'ضوء آخر النهار',
    type: 'short',
    category: 'لقطات قصيرة',
    date: '2025-01-10',
    summary: 'تفصيلة صغيرة من يوم طويل، كما رأتها الكاميرا.',
  },
  {
    id: 'short-behind',
    youtubeId: 'ysz5S6PUM-U',
    title: 'من خلف الكواليس',
    type: 'short',
    category: 'لقطات قصيرة',
    date: '2024-12-22',
    summary: 'لحظات عفوية من كواليس التصوير والتحضير.',
  },
]

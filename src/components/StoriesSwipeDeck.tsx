import { useRef, useState } from 'react'
import type { Story } from '../data/stories'

// رزمة الحكايات: سحب بإصبع/فأرة مع إحساس فيزيائي (تحويل + إرجاع ناعم).
// في RTL: السحب نحو اليسار (x سالب) يقدّم البطاقة التالية.
export default function StoriesSwipeDeck({ stories }: { stories: Story[] }) {
  const [index, setIndex] = useState(0)
  const [drag, setDrag] = useState(0)
  const [dragging, setDragging] = useState(false)
  const startX = useRef(0)

  const total = stories.length
  const story = stories[index]

  const next = () => setIndex((i) => (i + 1) % total)
  const prev = () => setIndex((i) => (i - 1 + total) % total)

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX
    setDragging(true)
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return
    setDrag(e.clientX - startX.current)
  }
  const onPointerUp = () => {
    if (!dragging) return
    setDragging(false)
    if (drag < -90) next()
    else if (drag > 90) prev()
    setDrag(0)
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      <div
        role="region"
        aria-roledescription="بطاقات قابلة للسحب"
        aria-label="رزمة الحكايات"
        className="card touch-pan-y select-none overflow-hidden"
        style={{
          transform: `translateX(${drag}px) rotate(${drag / 60}deg)`,
          transition: dragging ? 'none' : 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
          cursor: dragging ? 'grabbing' : 'grab',
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <img
          src={story.image}
          alt={story.title}
          className="h-64 w-full object-cover"
          loading="lazy"
          draggable={false}
        />
        <div className="p-6">
          <p className="text-sm font-bold text-accent">
            <bdi>{story.year}</bdi> — {story.era} · {story.location}
          </p>
          <h3 className="font-display mt-2 text-2xl font-black">{story.title}</h3>
          <p className="mt-2 text-ink-dim">{story.caption}</p>
          <p className="mt-4 leading-8">{story.story}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={prev}
          className="rounded-full border border-line px-5 py-2 text-sm font-bold hover:border-accent"
        >
          السابقة
        </button>
        <p className="text-sm text-ink-dim" aria-live="polite">
          <bdi>
            {index + 1} / {total}
          </bdi>
        </p>
        <button
          type="button"
          onClick={next}
          className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-accent-ink"
        >
          التالية
        </button>
      </div>
    </div>
  )
}

import { useState } from 'react'

// مقارنة قبل/بعد على صورة واحدة: الطبقة العليا أبيض وأسود، والسفلى ملوّنة.
// منزلق بمؤشر + لوحة مفاتيح، بدور slider كامل.
export default function ImageCompare({ image, alt }: { image: string; alt: string }) {
  const [pos, setPos] = useState(50)

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="card relative overflow-hidden" dir="ltr">
        <img src={image} alt={alt} className="block h-auto w-full" loading="lazy" draggable={false} />
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 block h-full w-full object-cover grayscale"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          loading="lazy"
          draggable={false}
        />
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow"
          style={{ left: `${pos}%` }}
          aria-hidden="true"
        />
        <span className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white">
          قبل — أبيض وأسود
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white">
          بعد — ملوّن
        </span>
      </div>
      <label className="mt-4 block text-sm font-bold" htmlFor="compare-range">
        اسحب للمقارنة بين النسختين
      </label>
      <input
        id="compare-range"
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="mt-2 w-full accent-[var(--accent)]"
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pos}
        aria-label="موضع المقارنة بين قبل وبعد"
      />
    </div>
  )
}

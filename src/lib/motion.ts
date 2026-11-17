// محرك الحركة المشترك: GSAP + Lenis في تكت واحد.
// قواعد RTL (من البحث العميق للمشروع):
// - GSAP x فيزيائي: الاتجاه الأفقي يُقلب يدويًا في RTL.
// - SplitText: كلمات/أسطر فقط، أبدًا حرفًا حرفًا، بعد document.fonts.ready.
// - <bdi> للأرقام والتواريخ في القوالب.
// - prefers-reduced-motion: تُعطَّل كل الحركات وتظهر الحالات النهائية.
// - نوابض فيزيائية فقط (stiffness/damping) حيث تُستخدم النوابض.

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText)

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const isRTL = () =>
  typeof document !== 'undefined' && document.documentElement.dir === 'rtl'

/** يهيّئ Lenis + تكت GSAP واحد يقودهما معًا. يُستدعى مرة واحدة من التخطيط. */
export function initMotion(): Lenis | null {
  if (prefersReducedMotion()) return null

  const lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    syncTouch: false,
  })

  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  return lenis
}

/** كشف الكلمات لعنوان: كلمات/أسطر فقط بعد جاهزية الخطوط. */
export async function revealHeadline(selector: string) {
  if (prefersReducedMotion()) return
  await document.fonts.ready
  const split = new SplitText(selector, { type: 'words,lines' })
  gsap.from(split.words, {
    yPercent: 110,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.05,
    overwrite: true,
  })
}

/** ظهور أقسام عند التمرير: حركة واحدة لكل قسم، بلا حلقات. */
export function revealSections(selector = '[data-reveal]') {
  if (prefersReducedMotion()) return
  gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
    gsap.from(el, {
      y: 32,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    })
  })
}

/** شريط متحرك: في RTL تتحرك الترجمة الأفقية في الاتجاه المعاكس. */
export function initMarquee(selector = '.marquee-track') {
  if (prefersReducedMotion()) return
  const track = document.querySelector<HTMLElement>(selector)
  if (!track) return
  // الحركة عبر CSS keyframes في global.css؛ هنا نوقفها مؤقتًا فقط إن لزم.
}

/** تثبيت/فرك لبطل الصفحة: حركة الكاميرا عبر التمرير. */
export function initHeroScrub(pinSelector: string, targetSelector: string) {
  if (prefersReducedMotion()) return
  gsap.to(targetSelector, {
    scale: 0.92,
    yPercent: -6,
    ease: 'none',
    scrollTrigger: {
      trigger: pinSelector,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  })
}

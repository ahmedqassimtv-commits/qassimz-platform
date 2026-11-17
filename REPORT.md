# تقرير بناء قَاسِمز الجديد — Astro (من الصفر)

**التاريخ:** 2026-11-17 · **الحالة: البناء الإنتاجي أخضر ✅**
**المسار:** `~/workspace/qassimz-astro-build/`
**الستاك (قرار المستخدم 2026-11-17):** Astro هو الأساس، وGSAP + Lenis + Three.js جواه.

## 1. نتيجة البناء

- الأمر: `npm run build` (Astro)
- **النتيجة: ناجح، exit 0، بلا أخطاء** — 14 صفحة في 7.58 ثوانٍ (البناء الكامل 10.6 ثوانٍ).
- تحذير واحد غير حرج من Vite: حزمة `three.module` ‏719.83 kB (gzip ‏186.71 kB) تتجاوز حد 500 kB —
  مقبول لأنها **منفصلة ومحمّلة كسولًا** عبر `dynamic import()` ولا تصل للمستخدم إلا عند ظهور البطل.
- `npm install`: نجح من أول مرة (356 حزمة، 59 ثانية) — لم تظهر مشكلة EPERM هذه المرة.
- بيئة التحقق: Node ‏v24.22.1 / npm ‏10.9.4 في الساندبوكس (المشروع يثبّت Node 22 عبر `.nvmrc` للمستخدم).
- حجم `dist/`: ‏1.3 MB إجمالي (منها `_astro/` ‏1.1 MB — أغلبها Three.js الكسول).

## 2. إصدارات الاعتماديات الدقيقة (من package-lock.json)

| الحزمة | الإصدار |
|---|---|
| astro | 5.18.2 |
| @astrojs/react | 4.4.2 |
| @astrojs/sitemap | 3.7.5 |
| @tailwindcss/vite | 4.3.5 |
| tailwindcss | 4.3.5 |
| gsap (ScrollTrigger + SplitText) | 3.15.1 |
| lenis | 1.3.27 |
| three | 0.182.0 |
| react / react-dom | 19.3.1 |
| typescript | 5.9.3 |

## 3. شجرة الملفات (31 ملفًا)

```
package.json  astro.config.mjs  tsconfig.json  .gitignore  .nvmrc  README.md  REPORT.md
.github/workflows/deploy-pages.yml        (ملف فقط — لم يُفعَّل على GitHub)
public/  favicon.svg  robots.txt
src/
  styles/global.css                        (Tailwind v4 + الثيمات الثلاثة)
  lib/motion.ts                            (GSAP + Lenis، تكت واحد، قواعد RTL)
  layouts/BaseLayout.astro                 (RTL، الثيم قبل الرسم، تذييل بالروابط الحقيقية)
  components/
    Navbar.astro                           (زجاج خفيف فقط — بلا انكسار سائل)
    Hero.astro                             (Three.js كسول: نقاط + TorusKnot سلكي)
    StoriesSwipeDeck.tsx                   (جزيرة React — سحب)
    ImageCompare.tsx                       (جزيرة React — قبل/بعد)
    EmptyState.astro                       (حالة فارغة صادقة)
  data/  stories.ts  reviews.ts  videos.ts  space.ts
  content/articles/hin-tasbih-allqta-hikaya.md
  content/config.ts
  pages/
    index.astro  videos.astro  stories.astro  on-air.astro  about.astro
    verdict/movies.astro  verdict/series.astro
    articles/index.astro  articles/[slug].astro
    mahkaa.astro  episodes.astro  books.astro  sources.astro
    404.astro
```

الصفحات المبنية (14): `/`، `/videos`، `/stories`، `/on-air`، `/about`، `/verdict/movies`،
`/verdict/series`، `/articles`، `/articles/hin-tasbih-allqta-hikaya`، `/mahkaa`، `/episodes`،
`/books`، `/sources`، `/404.html` — إضافةً إلى `sitemap-index.xml` و`sitemap-0.xml` و`robots.txt`.

## 4. المحتوى: حقيقي مقابل حالة فارغة

**حقيقي (من ملفات بيانات المرآة القديمة — محتوى فقط، بلا كود منسوخ):**
- 3 حكايات أرشيفية: القاهرة 1932، الإسكندرية 1954، الأقصر 1968 (صور Unsplash كما هي).
- 3 مراجعات: Arrival ‏(9/10)، Dune: Part Two ‏(8.5/10)، Blue Eye Samurai ‏(8/10) مع معرّفات يوتيوب الفعلية.
- 4 فيديوهات يوتيوب بمعرّفاتها الفعلية (وثائقيات/حلقات/لقطات قصيرة).
- مقال واحد كامل: «حين تصبح اللقطة حكاية» (2025-02-20).
- الروابط الاجتماعية الحقيقية: X ‏@ahmedqassimtv، فيسبوك AhmedQassimTV، يوتيوب ‏@AhmedQassimTV.

**حالات فارغة صادقة (بلا أي محتوى مختلق):**
- مساحة: مَحْكاة (0)، الكتب (0)، المصادر (0) — مصفوفات فارغة عمدًا.
- ON AIR: «لا يوجد بث مباشر الآن».

## 5. الثيمات والحركة

- ثلاثة ثيمات فقط: **أخضر** (افتراضي) / **أحمر** / **لبني** (`#DCE9F7` خلفية، `#0F2A44` حبر — كما قُرر).
  المبدّل في الشريط العلوي، يُحفظ في `localStorage`، وسكربت مضمّن يطبّقه قبل الرسم لمنع الوميض.
- GSAP ScrollTrigger + Lenis بتكت واحد (`gsap.ticker` يقود `lenis.raf`)؛
  SplitText كلمات/أسطر فقط بعد `document.fonts.ready`؛ لا `letter-spacing` على العربية؛
  الأرقام والتواريخ داخل `<bdi>`؛ `prefers-reduced-motion` يعطّل كل الحركات (بما فيها Three.js).
- Three.js: مشهد واحد كسول في البطل (نقاط + TorusKnot سلكي بلون الثيم)، يتوقف حين يخرج من الشاشة.

## 6. ما لم يُتحقق منه (حدود الساندبوكس)

- **لا فحص متصفح ممكن:** Chromium/Playwright معطّل في الساندبوكس — لم تُؤخذ لقطات، ولم تُقَس الحركة حيًا.
  التحقق الوحيد هو البناء الإنتاجي الناجح + فحص HTML المبني (العنوان، الثيم، الحكايات، الحالات الفارغة،
  خريطة الموقع، وجزر React التسع — كلها موجودة في `dist/`).
- **الفحص النهائي عند المستخدم:** `npm install` ثم `npm run dev` وفتح `localhost:4321` —
  خصوصًا الثيم اللبني، وحركة السحب في الرزمة، ومنزلق المقارنة، ومشهد Three.js.
- خطوط Google (Cairo + Noto Sans Arabic) تُجلب وقت التشغيل؛ بلا إنترنت تظهر الخطوط النظامية.
- صور الحكايات وصور يوتيوب المصغّرة روابط خارجية (Unsplash / i.ytimg.com).

## 7. خطة الدفع لاحقًا (لم يُنفَّذ أي شيء على GitHub)

المستودع المستهدف: `ahmedqassimtv-commits/qassimz-platform` — **يحتوي حاليًا لقطة قديمة غير مرغوبة
يجب مسحها أولًا** (قرار المسح بموافقة المستخدم؛ الحذف عبر المتصفح يحتاج كود sudo كما حدث سابقًا).

1. المستخدم يوافق على المسح + البناء الجديد.
2. مسح محتويات `qassimz-platform` (عبر المتصفح أو `git push --force` من جهاز لديه صلاحية).
3. دفع شجرة `qassimz-astro-build/` إلى `main` — **باستثناء `node_modules/` و`dist/` و`.astro/`** (في `.gitignore`).
4. ⚠️ ‏`package-lock.json` ‏(244 KB) **لا يمكن دفعه عبر GitHub CLI** (تجاوز حد الوسائط سابقًا) —
   يُرفع عبر واجهة المتصفح، أو يُعاد توليده محليًا لدى المستخدم بأمر `npm install`.
5. ملفات سير العمل (`.github/workflows/*`) **لا يمكن دفعها عبر GitHub App** (403 سابقًا) —
   تُنشأ عبر واجهة المتصفح بعد الدفع.
6. بعد أول دفع أخضر: تفعيل Pages (المصدر: GitHub Actions)، ثم التحقق من
   `https://ahmedqassimtv-commits.github.io/qassimz-platform/` والروابط العميقة.
7. نقل DNS الخاص بـ `qassimz.com` من Cloudflare إلى GitHub Pages **بقرار صريح من المستخدم فقط** —
   حتى ذلك الحين يبقى `base: "/"` في `astro.config.mjs` (النشر على Cloudflare يعمل كما هو).

# قَاسِمز — Qasimz

منصة محتوى عربية: فيديوهات، مراجعات (الفِردِكت)، حكايات، مقالات، ON AIR، ومساحة.
بقلم **أحمد قاسم**.

## الستاك

| التقنية | الدور |
|---|---|
| Astro 5 | الأساس — صفحات ثابتة، صفر جافاسكربت افتراضيًا |
| Tailwind CSS v4 | التنسيق عبر `@tailwindcss/vite` |
| GSAP 3 + ScrollTrigger + SplitText | الحركات المرتبطة بالتمرير وكشف العناوين |
| Lenis | التمرير الناعم — تكت واحد مع GSAP |
| Three.js | مشهد ثلاثي واحد كسول في بطل الرئيسية |
| React islands | رزمة الحكايات (سحب) ومقارنة قبل/بعد فقط |
| @astrojs/sitemap | خريطة الموقع |

## الثيمات

ثلاثة ثيمات فقط — أخضر / أحمر / لبني — يختارها الزائر وتُحفظ محليًا (`localStorage`).

## التشغيل

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # إنتاج إلى dist/
npm run preview
```

Node 22 (ملف `.nvmrc`).

## المحتوى

- **حقيقي:** 3 حكايات أرشيفية، 3 مراجعات، 4 فيديوهات (يوتيوب)، مقال واحد.
- **حالات فارغة صادقة:** مساحة (مَحْكاة / كتب / مصادر) وON AIR — بلا أي محتوى مختلق.

## قواعد الحركة (RTL)

- لا `letter-spacing` على العربية أبدًا.
- SplitText: كلمات/أسطر فقط بعد `document.fonts.ready` — أبدًا حرفًا حرفًا.
- `x` في GSAP فيزيائي: يُقلب الاتجاه يدويًا في RTL.
- أرقام وتواريخ داخل `<bdi>`.
- `prefers-reduced-motion` يُعطّل كل الحركات.

## النشر

- `base: "/"` في `astro.config.mjs` حتى يعمل النشر على Cloudflare Pages.
- ملف `.github/workflows/deploy-pages.yml` ينشر `dist/` إلى GitHub Pages عند الدفع إلى `main`.
- النطاق المخصص `qassimz.com` يُدار من Cloudflare؛ نقل DNS إلى GitHub Pages يحتاج قرارًا صريحًا من صاحب الموقع.

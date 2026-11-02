# portofolio-aaron

Personal portfolio for Aaron Wantania — one page, built with Next.js 16 (App Router),
Tailwind CSS v4 and a hand-written design system in `src/app/globals.css`.

The layout is the original template; the content (profile, projects, skills, journey,
contact) has been replaced with Aaron's own.

## Jalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Struktur

```
src/
  app/
    layout.tsx        font, metadata
    page.tsx          susunan section + footer
    globals.css       token warna, tipografi, semua komponen
  components/
    Hero.tsx          nav, nama besar (outline → solid), portrait, sosial
    Experience.tsx    kartu gelap: academic journey, education, achievements
    Services.tsx      accordion skills (satu panel terbuka)
    Work.tsx          grid karya + filter kategori
    Contact.tsx       CTA + strip sosial
    Portrait.tsx      foto asli (hero + avatar)
    WorkThumbs.tsx    placeholder untuk proyek tanpa screenshot
    Year.tsx          tahun footer (dihitung di client)
    Reveal.tsx        animasi masuk saat scroll
    Icons.tsx         ikon garis (arrow, sosial)
  content/site.ts     SEMUA teks, data proyek, link — ubah di sini
```

## Mengubah konten

Semua teks dan tautan ada di `src/content/site.ts`:

- `contact`, `socials` — email, LinkedIn, Instagram, GitHub.
- `nav`, `hero` — label navigasi dan isi hero.
- `journey`, `education`, `achievements` — timeline dan blok pendidikan.
- `skills` — kategori dan daftar tool.
- `projects`, `workFilters` — 9 proyek, kategori filter, screenshot, dan link.

Proyek dengan `href` membuka situs live di tab baru (Warteg, Helmet, Diabetes,
UZORA, Loopera, DATVIS, DISCO, USO, Power BI). Proyek tanpa `href` tampil sebagai kartu tanpa tautan — tidak ada
detail page atau link palsu.

### GitHub

GitHub memakai `https://github.com/ONETANIA` (terverifikasi dari repository
tugas IS388). Kalau URL-nya berubah, cukup ganti `href` di `socials`.

## Aset

| File | Isi |
| --- | --- |
| `public/img/aaron.webp` | Foto portrait (cut-out, dipakai di hero) |
| `public/img/aaron-avatar.jpg` | Square crop foto portrait untuk avatar di contact |
| `public/img/projects/warteg.jpg` | Screenshot situs Warteg Orens Bahari |
| `public/img/projects/helmet.jpg` | Figure dataset + bounding box dari laporan proyek |
| `public/img/projects/diabetes.jpg` | Grafik EDA dari notebook proyek |
| `public/img/projects/uzora.jpg` | Dua layar prototipe UZORA (Figma) |
| `public/img/projects/loopera.jpg` | Grafik unit economics dari proyek |
| `public/img/projects/datvis.jpg` | Screenshot dashboard Tableau dari laporan akhir |
| `public/img/projects/disco.jpg` | Screenshot situs DISCO XIII |
| `public/img/projects/uso.jpg` | Screenshot situs UMN Symphony Orchestra |
| `public/img/projects/powerbi.jpg` | Screenshot laporan Power BI (public view) |

`UZORA` dan `Loopera` sekarang menaut ke prototipe Figma masing-masing.
`UZORA` memakai dua layar asli dari prototipe. `Loopera` masih memakai grafik
unit economics sampai screenshot layarnya diekspor dari Figma.

`public/img/sky.jpg` adalah background langit
(CC0, Wikimedia Commons) yang diatur lewat `body::before` di `globals.css`.

## Catatan data

- GPA 3.86 / 4.00, achievements, dan periode organisasi mengikuti CV.
- Deskripsi proyek hanya memakai materi yang tersedia: laporan Helmet Detection,
  notebook Diabetes (BRFSS 2015), laporan final DATVIS, dan website live.
- Metrik tidak ditampilkan di kartu; angka yang dipakai (mis. 253.680 baris,
  34 provinsi, 2019–2024) berasal dari materi proyek.
- Role individu pada Helmet Detection dan kedua website belum terdokumentasi,
  jadi tidak diklaim di halaman.

## QA

```bash
npm run build
npm run lint
npm run start -- -p 3100
node scripts/shot.mjs            # screenshot 1440 / 768 / 390 ke .shots/
node scripts/test-ui.mjs         # accordion, filter, link, overflow, console
```

`test-ui.mjs` mengasumsikan server di `http://localhost:3000`.

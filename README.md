# FASTINK STUDIO — GitHub Pages Portfolio

Website portfolio statis untuk Fastink Studio.

## Isi folder
- `index.html` — struktur website
- `style.css` — desain/responsive layout
- `script.js` — animasi scroll dan cursor
- `assets/` — 7 karya + logo Fastink Studio

## Cara upload ke GitHub Pages

1. Buat repository baru dengan nama:
   `USERNAME.github.io`
2. Upload **semua isi folder ini**, bukan folder `fastink-portfolio` sebagai satu folder.
3. Pastikan `index.html` berada langsung di root repository.
4. Buka:
   `Settings` → `Pages`
5. Pada `Build and deployment`, pilih:
   `Deploy from a branch`
6. Pilih branch `main` dan folder `/ (root)`.
7. Save.
8. Tunggu beberapa menit, lalu website akan tersedia di:
   `https://USERNAME.github.io/`

## Mengganti karya
Ganti file:
`assets/project-1.jpg` sampai `assets/project-7.jpg`

Jika ingin menambah karya, tambahkan `<article class="project ...">...</article>` di `index.html`.

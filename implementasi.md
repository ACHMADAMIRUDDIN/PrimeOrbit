# Dokumentasi Implementasi Project React.js

Dokumen ini merupakan acuan (guideline) standar pengembangan *front-end* menggunakan React.js. Semua aturan di sini dirancang untuk memastikan kode tetap rapi, modular, *offline-friendly*, dan menghasilkan *slicing* UI yang sangat akurat dengan desain Figma (pixel-perfect).

---

## 1. Standar Asset & Library (Offline-First)

Untuk menjamin ketersediaan aplikasi tanpa bergantung pada koneksi internet untuk *resource* eksternal pihak ketiga:

- **Library Management**: 
  - Tidak diperkenankan menggunakan *CDN (Content Delivery Network)* atau link *online* di dalam file `index.html`.
  - Semua library pendukung harus diinstal secara lokal melalui package manager (`npm` atau `yarn`) dan terdaftar di `package.json`.
- **Manajemen Asset**:
  - **Font**: Semua *web font* harus diunduh dan disimpan di direktori lokal (`src/assets/fonts/`). Pemanggilan font menggunakan aturan `@font-face` di CSS.
  - **Images & Illustrations**: Semua file gambar pendukung aplikasi (PNG, JPG, WebP) harus diunduh dan diletakkan di direktori `src/assets/image/`.
  - **Icons & Logos**: Ikon wajib berformat SVG dan diletakkan di `src/assets/icons/`, atau menggunakan *icon library* lokal (misal: `react-icons`).
  - Dilarang keras menggunakan tag `<img src="https://...">` atau `url('https://...')` di dalam CSS.
- **Referensi Desain**:
  - Gambar panduan atau referensi desain (*design references/mockups*) diletakkan secara terpisah di dalam folder **`image/`** pada *root project*.

---

## 2. Arsitektur & Struktur Folder Modular

Untuk mencegah tercampurnya seluruh kode UI dalam satu tempat, struktur *project* disusun secara modular berdasarkan fungsi dan fitur (*feature-based folder structure*):

```text
/
├── image/              # Penyimpanan gambar referensi desain (mockups dari Figma)
├── src/
│   ├── assets/         # Penyimpanan seluruh aset statis lokal
│   │   ├── image/      # Gambar aset UI (logo, ilustrasi, banner)
│   │   ├── icons/      # Kumpulan ikon SVG kustom
│   │   └── fonts/      # File instalasi font lokal
│   ├── components/     # Komponen global (dapat digunakan di mana saja)
│   │   ├── ui/         # Komponen atomik (Button, Input, Card, Modal)
│   │   └── layout/     # Komponen struktur (Navbar, Sidebar, Footer)
│   ├── features/       # Modul halaman dan fitur aplikasi
│   │   ├── landing-page/
│   │   │   ├── components/
│   │   │   └── index.jsx
│   │   ├── dashboard/
│   │   │   ├── components/
│   │   │   └── index.jsx
│   │   └── auth/
│   │       ├── components/
│   │       └── index.jsx
│   ├── hooks/          # Kumpulan custom React Hooks (useAuth, useFetch, dll)
│   ├── utils/          # Fungsi pembantu, formatter, dan konstanta
│   ├── styles/         # Global CSS, setup variabel warna/tipografi
│   ├── App.jsx         # Konfigurasi routing utama
│   └── main.jsx        # Entry point integrasi React ke DOM
```

**Aturan Penamaan:**
- Folder menggunakan huruf kecil (kebab-case atau camelCase).
- File komponen React wajib menggunakan PascalCase (misal: `HeroSection.jsx`, `Button.jsx`).
- File non-komponen (helper, hooks) menggunakan camelCase (misal: `formatDate.js`, `useToggle.js`).

---

## 3. Standar Slicing UI (Pixel-Perfect ke Figma)

Implementasi desain harus memiliki tingkat akurasi tertinggi terhadap prototipe Figma:

- **Akurasi Visual**: Margin, padding, ukuran font, *line-height*, ketebalan font (*font-weight*), warna, dan *border-radius* harus sama persis dengan properti inspeksi di Figma.
- **Sensitivitas Detail**: Perhatikan detail kecil seperti *drop shadow*, transparansi warna (opacity), efek *glassmorphism*, dan transisi *hover/active*.
- **Desain Sistem & Variabel**: Hindari *hardcode* kode warna berulang-ulang. Daftarkan semua warna (Primary, Secondary, Text, Background) ke dalam variabel global (CSS Variables atau konfigurasi *framework* styling).
- **Integritas Desain**: Developer tidak diperkenankan mengubah, memodifikasi, atau mengurangi elemen desain dengan alasan apapun kecuali atas persetujuan desainer.
- **Responsivitas Terukur**: Jika ada bagian layar yang belum terdesain (misalnya *mobile view*), developer harus menggunakan insting *best-practice UI/UX* yang selaras dan mendekati *style* desain desktop (misal: mengubah layout *grid* menjadi *flex-col* stack).

---

## 4. Standar Teknologi & Clean Code

- **Core**: Menggunakan React.js (Sangat disarankan di-bootstrap menggunakan **Vite** untuk kecepatan server dev dan proses build).
- **Styling**: Boleh menggunakan Vanilla CSS/SCSS (diatur dalam *CSS Modules* agar scope terjaga) atau Tailwind CSS (sesuai persetujuan awal).
- **Reusable Components**: 
  - Jangan mengulang struktur kode (*Don't Repeat Yourself*). Jika ada elemen yang muncul lebih dari dua kali (seperti *Card* atau *Button* khusus), buatlah menjadi *Reusable Component*.
- **Data Flow & State**:
  - Pahami siklus hidup React. Pisahkan antara komponen logik (*smart components*) dan komponen tampilan (*dumb/presentational components*).
  - Gunakan *props* yang jelas.

---

## 5. Rencana Dokumentasi (Documentation Plan)

Untuk menjaga *maintainability* jangka panjang, proyek ini akan didokumentasikan dengan standar berikut:

1. **README.md (Dokumentasi Repositori)**:
   - Penjelasan tingkat tinggi (*high-level*) mengenai proyek.
   - Panduan instalasi dan instruksi menjalankan proyek di lokal (`npm install` & `npm run dev`).
   - Penjelasan struktur folder dan arsitektur aplikasi.
   - Daftar pustaka (*libraries*) utama yang digunakan.
2. **Komentar Inline & JSDoc**:
   - Fungsi, *helper*, atau logika khusus (terutama di dalam `hooks` atau `utils`) harus didokumentasikan menggunakan sintaks JSDoc.
   - Hindari komentar yang redundan. Komentar digunakan untuk menjelaskan **mengapa** (*why*) suatu pendekatan diambil, bukan sekadar **apa** (*what*) yang dilakukan oleh kode.
3. **Dokumentasi Komponen UI**:
   - Setiap komponen dasar (di folder `components/ui/`) idealnya mendokumentasikan *props* yang diterima, tipe datanya, dan penggunaannya.
   - *Tools* seperti **Storybook** dapat diimplementasikan di kemudian hari untuk mendokumentasikan secara interaktif komponen-komponen yang *reusable*.

---

## 6. Target Akhir (Definition of Done)

Proyek ini dianggap selesai dan berhasil apabila:
1. **100% Local (Offline-Ready)**: Tidak ada *network request* ke *third-party asset/CDN* saat halaman dimuat (kecuali pemanggilan API Backend nantinya).
2. **Modular & Bersih**: Struktur folder *features* memisahkan UI *Landing Page*, *Dashboard*, dsb secara tegas tanpa ada file raksasa (*monolith component*).
3. **Pixel-Perfect**: Tampilan pada browser identik dengan desain Figma, baik secara dimensi maupun estetika interaktifnya.
4. **Tanpa Error Console**: Tidak terdapat peringatan hilangnya *dependencies*, peringatan key *mapping*, atau error *resource not found*.
5. **Terdokumentasi Penuh**: Minimal terdapat `README.md` yang lengkap untuk membantu *onboarding* developer baru sesuai *Documentation Plan*.
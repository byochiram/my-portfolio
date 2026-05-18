## Tujuan

Reframing portofolio Rosidah Rahmati dari "Web Developer" menjadi **Fresh Graduate Informatika** yang sedang mencari pekerjaan. Gaya simpel & to-the-point (seperti contoh teman), dengan **carousel screenshot** per projek karena projek-projek kuliah tidak di-deploy.

## Perubahan per section

### 1. Hero (`Hero.tsx`)
- Badge: "Fresh Graduate · Open to Work · Indonesia"
- Headline: "Hi, I'm *Rosidah* — Informatics fresh graduate."
- Sub-tagline: "Interested in software development, database management, data science, and programming."
- CTA: "See my projects" + "Get in touch"
- Hapus penyebutan "web developer".

### 2. About (`About.tsx`)
- Cerita singkat: lulus Informatika, ketertarikan di software dev / database / data science / programming.
- 3 highlight diganti jadi: **Software Development**, **Database Management**, **Data Science & Programming** (pakai ikon Lucide: Code2, Database, LineChart).
- Bahasa: "Selama kuliah saya mengerjakan beberapa projek mulai dari tugas mata kuliah, PKL, sampai skripsi."

### 3. Projects (`Projects.tsx`) — perubahan utama
Tampilkan 3 projek:

1. **Tempus Auctions — Watch Auction System** (Skripsi)
   - Stack: Laravel, Blade, Tailwind, MySQL, Duitku, Resend
   - Status: `live` (tetap punya demo karena yang ini deploy)
   - Repo: github.com/byochiram/watch-auction-system

2. **SIGMA — Projek PPL Semester 5**
   - Stack: sesuai jawaban user (placeholder dulu, mis. Laravel/PHP/MySQL)
   - Status: `not-deployed` — pakai carousel preview
   - Role: anggota tim PPL

3. **PKL / Magang Project**
   - Stack: placeholder (Laravel/PHP/MySQL)
   - Status: `not-deployed` — pakai carousel preview
   - Role: intern developer

**Refactor card projek** agar lebih to-the-point dan mendukung gambar preview:
- Tambah field `previews: string[]` (array path gambar) di tipe `Project`.
- Ganti badge status `private`/`source` jadi satu status netral `not-deployed` dengan label ringan "Coursework project · local only" (lebih sesuai konteks tugas kuliah, bukan client work).
- Buat komponen baru **`ProjectPreviewCarousel.tsx`** (di `src/components/portfolio/`):
  - Horizontal scroll carousel pakai shadcn `Carousel` (sudah ada di `src/components/ui/carousel.tsx`) atau scroll-snap native.
  - Tampil di atas konten card; aspect ratio 16/10, rounded-2xl, border, shadow lembut.
  - Dots indicator + arrow tombol.
  - Lazy load (`loading="lazy"`).
- Hapus tombol "Visit live" untuk projek `not-deployed`; ganti jadi tombol "View on GitHub" (kalau ada) saja.
- Card layout: preview di atas → status pill + year → judul → role → deskripsi singkat → tech chips → tombol.

### 4. Skills (`Skills.tsx`)
Reorganize sesuai minat:
- **Languages**: Python, SQL, JavaScript, PHP
- **Web & Frameworks**: Laravel, React, Tailwind CSS
- **Database**: MySQL, PostgreSQL
- **Data & ML**: Pandas, NumPy, scikit-learn (basic)
- **Tools**: Git, GitHub, VS Code

### 5. Navbar / Contact / Footer
- Navbar: tagline kecil di logo "Fresh Graduate" (opsional), nama tetap.
- Contact: tidak berubah (email, GitHub, LinkedIn).
- Footer: ganti "Crafted with care." → "Looking for opportunities · Available immediately."

## File yang akan dibuat/diubah

- **New**: `src/components/portfolio/ProjectPreviewCarousel.tsx`
- **Edit**: `Hero.tsx`, `About.tsx`, `Projects.tsx`, `Skills.tsx`, `Navbar.tsx`, `Footer.tsx`
- **Edit**: `src/routes/__root.tsx` (meta description ganti ke fresh graduate framing)

## Yang dibutuhkan dari user setelah plan disetujui

1. **Screenshot preview** untuk SIGMA & PKL project (drop ke chat) — akan saya copy ke `src/assets/projects/...`.
2. Konfirmasi singkat: nama persis projek **PKL** dan **SIGMA** (apa kepanjangannya / 1-kalimat deskripsi tiap projek), supaya bukan placeholder.

Kalau gambar belum ada, saya pakai placeholder gradient dulu di carousel sampai screenshot diupload.

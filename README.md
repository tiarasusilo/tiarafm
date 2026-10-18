# Portofolio (gaya halaman artis)

Situs statis satu halaman. Tidak perlu build, tidak ada dependensi.

## Isi folder
- `index.html` : struktur halaman (HTML)
- `style.css` : seluruh tampilan (CSS)
- `main.js` : seluruh data dan interaksi (JS)
- `favicon.svg` : ikon tab browser
- `vercel.json` : pengaturan Vercel (header keamanan dan cache)
- `robots.txt` : izin mesin pencari
- `assets/` : tempat foto dan CV

## Yang perlu kamu ganti
Teks di `index.html`: nama, email, tautan sosial, tulisan hero.
Data di `main.js`: proyek, cerita, pengalaman, alat, buku, foto.
Cari teks berikut dengan Ctrl+F di file yang sesuai:
1. `Nama Kamu` : ganti dengan namamu (judul, hero, footer, player). Pakai Find & Replace.
2. `nama.fm` : nama logo di pojok kiri atas.
3. `halo@namakamu.com` : emailmu (ada di beberapa tempat).
4. `var T=[` : daftar proyek (Populer dan Diskografi).
5. `var STORY=[` : kalimat di bagian Cerita.
6. `var TOUR=[` : pengalaman kerja.
7. `var TL=[` : alat dan persentase keahlian.
8. `// ===== BUKU` : daftar buku dan review (di `main.js`).
9. Tautan LinkedIn dan GitHub di bagian Kontak: ganti `href="#kontak"` dengan URL aslimu.
10. Tulisan `1.204 pendengar bulanan` di hero: ganti atau hapus.

### Foto
Taruh fotomu di `assets/foto.jpg`, lalu ubah baris ini di `main.js`:
`var PHOTO='';` menjadi `var PHOTO='assets/foto.jpg';`

### CV
Taruh `cv.pdf` di `assets/`. Tombol "Unduh CV" sekarang baru menampilkan pesan "segera tersedia". Hubungkan ke file dengan mengganti tautan "Unduh CV" di bagian Kontak menjadi:
`<a href="assets/cv.pdf" download>Unduh CV</a>`

## Cara deploy ke Vercel

### Opsi A: lewat GitHub (disarankan, update otomatis)
1. Buat repository baru di GitHub, upload semua isi folder ini.
2. Buka vercel.com, login, klik **Add New > Project**.
3. Pilih repository tadi, lalu **Import**.
4. Framework Preset: **Other**. Kosongkan Build Command dan Output Directory.
5. Klik **Deploy**. Selesai, kamu dapat alamat `nama-proyek.vercel.app`.
6. Setiap kali kamu push perubahan ke GitHub, Vercel otomatis memperbarui situs.

### Opsi B: lewat terminal
```
npm i -g vercel
cd portfolio
vercel          # ikuti pertanyaannya, lalu
vercel --prod   # rilis ke produksi
```

### Domain sendiri
Di dashboard Vercel: **Settings > Domains**, tambahkan domainmu dan ikuti petunjuk DNS.

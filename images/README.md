# Panduan Mengganti Foto

Folder ini berisi placeholder SVG. Ganti dengan foto asli:

| File placeholder     | Ganti dengan file             | Ukuran ideal    |
|----------------------|-------------------------------|-----------------|
| `profile.svg`        | `profile.jpg` (atau .png)     | 500 × 500 px    |
| `project-1.svg`      | `project-1.jpg`               | 1200 × 750 px   |
| `project-2.svg`      | `project-2.jpg`               | 1200 × 750 px   |
| `project-3.svg`      | `project-3.jpg`               | 1200 × 750 px   |
| `project-4.svg`      | `project-4.jpg`               | 1200 × 750 px   |

## Cara ganti

1. Simpan foto ke folder `images/` dengan nama seperti tabel di atas.
2. Buka `index.html` — cari baris `<img src="images/profile.svg"` → ganti `.svg` jadi `.jpg`.
3. Buka `script.js` — cari `image: "images/project-1.svg"` → ganti `.svg` jadi `.jpg` (lakukan untuk keempat project).
4. Refresh browser.

**Tips**: foto profil paling bagus pakai ratio 1:1 (persegi) dengan wajah di tengah. Foto project pakai landscape 16:10 dan pastikan resolusi cukup tinggi biar tidak pecah saat di-hover (efek zoom 108%).

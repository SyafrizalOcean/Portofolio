# Panduan Mengganti Foto

Folder ini berisi placeholder SVG. Ganti dengan foto asli:

| File placeholder | Ganti dengan file            | Ukuran ideal    |
|------------------|------------------------------|-----------------|
| `profile.svg`    | `profile.jpg` (atau .png)    | 400 × 500 px    |
| `project-1.svg`  | `project-1.jpg`              | 1200 × 750 px   |
| `project-2.svg`  | `project-2.jpg`              | 1200 × 750 px   |
| `project-3.svg`  | `project-3.jpg`              | 1200 × 750 px   |
| `project-4.svg`  | `project-4.jpg`              | 1200 × 750 px   |

## Cara ganti

1. Simpan foto ke folder `images/` dengan nama seperti tabel di atas.
2. Buka `index.html` — cari `<img src="images/profile.svg"` → ganti ke `profile.jpg`.
3. Buka `script.js` — cari `image: "images/project-1.svg"` sampai `project-4.svg` → ganti ke `.jpg`.
4. Refresh browser.

**Catatan**:
- Foto profil ideal portrait (rasio ~4:5) dengan wajah di tengah-atas.
- Foto proyek landscape (16:10) — resolusi minimal 1200px agar tidak pecah saat hover zoom.

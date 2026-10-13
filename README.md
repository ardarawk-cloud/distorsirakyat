# DISTORSI RAKYAT

Media independen punk, satir, dan kritik sosial Indonesia.

**Website:** https://distorsirakyat.nadmo.id/  
**Branch produksi:** `main`  
**Status:** Source v0.4 telah masuk repo. Deploy ke domain memerlukan konfigurasi Cloudflare Actions satu kali.

## Prinsip editorial

- Tidak anti-negara atau anti-pemerintah secara umum; kritis terhadap kebijakan dan penyalahgunaan kekuasaan yang merugikan warga.
- Kritik keras, tetapi fakta harus punya sumber, tanggal, dan konteks.
- Satir, dugaan, dan opini wajib dibedakan dari fakta.
- Membuka ruang koreksi dan hak jawab. Tidak menyebarkan data pribadi atau tuduhan tanpa bukti.

## Teknologi

HTML, CSS, dan JavaScript statis; tanpa build/npm, analytics, cookies, database atau backend. Kode dan desain responsif berada di `index.html` dan `assets/`. Form laporan warga baru membuat file draf lokal dan **tidak mengirim data ke redaksi**.

## Cloudflare Pages (project lama Drag & Drop)

Cloudflare tidak menyediakan konversi dari project Pages Direct Upload ke Git-integrated. **Jangan hapus project lama atau custom domain.** Repo ini menyediakan GitHub Actions untuk melakukan upload otomatis ke project Pages yang sama lewat Wrangler.

### Satu kali konfigurasi

1. Di GitHub repository Settings → Secrets and variables → Actions, tambahkan **Repository secrets**: `CLOUDFLARE_API_TOKEN` (API token Cloudflare dengan izin Cloudflare Pages edit pada akun terkait) dan `CLOUDFLARE_ACCOUNT_ID` (Cloudflare Account ID, **bukan zone ID**).
2. Jika nama project Pages lama **bukan** `distorsi-rakyat`, buat **Repository variable** `CF_PAGES_PROJECT` berisi nama project yang sebenarnya. Domain `distorsirakyat.nadmo.id` tetap milik project lama.
3. Buka GitHub Actions → `Distorsi Rakyat - Check and Deploy` → Run workflow, atau push ke `main`.
4. Pastikan job `publish` sukses **dan** langkah `Publish to existing Cloudflare Pages project` tidak diskip. Setelah itu verifikasi website dengan membuka tautan produksi.

**Keamanan:** Jangan mengirim nilai token/API rahasia di chat atau menyimpannya di repository. Simpan di GitHub Secrets.

## Sumber edisi v0.4

1. PLN — Gangguan dan pemulihan listrik Bali, 2–3 Mei 2025.
2. BGN — 1.999 SPPG sementara dihentikan karena belum daftar SLHS, 7 September 2026.
3. KLH — Kebijakan sampah residu di TPA Suwung, April–Juni 2026.
4. Ombudsman Bali — Laporan pelayanan publik 2025, rilis 21 Januari 2026.
5. Reuters — Pengetatan biaya perjalanan dinas, 8 Oktober 2026.
6. Reuters — Penanganan kebakaran hutan dan kabut asap, 13 Oktober 2026.

Semua artikel memiliki tautan sumber dan label satir/editorial di pembaca artikel.

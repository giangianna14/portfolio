# Panduan Deployment (Dokploy & Cloudflare Tunnel)

Dokumen ini berisi panduan langkah demi langkah untuk melakukan *deployment* aplikasi portofolio ini menggunakan **Dokploy** (sebagai manager container/VPS) dan **Cloudflare Tunnel** (untuk mengekspos web ke internet publik secara aman dengan HTTPS gratis).

---

## Tahap 1: Setup Aplikasi di Dokploy

1. Buka *dashboard* **Dokploy** di VPS Anda.
2. Masuk ke menu **Projects**, buat proyek baru (misal: `My Portfolio`).
3. Di dalam proyek tersebut, klik **Create Application**, beri nama (misal: `portfolio-web`).
4. Masuk ke pengaturan aplikasi tersebut:
   - **Tab General (Source):**
     - Provider: **GitHub** *(Pastikan Anda sudah menghubungkan akun GitHub di Settings Dokploy).*
     - Repository: Pilih repositori GitHub Anda (contoh: `giangianna14/portfolio`).
     - Branch: `main`.
   - **Tab Build:**
     - Build Type: **Dockerfile**. *(Dokploy akan otomatis membaca `Dockerfile` yang ada di root proyek).*
   - **Tab Environment:**
     - Container Port: **`80`** *(Wajib, karena Nginx di Docker berjalan di port 80).*
   - **Tab Advanced:**
     - Centang **Auto Deploy** agar web otomatis diperbarui setiap kali Anda melakukan `git push`.
5. Klik **Deploy** dan tunggu hingga statusnya *Running*.

---

## Tahap 2: Konfigurasi Cloudflare Tunnel (via SSH)

Karena Anda menggunakan *Local Configured Tunnel*, Anda harus mendaftarkan rute internal di VPS Anda.

1. Buka terminal dan masuk ke VPS via SSH.
2. Edit file konfigurasi Cloudflared Anda:
   ```bash
   sudo nano /etc/cloudflared/config.yml
   ```
3. Tambahkan aturan baru untuk portofolio di bagian `ingress:` **(Pastikan posisinya berada DI ATAS aturan `- service: http_status:404`)**:
   ```yaml
   ingress:
     # ... aturan aplikasi lain ...
     
     - hostname: giangianna.gibtekapps.my.id
       service: http://localhost:80
       originRequest:
         httpHostHeader: giangianna.gibtekapps.my.id
         
     # Aturan catch-all ini WAJIB di paling bawah!
     - service: http_status:404
   ```
4. Validasi file YAML Anda untuk memastikan tidak ada salah spasi/indentasi:
   ```bash
   cloudflared tunnel --config /etc/cloudflared/config.yml ingress validate
   ```
5. Jika hasilnya `OK`, *restart service*-nya:
   ```bash
   sudo systemctl restart cloudflared
   ```

---

## Tahap 3: Publikasi DNS di Cloudflare

Meski *tunnel* sudah disetel, alamat web Anda belum dikenali oleh internet dunia.

1. Buka *dashboard* web **Cloudflare** utama (bukan Zero Trust).
2. Pilih domain Anda (misal: `gibtekapps.my.id`).
3. Masuk ke menu **DNS > Records**.
4. Klik **Add Record** dan isi:
   - **Type**: `CNAME`
   - **Name**: `giangianna` *(Subdomain yang diinginkan)*
   - **Target**: `[UUID-Tunnel-Anda].cfargotunnel.com` *(Contoh: afdb80a5...cfargotunnel.com)*
   - **Proxy status**: Pastikan awan **Orange** (Proxied) menyala.
5. Klik **Save**.

---

## Tahap 4: Daftarkan Domain di Dokploy (Tanpa Let's Encrypt)

Dokploy perlu tahu bahwa ia harus menerima trafik dari domain tersebut.

1. Kembali ke *dashboard* **Dokploy**, masuk ke aplikasi `portfolio-web`.
2. Buka tab **Domains**.
3. Ketikkan nama domain lengkap Anda: `giangianna.gibtekapps.my.id`.
4. ⚠️ **SANGAT PENTING:** 
   - **JANGAN centang** `HTTPS / Automatically provision SSL Certificate`.
   - **Biarkan Let's Encrypt MATI (sakelar abu-abu)**.
   *(Jika dinyalakan, Let's Encrypt akan gagal melakukan validasi karena terhalang oleh Cloudflare Tunnel, menyebabkan web Anda error / 502 Bad Gateway).*
5. Klik **Add Domain** / **Update**.

---

## Tahap 5: Paksa Penggunaan HTTPS (Gembok Hijau)

Agar semua pengunjung yang tidak sengaja mengetik `http://` otomatis dialihkan ke `https://` yang aman:

1. Di *dashboard* web **Cloudflare** (menu domain utama).
2. Buka menu **SSL/TLS > Edge Certificates**.
3. Cari opsi **Always Use HTTPS**.
4. Ubah sakelarnya menjadi **ON**.

---

## Selesai! 🚀
Proses *deployment* selesai. Anda bisa mengetikkan alamat web Anda di *browser* dan portofolio Anda siap menyapa dunia. Setiap kali Anda ingin memperbarui kode (*Tech Stack*, *Experience*, desain), cukup lakukan `git push`, dan biarkan Dokploy CI/CD yang bekerja!

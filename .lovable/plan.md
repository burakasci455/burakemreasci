# Planlanan revizyon

Siteyi "tasarımcı portföyü" görünümünden çıkarıp **marketing & growth odaklı kişisel marka sitesi** haline getireceğim. Yerel markalara web sitesi + temel SEO + ölçümleme altyapısı kuran biri olarak konumlanacaksın.

---

## 1. Yeni site mimarisi (tek sayfa, smooth scroll)

```text
1. Hero            → değer önerisi + 2 CTA + mini güven şeridi
2. Ne Yapıyorum    → 5 hizmet kartı
3. Nasıl Çalışıyorum → 4 adımlı süreç
4. Projeler        → mini case study formatında
5. Neden Ben       → marketing/growth bakış farkı
6. Hakkımda        → kısa, profesyonel önce, kişisel sonra
7. İletişim        → net CTA
8. Footer
```

Nav linkleri: Hizmetler · Süreç · Projeler · Hakkımda · İletişim

---

## 2. Bölüm bölüm içerik yönü

### Hero (3 alternatif üreteceğim, sen seçeceksin)
- **A — Profesyonel:** "Yerel markalara modern web sitesi ve görünür olacakları altyapıyı kuruyorum."
- **B — Sıcak/samimi:** "Markanı internette doğru yerde, doğru şekilde göstereyim."
- **C — Growth odaklı:** "Sadece güzel site değil — bulunan, ölçülen, müşteri getiren site."

Her birinde:
- Tek güçlü H1 + 1–2 cümle alt açıklama
- **2 CTA:** "Projeleri Gör" · "İletişime Geç"
- Altında mini güven şeridi: Website kurulumu · Temel SEO · Search Console · Analytics · Yerel görünürlük

### Ne Yapıyorum
5 hizmet kartı, her biri kısa açıklamalı:
1. Kurumsal web sitesi kurulumu
2. Temel SEO kurulumu
3. Search Console & Analytics hazırlığı
4. Yerel işletmeler için görünürlük odaklı sayfa yapısı
5. Marka mesajını netleştirme

### Nasıl Çalışıyorum
4 adımlı süreç: Keşif → Yapı & İçerik → Kurulum & Yayın → Ölçümleme & Devir

### Projeler (mini case study)
Her kart şu yapıda:
- Proje adı · sektör/kim için
- **Sorun:** ...
- **Yaptıklarım:** ...
- **Hedeflenen etki:** ... (uydurma rakam yok — "kurulan yapı / amaçlanan etki" dili)

İlk kart **Atelier Meşe** dolacak (mevcut 5 görsel modal'da kalacak), 02 ve 03 "yakında" iskelet olarak duracak ama yine case study formatında.

### Neden Ben
4 madde: estetik + growth bakışı · yerel işletme ihtiyacını anlama · hızlı teknik kurulum · sade iletişim. Abartısız, gerçekçi ton.

### Hakkımda
Kısa: önce ne yaptığım, sonra "marketing öğrencisiyim, growth tarafına ilgim var, Sakarya/İstanbul" gibi insan tarafı 2-3 cümle.

### İletişim
Mevcut yapı kalır (e-posta + LinkedIn), üstüne tek cümlelik net çağrı.

---

## 3. SEO işleri

- **Title:** `Burak Emre Aşcı — Web Sitesi & Temel SEO | Yerel Markalar İçin Dijital Görünürlük`
- **Meta description:** Yerel markalara modern web sitesi, temel SEO ve Search Console kurulumu. Bulunurluk ve güven inşa eden dijital altyapı.
- **H1:** Hero başlığı (seçilen alternatif)
- **JSON-LD:** mevcut `Person` schema'ya `knowsAbout` (Web Design, SEO, Search Console, Local SEO, Growth Marketing), `image`, `worksFor`/freelance alanı eklenecek; ayrıca `WebSite` schema eklenecek
- **Canonical & og:url:** mutlak URL'ye geçilecek (`https://burakemreasci.lovable.app`) — şu an `/` relatif
- **sitemap.xml:** `BASE_URL` mutlak URL ile doldurulacak
- **robots.txt:** `Sitemap:` direktifi eklenecek
- **Section H2'leri:** her bölüme semantic H2 (Ne Yapıyorum, Nasıl Çalışıyorum, vb.)
- Alt text'ler, lang, viewport zaten var

## 4. Teknik & UX denetim raporu

Uygulama bittikten sonra istediğin 3 başlıklı raporu (kritik sorunlar / hızlı kazanımlar / uzun vadeli) sunacağım.

---

## Teknik notlar (developer için)

- Yeni bileşenler: `Services.tsx`, `Process.tsx`, `WhyMe.tsx` → `src/components/site/`
- Mevcutları güncelle: `Hero.tsx`, `Projects.tsx` (case study yapısı), `About.tsx`, `Nav.tsx` (yeni anchor'lar), `Contact.tsx` (üst metin)
- `src/routes/index.tsx` → meta/title/JSON-LD güncelle, mutlak URL'lere geç, yeni section'ları monte et
- `src/routes/sitemap.xml.ts` → `BASE_URL` doldur
- `public/robots.txt` → Sitemap satırı
- Yeni içerik bölümleri için ikon olarak `lucide-react` (zaten kurulu)

---

## Onayın gereken tek karar

**Hero için A, B, C alternatiflerinden hangisini istiyorsun?** (yoksa üçünü de yazıp önizleme bırakayım mı, sen sitede bakıp birini seç?)

Planı onaylarsan implementasyona geçerim — Hero seçimini bu sırada da netleştirebiliriz.
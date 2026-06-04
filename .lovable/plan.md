## Hedef

Burak Emre AŞCI için sade, akıcı, koyu (Midnight Indigo) tonlu kişisel portföy sitesi. Tek sayfa, yumuşak scroll ile geçen bölümler. Sahte içerik yok — projeler ileride doldurulacak şekilde boş/placeholder yapıda hazırlanacak.

## Tasarım yönü

- Palet: `#0a0a1a` (arka plan), `#141432` (yüzeyler), `#1e1e5a` (vurgu yüzey), `#4f46e5` (indigo aksan)
- Tipografi: Space Grotesk (başlıklar, geniş tracking) + DM Sans (gövde)
- His: minimalist, editöryel, bol nefes alanı, ince çizgisel ayraçlar, indigo aksanlı küçük detaylar
- Animasyon: sade — bölümler scroll'da yumuşak fade/translate ile gelir, hero'da ince bir gradient parıltısı, link/hover'larda underline animasyonu. Abartı yok.
- Tek sayfa kompozisyon (kullanıcı seçimi bana bırakıldı): ortalanmış asimetrik bir hero + alternatif hizalı bölümler. Tek bir uzun, akıcı sayfa kişisel sitelere daha samimi durur.

## Sayfa yapısı (tek sayfa, smooth scroll)

1. **Üst nav** — sol: "BEA" monogram • sağ: Hakkımda / Projeler / İletişim (hash anchor, in-page scroll)
2. **Hero**
   - Üst: küçük kerned etiket "Tasarımcı · Sakarya / İstanbul"
   - Büyük başlık: "Markalar için sade ve işlevsel kimlikler tasarlıyorum."
   - Alt satır: "Burak Emre AŞCI"
   - İndigo aksanlı ince bir alt çizgi / parıltı detayı
3. **Hakkımda**
   - Sol: "Hakkımda" küçük başlık
   - Sağ: "Sakaryalıyım. İstanbul Aydın Üniversitesi'nde sosyoloji, aynı zamanda Anadolu Üniversitesi'nde açıktan işletme okuyorum. Bir süredir tasarımla ilgileniyorum; ilgi alanlarım yaratıcılıkla ilgili her şey — biçim, tipografi, ritim, hikâye."
4. **Projeler**
   - Başlık + küçük not: "Yakında — şu an üzerinde çalıştığım işler buraya gelecek."
   - 3 adet boş "proje kartı" iskeleti (ince border, "Proje 01 · Coming soon" etiketi). İleride tek tek dolduracağız.
5. **İletişim**
   - E-posta: `burakemreasci2004@gmail.com` (mailto link)
   - LinkedIn: "Burak Emre AŞCI" → `https://www.linkedin.com/in/burak-emre-asci-7606a52b7/` (yeni sekme, rel=noopener)
6. **Footer** — © 2026 Burak Emre AŞCI • küçük "↑ yukarı" linki

## Boş/uydurulmayan kısımlar

- "Yetenekler / araçlar" bölümü **eklenmeyecek** (henüz net bir liste yok, sallamayalım istedin).
- "Misyon" sloganı da eklenmeyecek — yapay durur. Bunun yerine projeler bölümünde dürüst bir "yakında" notu olacak.
- Projeler iskelet olarak duracak; ileride her birini beraber ekleriz (görsel + başlık + kısa açıklama + rol).

## Teknik notlar

- Tek route: `src/routes/index.tsx` (placeholder içerik tamamen değişecek).
- Renkler `src/styles.css` içinde semantic token olarak (oklch) tanımlanacak; dark theme tek mod olarak ayarlanacak (`<html class="dark">`). Light mode toggle eklenmeyecek (istemedin).
- Fontlar `@import` ile Google Fonts üzerinden `src/styles.css`'e eklenecek; `--font-display` ve `--font-body` Tailwind tokenlarına bağlanacak.
- Bileşenler küçük parçalara bölünecek: `Nav`, `Hero`, `About`, `Projects`, `Contact`, `Footer` → `src/components/site/` altında.
- SEO: `head()` içinde title "Burak Emre AŞCI — Tasarımcı", description, og:title/og:description, canonical "/". JSON-LD `Person` schema (ad + LinkedIn sameAs).
- Scroll animasyonları için hafif bir IntersectionObserver hook (`useInView`) — ekstra paket eklemeden.
- Erişilebilirlik: tek H1 (hero), semantic `<section>` etiketleri, link `aria-label`leri.

## Sonraki adımlar (bu plandan sonra)

1. Onaylarsan siteyi kurarım.
2. Sen önizlemede bakarsın, ince ayar yaparız (boşluk, font ağırlığı vb.).
3. Sonra adım adım: gerçek proje eklemek → custom domain bağlamak → SEO için meta + sitemap ince ayarı → Google'a indeksletmek.

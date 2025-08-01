# Brew & Bean - Kahve Dükkanı Web Sitesi

Next.js 15, TypeScript ve Tailwind CSS ile geliştirilmiş modern, responsive bir kahve dükkanı web sitesi. Bu proje, menü, hakkımızda sayfası ve iletişim bilgileri dahil olmak üzere tam bir online varlığa sahip güzel bir kahve dükkanını sergiler.

## 🚀 Özellikler

- **Modern Tasarım**: Kahve temalı renk paleti ile temiz, profesyonel tasarım
- **Responsive Layout**: Tüm cihazlarda mükemmel çalışan tam responsive tasarım
- **Hızlı Performans**: Next.js 15 ile geliştirilmiş ve hız için optimize edilmiş
- **SEO Optimizasyonu**: Uygun meta etiketleri ve semantik HTML yapısı
- **Erişilebilirlik**: WCAG uyumlu, uygun ARIA etiketleri ve klavye navigasyonu
- **TypeScript**: Uygulama genelinde tam tip güvenliği

## 📱 Sayfalar

- **Ana Sayfa**: Hero bölümü, özellikler, menü önizlemesi ve çağrı-to-action
- **Menü**: Fiyatlandırma ile kapsamlı kahve ve yemek menüsü
- **Hakkımızda**: Şirket hikayesi, ekip, değerler ve kahve süreci
- **İletişim**: İletişim formu, konum detayları ve SSS bölümü

## 🛠️ Teknoloji Yığını

- **Framework**: App Router ile Next.js 15
- **Dil**: TypeScript
- **Stil**: Tailwind CSS v4
- **Fontlar**: Geist Sans ve Geist Mono (Google Fonts)
- **İkonlar**: Heroicons (SVG)
- **Deployment**: Vercel deployment için hazır

## 🎨 Tasarım Sistemi

### Renkler
- **Primary**: Kahve kahverengisi (#8B4513)
- **Secondary**: Karamel (#D2691E)
- **Accent**: Kumlu kahverengi (#F4A460)
- **Background**: Açık beyaz (#fafafa)
- **Text**: Koyu gri (#1a1a1a)

### Tipografi
- **Başlıklar**: Geist Sans (Bold)
- **Gövde**: Geist Sans (Regular)
- **Kod**: Geist Mono

## 🚀 Başlangıç

### Gereksinimler

- Node.js 18+ 
- npm veya yarn

### Kurulum

1. Repository'yi klonlayın:
```bash
git clone <repository-url>
cd coffee-website
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu çalıştırın:
```bash
npm run dev
```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

### Mevcut Scriptler

- `npm run dev` - Turbopack ile geliştirme sunucusunu başlat
- `npm run build` - Production için build
- `npm run start` - Production sunucusunu başlat
- `npm run lint` - ESLint çalıştır

## 📁 Proje Yapısı

```
coffee-website/
├── src/
│   └── app/
│       ├── page.tsx          # Ana sayfa
│       ├── menu/
│       │   └── page.tsx      # Menü sayfası
│       ├── about/
│       │   └── page.tsx      # Hakkımızda sayfası
│       ├── contact/
│       │   └── page.tsx      # İletişim sayfası
│       ├── layout.tsx        # Root layout
│       ├── globals.css       # Global stiller
│       └── favicon.ico       # Favicon
├── public/                   # Statik dosyalar
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎯 Ana Bileşenler

### Navigasyon
- Backdrop blur ile sabit header
- Responsive mobil menü
- Aktif sayfa vurgulaması

### Hero Bölümü
- Kahve temalı mesajlarla büyük tipografi
- Çağrı-to-action butonları
- Gradient arka plan

### Menü Sistemi
- Kategorize edilmiş kahve içecekleri
- Yemek ve hamur işi ürünleri
- Fiyatlandırma ve açıklamalar
- Özel teklifler bölümü

### İletişim Formu
- Çok alanlı iletişim formu
- Form doğrulama için hazır
- İletişim bilgileri görüntüleme
- SSS bölümü

## 🎨 Özelleştirme

### Renkler
`src/app/globals.css` dosyasındaki CSS özel özelliklerini güncelleyin:

```css
:root {
  --primary: #8B4513;
  --primary-light: #A0522D;
  --secondary: #D2691E;
  --accent: #F4A460;
  /* ... */
}
```

### İçerik
- `/menu/page.tsx` dosyasında menü öğelerini güncelleyin
- `/about/page.tsx` dosyasında ekip bilgilerini değiştirin
- `/contact/page.tsx` dosyasında iletişim detaylarını değiştirin

### Stil
- Tüm stillendirme Tailwind CSS sınıfları ile yapılır
- Tutarlı temalama için özel CSS değişkenleri
- Responsive breakpoint'ler: sm, md, lg, xl

## 📱 Responsive Tasarım

Web sitesi aşağıdaki breakpoint'lerle tam responsive'dir:
- **Mobil**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Erişilebilirlik

- Semantik HTML yapısı
- Uygun başlık hiyerarşisi
- Etkileşimli öğeler için ARIA etiketleri
- Klavye navigasyon desteği
- Yüksek kontrast renk şeması
- Ekran okuyucu dostu

## 🚀 Deployment

### Vercel (Önerilen)

1. Kodunuzu GitHub'a push edin
2. Repository'nizi Vercel'e bağlayın
3. Otomatik olarak deploy edin

### Diğer Platformlar

Proje Next.js destekleyen herhangi bir platforma deploy edilebilir:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Katkıda Bulunma

1. Repository'yi fork edin
2. Feature branch oluşturun
3. Değişikliklerinizi yapın
4. Kapsamlı test edin
5. Pull request gönderin

## 📄 Lisans

Bu proje açık kaynak kodludur ve [MIT Lisansı](LICENSE) altında mevcuttur.

## 🙏 Teşekkürler

- Kahve dükkanı konsepti ve markalama
- Harika framework için Next.js ekibi
- Utility-first styling için Tailwind CSS
- Güzel SVG ikonları için Heroicons

---

**Brew & Bean** - Mükemmel fincan kahveyi, bir çekirdek bir çekirdek hazırlıyoruz. ☕

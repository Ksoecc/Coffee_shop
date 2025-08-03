import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { CartIndicator } from "@/components/cart-indicator";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Brew & Bean</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-primary font-semibold">Ana Sayfa</Link>
              <Link href="/menu" className="text-foreground hover:text-primary transition-colors">Menü</Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">Hakkımızda</Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">İletişim</Link>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <CartIndicator />
              <Link href="/order" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-light transition-colors">
                Sipariş Ver
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Mükemmel
              <span className="text-primary block">Kahve Deneyimi</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Özenle seçilmiş çekirdeklerimizi keşfedin, uzmanlıkla kavrulmuş ve mükemmellikle demlenmiş. 
              Her fincan tutku ve ustalık hikayesi anlatır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/menu" className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-light transition-colors text-center">
                Menümüzü Keşfet
              </Link>
              <Link href="/contact" className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center">
                Masa Rezervasyonu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Neden Brew & Bean?</h2>
            <p className="text-xl text-muted-foreground">En iyi kahve deneyimini sunmaya tutkulu olduğumuz için</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Taze Kavrulmuş</h3>
              <p className="text-muted-foreground">Çekirdeklerimiz maksimum tazelik ve lezzet için küçük partiler halinde kavrulur.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">El Yapımı</h3>
              <p className="text-muted-foreground">Her fincan, uzman baristalarımız tarafından detaylara dikkat edilerek özenle hazırlanır.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Rahat Atmosfer</h3>
              <p className="text-muted-foreground">Kahvenizi konfor ve rahatlama için tasarlanmış sıcak, davetkar alanımızda keyfini çıkarın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Özel İçeceklerimiz</h2>
            <p className="text-xl text-muted-foreground">En popüler kahve yaratılarımızı keşfedin</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Klasik Espresso",
                description: "En kaliteli çekirdeklerimizden zengin ve güçlü tek shot",
                price: "₺35",
                image: "☕"
              },
              {
                name: "Cappuccino",
                description: "Buharlanmış süt ve köpük ile mükemmel dengelenmiş espresso",
                price: "₺45",
                image: "☕"
              },
              {
                name: "Latte Art",
                description: "Kadifemsi süt ve güzel sanat ile yumuşak espresso",
                price: "₺50",
                image: "☕"
              },
              {
                name: "Mocha",
                description: "Zengin çikolata ve buharlanmış süt ile espresso",
                price: "₺55",
                image: "☕"
              },
              {
                name: "Cold Brew",
                description: "Yumuşak ve ferahlatıcı 18 saatlik soğuk demlenmiş kahve",
                price: "₺40",
                image: "☕"
              },
              {
                name: "Flat White",
                description: "Kadifemsi doku için mikro köpük ile güçlü espresso",
                price: "₺47",
                image: "☕"
              }
            ].map((item, index) => (
              <div key={index} className="bg-muted rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.image}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.name}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-semibold text-lg">{item.price}</span>
                  <button className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary-light transition-colors">
                    Sipariş Ekle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Hikayemiz</h2>
              <p className="text-lg text-muted-foreground mb-6">
                2020 yılında kurulan Brew & Bean, basit bir misyonla başladı: mükemmel fincan kahve sunmak. 
                Çekirdeklerimizi dünyanın dört bir yanındaki sürdürülebilir çiftliklerden tedarik ediyor ve 
                her fincanın yüksek standartlarımızı karşılamasını sağlamak için evde kavuruyoruz.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Tutkulu barista ekibimiz, espresso shot'ını mükemmelleştirmekten güzel latte sanatı yaratmaya 
                kadar kahve yapma sanatında eğitilmiştir. Büyük kahvenin sadece çekirdeklerle ilgili olmadığına, 
                tüm deneyimle ilgili olduğuna inanıyoruz.
              </p>
              <Link href="/about" className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-light transition-colors inline-block">
                Hakkımızda Daha Fazla Bilgi
              </Link>
            </div>
            <div className="bg-primary/10 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Ödüllü Kahve</h3>
              <p className="text-muted-foreground">
                Kahve kalitesi ve müşteri hizmetlerinde mükemmellik için tanınır
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Bugün Bizi Ziyaret Edin</h2>
            <p className="text-xl text-muted-foreground">Kahve dükkanımızda sizi görmek isteriz</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Konum ve Saatler</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Adres</h4>
                  <p className="text-muted-foreground">Kahve Sokak No:123, Kahve Şehri, İstanbul</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Çalışma Saatleri</h4>
                  <p className="text-muted-foreground">Pazartesi - Cuma: 07:00 - 20:00</p>
                  <p className="text-muted-foreground">Cumartesi - Pazar: 08:00 - 21:00</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Telefon</h4>
                  <p className="text-muted-foreground">(0212) 123 45 67</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">İletişime Geçin</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Adınız"
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="E-posta Adresiniz"
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="Mesajınız"
                  rows={4}
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors"
                >
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Brew & Bean</h3>
              <p className="text-muted-foreground">
                Mükemmel fincan kahveyi, bir çekirdek bir çekirdek hazırlıyoruz.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hızlı Bağlantılar</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-muted-foreground hover:text-white transition-colors">Ana Sayfa</Link></li>
                <li><Link href="/menu" className="text-muted-foreground hover:text-white transition-colors">Menü</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-white transition-colors">Hakkımızda</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-white transition-colors">İletişim</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hizmetler</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Kahve Catering</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Özel Etkinlikler</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Kahve Kursları</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Çekirdek Aboneliği</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Bizi Takip Edin</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-muted-foreground mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Brew & Bean. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

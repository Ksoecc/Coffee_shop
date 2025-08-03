import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { CartIndicator } from "@/components/cart-indicator";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary">Brew & Bean</Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">Ana Sayfa</Link>
              <Link href="/menu" className="text-foreground hover:text-primary transition-colors">Menü</Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">Hakkımızda</Link>
              <Link href="/contact" className="text-primary font-semibold">İletişim</Link>
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

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">İletişime Geçin</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sizden haber almak isteriz! Sorunuz, geri bildiriminiz olsun veya sadece merhaba demek istiyorsanız, 
            size yardımcı olmak için buradayız.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Details */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-foreground mb-8">İletişim Bilgileri</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Adres</h3>
                    <p className="text-muted-foreground">Kahve Sokak No:123</p>
                    <p className="text-muted-foreground">Kahve Şehri, İstanbul</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                    <p className="text-muted-foreground">(0212) 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-posta</h3>
                    <p className="text-muted-foreground">merhaba@brewandbean.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Çalışma Saatleri</h3>
                    <p className="text-muted-foreground">Pazartesi - Cuma: 07:00 - 20:00</p>
                    <p className="text-muted-foreground">Cumartesi - Pazar: 08:00 - 21:00</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-foreground mb-4">Bizi Takip Edin</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-8">Bize Mesaj Gönderin</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      Ad
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Soyad
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Soyadınız"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-posta Adresi
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="e-posta@ornek.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon Numarası
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="(0212) 123 45 67"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Konu
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Bir konu seçin</option>
                    <option value="general">Genel Soru</option>
                    <option value="feedback">Geri Bildirim</option>
                    <option value="catering">Catering Talebi</option>
                    <option value="events">Özel Etkinlikler</option>
                    <option value="employment">İş Başvurusu</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Size nasıl yardımcı olabileceğimizi anlatın..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-light transition-colors"
                >
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Bizi Bulun</h2>
            <p className="text-xl text-muted-foreground">
              Kahve Şehri'nin kalbindeki rahat kahve dükkanımızı ziyaret edin
            </p>
          </div>
          <div className="bg-background rounded-lg p-8 text-center">
            <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-muted-foreground">İnteraktif Harita Yakında</p>
                <p className="text-sm text-muted-foreground mt-2">Kahve Sokak No:123, Kahve Şehri, İstanbul</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Otopark</h3>
                <p className="text-muted-foreground">Ücretsiz sokak parkı mevcuttur</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Erişilebilirlik</h3>
                <p className="text-muted-foreground">Tekerlekli sandalye erişimli giriş</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Toplu Taşıma</h3>
                <p className="text-muted-foreground">15, 23 ve 45 numaralı otobüs hatları yakında</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Sık Sorulan Sorular</h2>
            <p className="text-xl text-muted-foreground">
              Yaygın sorulara hızlı cevaplar
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Catering hizmeti sunuyor musunuz?</h3>
                <p className="text-muted-foreground">
                  Evet! Her boyutta etkinlik için catering sağlıyoruz. Özel menüler ve fiyatlandırma için bizimle iletişime geçin.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Özel etkinlikler için alan kiralayabilir miyim?</h3>
                <p className="text-muted-foreground">
                  Kesinlikle! Mesai saatleri dışında özel etkinlik rezervasyonları sunuyoruz. Toplantılar, partiler ve özel günler için mükemmel.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Vegan seçenekleriniz var mı?</h3>
                <p className="text-muted-foreground">
                  Evet, çeşitli bitki bazlı süt alternatifleri ve vegan yemek seçenekleri sunuyoruz.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">WiFi mevcut mu?</h3>
                <p className="text-muted-foreground">
                  Evet, tüm müşterilerimiz için ücretsiz yüksek hızlı WiFi sağlıyoruz.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Kahve çekirdeği satıyor musunuz?</h3>
                <p className="text-muted-foreground">
                  Evet! Taze kavrulmuş kahve çekirdeklerimizi paket halinde satıyoruz. Düzenli teslimatlar için abone de olabilirsiniz.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">İşe alım yapıyor musunuz?</h3>
                <p className="text-muted-foreground">
                  Ekibimize katılmak için tutkulu kahve severleri sürekli arıyoruz. Özgeçmişinizi gönderin!
                </p>
              </div>
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
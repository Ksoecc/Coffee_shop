import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { CartIndicator } from "@/components/cart-indicator";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Kurucu & Baş Barista",
      bio: "10 yılı aşkın özel kahve deneyimi ile Sarah, mükemmel kahve deneyimi yaratma vizyonuyla Brew & Bean'i kurdu.",
      image: "👩‍🍳"
    },
    {
      name: "Michael Chen",
      role: "Kahve Kavurucu",
      bio: "Michael, Orta Amerika'daki en iyi kahve çiftliklerinde çalışma deneyiminden gelen kahve kavurma uzmanlığını getiriyor.",
      image: "👨‍🌾"
    },
    {
      name: "Emma Rodriguez",
      role: "Pastacı",
      bio: "Emma, menümüzdeki tüm lezzetli hamur işlerini ve tatlıları yaratır, Fransız pastacılık eğitimini her ürüne getirir.",
      image: "👩‍🍰"
    },
    {
      name: "David Kim",
      role: "Müdür",
      bio: "David, her müşterinin olağanüstü bir deneyim yaşamasını sağlar, günlük operasyonlarımızı özen ve dikkatle yönetir.",
      image: "👨‍💼"
    }
  ];

  const values = [
    {
      title: "Kalite",
      description: "Sadece en kaliteli çekirdekleri ve malzemeleri tedarik ediyoruz, maliyet için kaliteden asla ödün vermiyoruz.",
      icon: "⭐"
    },
    {
      title: "Sürdürülebilirlik",
      description: "Sürdürülebilir kahve çiftlikleri ile ortaklık kuruyor ve işletmemiz boyunca çevre dostu uygulamalar kullanıyoruz.",
      icon: "🌱"
    },
    {
      title: "Topluluk",
      description: "Sadece bir kahve dükkanı değiliz - yerel topluluğumuz için bir buluşma noktasıyız.",
      icon: "🤝"
    },
    {
      title: "Yenilik",
      description: "Müşterilerimizi şaşırtmak ve memnun etmek için sürekli yeni demleme yöntemleri ve lezzet kombinasyonları keşfediyoruz.",
      icon: "💡"
    }
  ];

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
              <Link href="/about" className="text-primary font-semibold">Hakkımızda</Link>
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

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">Hikayemiz</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mütevazı başlangıçlardan sevilen yerel kahve destinasyonu olmaya, 
            sunduğumuz her fincanın arkasındaki tutku ve adanmışlığı keşfedin.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Nasıl Başladı</h2>
              <p className="text-lg text-muted-foreground mb-6">
                2020 yılında Sarah Johnson'ın basit bir hayali vardı: insanların mükemmel fincan kahveyi 
                sıcak, davetkar bir atmosferde keyfini çıkarabilecekleri bir alan yaratmak. Yerel çiftçi 
                pazarında küçük bir kahve arabası olarak başlayan şey hızla özel bir şeye dönüştü.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Zanaatını mükemmelleştirmek ve yerel kahve çiftçileri ile ilişkiler kurmak için aylar 
                geçirdikten sonra, Sarah ilk Brew & Bean lokasyonunu açtı. Tepki eziciydi - insanlar 
                sadece kahveyi değil, etrafında büyüyen topluluk duygusunu da sevdi.
              </p>
              <p className="text-lg text-muted-foreground">
                Bugün, Brew & Bean Sarah'ın o ilk kahve arabasına getirdiği aynı tutku ve adanmışlıkla 
                topluluğumuza hizmet etmeye devam ediyor. Günlük rutininizin ve özel anlarınızın bir 
                parçası olmaktan gurur duyuyoruz.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Ödüllü</h3>
              <p className="text-muted-foreground mb-4">
                Kahve kalitesi ve hizmet mükemmelliği için Özel Kahve Derneği tarafından tanınır
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-primary">2023</p>
                  <p className="text-muted-foreground">En İyi Kahve Dükkanı</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">2022</p>
                  <p className="text-muted-foreground">Hizmet Mükemmelliği</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Değerlerimiz</h2>
            <p className="text-xl text-muted-foreground">
              Yaptığımız her şeyi yönlendiren ilkeler
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-lg">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Kahve Sürecimiz</h2>
            <p className="text-xl text-muted-foreground">
              Çekirdekten fincana, her adım önemlidir
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Tedarik</h3>
              <p className="text-muted-foreground">
                Dünya çapındaki sürdürülebilir kahve çiftlikleri ile ortaklık kuruyoruz, adil ticaret uygulamaları ve olağanüstü kalite sağlıyoruz.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Kavurma</h3>
              <p className="text-muted-foreground">
                Çekirdeklerimiz maksimum tazelik ve lezzet gelişimi için küçük partiler halinde kavrulur.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Öğütme</h3>
              <p className="text-muted-foreground">
                Her sipariş için çekirdeklerimizi taze öğütüyoruz, optimal çıkarma ve lezzet sağlıyoruz.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☕</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Demleme</h3>
              <p className="text-muted-foreground">
                Uzman baristalarımız her fincandan mükemmel lezzetleri çıkarmak için hassas teknikler kullanır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ekibimizle Tanışın</h2>
            <p className="text-xl text-muted-foreground">
              Her mükemmel fincanın arkasındaki tutkulu insanlar
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-lg">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Kahve Topluluğumuza Katılın</h2>
            <p className="text-xl mb-6 text-white/90">
              Mükemmel fincan kahveyi deneyimleyin ve hikayemizin bir parçası olun
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/menu" 
                className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Menümüzü Görüntüleyin
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Bugün Bizi Ziyaret Edin
              </Link>
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
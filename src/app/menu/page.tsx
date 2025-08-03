import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { CartIndicator } from "@/components/cart-indicator";

export default function MenuPage() {
  const coffeeMenu = [
    {
      category: "Espresso",
      items: [
        { name: "Tekli Espresso", price: "₺35", description: "Zengin ve güçlü tek shot" },
        { name: "Çiftli Espresso", price: "₺45", description: "Saf espressodan iki shot" },
        { name: "Ristretto", price: "₺37", description: "Konsantre espresso shot" },
        { name: "Lungo", price: "₺40", description: "Uzatılmış espresso shot" }
      ]
    },
    {
      category: "Sütlü İçecekler",
      items: [
        { name: "Cappuccino", price: "₺45", description: "Buharlanmış süt ve köpük ile espresso" },
        { name: "Latte", price: "₺50", description: "Kadifemsi süt ile yumuşak espresso" },
        { name: "Flat White", price: "₺47", description: "Mikro köpük ile güçlü espresso" },
        { name: "Cortado", price: "₺42", description: "Eşit oranda buharlanmış süt ile espresso" },
        { name: "Macchiato", price: "₺37", description: "Süt köpüğü ile espresso" }
      ]
    },
    {
      category: "Özel İçecekler",
      items: [
        { name: "Mocha", price: "₺55", description: "Zengin çikolata ve espresso" },
        { name: "Karamel Latte", price: "₺57", description: "Tatlı karamel ile yumuşak latte" },
        { name: "Vanilya Latte", price: "₺55", description: "Klasik vanilya ile espresso" },
        { name: "Fındık Latte", price: "₺57", description: "Fındıklı lezzet" },
        { name: "Balkabağı Baharatı Latte", price: "₺60", description: "Mevsimsel favori" }
      ]
    },
    {
      category: "Soğuk İçecekler",
      items: [
        { name: "Cold Brew", price: "₺40", description: "18 saatlik soğuk demlenmiş kahve" },
        { name: "Buzlu Latte", price: "₺50", description: "Buz üzerinde soğutulmuş latte" },
        { name: "Buzlu Americano", price: "₺42", description: "Soğuk su ile espresso" },
        { name: "Nitro Cold Brew", price: "₺55", description: "Yumuşak nitro-infüze soğuk demleme" }
      ]
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
              <Link href="/menu" className="text-primary font-semibold">Menü</Link>
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

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">Menümüz</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Özenle hazırlanmış kahve içecekleri, hamur işleri ve hafif yemek seçimimizi keşfedin. 
            Her ürün en kaliteli malzemelerle yapılır ve özenle hazırlanır.
          </p>
        </div>
      </section>

      {/* Coffee Menu */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Kahve & İçecekler</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {coffeeMenu.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary border-b border-primary/20 pb-2">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start p-4 bg-muted rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold text-foreground">{item.name}</h4>
                          <span className="text-primary font-semibold ml-4">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Special Offers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Günlük Özel Teklifler</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Mutlu Saat</h3>
                <p className="text-white/80">Her Gün 14:00-17:00</p>
                <p className="text-white/80">Tüm içeceklerde %20 indirim</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Öğrenci İndirimi</h3>
                <p className="text-white/80">Geçerli Kimlik Gerekli</p>
                <p className="text-white/80">Tüm ürünlerde %15 indirim</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sadakat Programı</h3>
                <p className="text-white/80">Her alışverişte puan kazanın</p>
                <p className="text-white/80">10 ziyaret sonrası ücretsiz içecek</p>
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
"use client"

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";
import { useCart } from "@/components/cart-context";
import { CartIndicator } from "@/components/cart-indicator";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
}

interface CartItem extends Product {
  quantity: number;
}

export default function OrderPage() {
  const { cart, addToCart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();
  const [activeCategory, setActiveCategory] = useState("beans");

  const products: Product[] = [
    // Coffee Beans
    {
      id: "bean-1",
      name: "Ethiopian Yirgacheffe",
      price: 120,
      description: "Çiçeksi aromalar ve bergamot notaları ile hafif ve zarif",
      image: "☕",
      category: "beans",
      stock: 50
    },
    {
      id: "bean-2", 
      name: "Colombian Supremo",
      price: 95,
      description: "Zengin, dengeli ve hafif asidik karakter",
      image: "☕",
      category: "beans",
      stock: 45
    },
    {
      id: "bean-3",
      name: "Brazilian Santos",
      price: 85,
      description: "Yumuşak, tatlı ve düşük asidite",
      image: "☕", 
      category: "beans",
      stock: 60
    },
    {
      id: "bean-4",
      name: "Guatemala Antigua",
      price: 110,
      description: "Çikolata notaları ve orta asidite",
      image: "☕",
      category: "beans",
      stock: 35
    },
    {
      id: "bean-5",
      name: "Sumatra Mandheling",
      price: 100,
      description: "Topraksı, güçlü ve düşük asidite",
      image: "☕",
      category: "beans", 
      stock: 40
    },
    {
      id: "bean-6",
      name: "Costa Rica Tarrazu",
      price: 115,
      description: "Parlak asidite ve meyveli notalar",
      image: "☕",
      category: "beans",
      stock: 30
    },

    // Coffee Cups
    {
      id: "cup-1",
      name: "Seramik Espresso Fincanı",
      price: 45,
      description: "60ml kapasiteli, ısı koruyucu seramik",
      image: "🫖",
      category: "cups",
      stock: 25
    },
    {
      id: "cup-2",
      name: "Cam Demleme Fincanı",
      price: 35,
      description: "Şeffaf cam, 200ml kapasite",
      image: "🫖",
      category: "cups",
      stock: 30
    },
    {
      id: "cup-3",
      name: "Paslanmaz Çelik Termos",
      price: 180,
      description: "24 saat ısı koruyucu, 500ml",
      image: "🫖",
      category: "cups",
      stock: 15
    },
    {
      id: "cup-4",
      name: "Bambu Seyahat Fincanı",
      price: 65,
      description: "Çevre dostu, sızdırmaz kapak",
      image: "🫖",
      category: "cups",
      stock: 20
    },
    {
      id: "cup-5",
      name: "Klasik Porselen Fincan Seti",
      price: 120,
      description: "6'lı set, 150ml kapasite",
      image: "🫖",
      category: "cups",
      stock: 12
    },

    // Coffee Equipment
    {
      id: "equipment-1",
      name: "French Press",
      price: 250,
      description: "1L kapasiteli, paslanmaz çelik",
      image: "⚙️",
      category: "equipment",
      stock: 18
    },
    {
      id: "equipment-2",
      name: "Pour Over Seti",
      price: 180,
      description: "V60 filtre, öğütücü ve ölçek dahil",
      image: "⚙️",
      category: "equipment",
      stock: 22
    },
    {
      id: "equipment-3",
      name: "Moka Pot",
      price: 140,
      description: "3 fincanlık, klasik İtalyan stili",
      image: "⚙️",
      category: "equipment",
      stock: 16
    },
    {
      id: "equipment-4",
      name: "Kahve Öğütücü",
      price: 320,
      description: "Manuel burr öğütücü, ayarlanabilir",
      image: "⚙️",
      category: "equipment",
      stock: 14
    },
    {
      id: "equipment-5",
      name: "Aeropress",
      price: 200,
      description: "Çok yönlü demleme sistemi",
      image: "⚙️",
      category: "equipment",
      stock: 20
    },

    // Accessories
    {
      id: "accessory-1",
      name: "Kahve Filtreleri",
      price: 25,
      description: "100'lük paket, V60 uyumlu",
      image: "📦",
      category: "accessories",
      stock: 100
    },
    {
      id: "accessory-2",
      name: "Kahve Ölçeği",
      price: 85,
      description: "Dijital, 0.1g hassasiyet",
      image: "📦",
      category: "accessories",
      stock: 28
    },
    {
      id: "accessory-3",
      name: "Kahve Termometresi",
      price: 65,
      description: "Dijital, su geçirmez",
      image: "📦",
      category: "accessories",
      stock: 32
    },
    {
      id: "accessory-4",
      name: "Kahve Çekirdeği Saklama Kutusu",
      price: 75,
      description: "Hava geçirmez, 500g kapasite",
      image: "📦",
      category: "accessories",
      stock: 24
    },
    {
      id: "accessory-5",
      name: "Kahve Temizlik Seti",
      price: 45,
      description: "Makine temizleme tabletleri ve fırça",
      image: "📦",
      category: "accessories",
      stock: 35
    }
  ];

  const categories = [
    { id: "beans", name: "Kahve Çekirdekleri", icon: "☕" },
    { id: "cups", name: "Fincanlar", icon: "🫖" },
    { id: "equipment", name: "Ekipmanlar", icon: "⚙️" },
    { id: "accessories", name: "Aksesuarlar", icon: "📦" }
  ];



  const filteredProducts = products.filter(product => product.category === activeCategory);

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
          <h1 className="text-5xl font-bold text-foreground mb-4">Ürünlerimiz</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kaliteli kahve çekirdekleri, fincanlar ve ekipmanlarımızı keşfedin. 
            Evinizde profesyonel kahve deneyimi yaşayın.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-muted rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">Kategoriler</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeCategory === category.id
                        ? "bg-primary text-white"
                        : "bg-background text-foreground hover:bg-primary/10"
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-muted rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4 text-center">{product.image}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-primary font-bold text-lg">₺{product.price}</span>
                    <span className="text-sm text-muted-foreground">Stok: {product.stock}</span>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-light transition-colors"
                  >
                    Sepete Ekle
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Shopping Cart */}
          <div className="lg:col-span-1">
            <div className="bg-muted rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">Sepetim</h2>
              {cart.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">Sepetiniz boş</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 p-3 bg-background rounded-lg">
                      <div className="text-2xl">{item.image}</div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground text-sm truncate">{item.name}</h4>
                        <p className="text-primary font-semibold text-sm">₺{item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 bg-muted rounded flex items-center justify-center hover:bg-muted/80"
                        >
                          -
                        </button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 bg-muted rounded flex items-center justify-center hover:bg-muted/80"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t border-muted-foreground pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">Toplam ({getTotalItems()} ürün):</span>
                      <span className="text-primary font-bold text-lg">₺{getTotalPrice()}</span>
                    </div>
                    <Link href="/checkout" className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary-light transition-colors font-semibold block text-center">
                      Siparişi Tamamla
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 mt-16">
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
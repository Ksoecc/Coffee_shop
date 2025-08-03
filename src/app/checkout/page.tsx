"use client"

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";
import { useCart } from "@/components/cart-context";
import { CartIndicator } from "@/components/cart-indicator";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "creditCard"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 15;
  const tax = subtotal * 0.18; // 18% KDV
  const total = subtotal + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setOrderComplete(true);
    clearCart(); // Clear cart after successful order
  };

  if (orderComplete) {
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
                <Link href="/order" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-light transition-colors">
                  Sipariş Ver
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="pt-24 pb-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-muted rounded-lg p-8">
              <div className="text-6xl mb-4">✅</div>
              <h1 className="text-3xl font-bold text-foreground mb-4">Siparişiniz Alındı!</h1>
              <p className="text-muted-foreground mb-6">
                Siparişiniz başarıyla oluşturuldu. Sipariş numaranız: <span className="font-semibold text-primary">#ORD-2024-001</span>
              </p>
              <p className="text-muted-foreground mb-8">
                Siparişinizin durumu hakkında e-posta ile bilgilendirileceksiniz.
              </p>
              <div className="space-y-4">
                <Link 
                  href="/order" 
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-light transition-colors font-semibold"
                >
                  Alışverişe Devam Et
                </Link>
                <br />
                <Link 
                  href="/" 
                  className="inline-block text-primary hover:text-primary-light transition-colors"
                >
                  Ana Sayfaya Dön
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
          <h1 className="text-5xl font-bold text-foreground mb-4">Ödeme</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Siparişinizi tamamlamak için aşağıdaki bilgileri doldurun.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="lg:order-2">
            <div className="bg-muted rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-foreground mb-6">Sipariş Özeti</h2>
              
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-3 bg-background rounded-lg">
                    <div className="text-2xl">{item.image}</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">Adet: {item.quantity}</p>
                    </div>
                    <span className="text-primary font-semibold">₺{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-muted-foreground pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ara Toplam:</span>
                  <span className="text-foreground">₺{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Kargo:</span>
                  <span className="text-foreground">₺{shipping}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">KDV (%18):</span>
                  <span className="text-foreground">₺{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold border-t border-muted-foreground pt-2">
                  <span className="text-foreground">Toplam:</span>
                  <span className="text-primary">₺{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Kişisel Bilgiler</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      Ad *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-muted-foreground rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Soyad *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-muted-foreground rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-muted-foreground rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-muted-foreground rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Teslimat Adresi</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">
                      Adres *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2 border border-muted-foreground rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                        Şehir *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-muted-foreground rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium text-foreground mb-2">
                        Posta Kodu *
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-muted-foreground rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Ödeme Yöntemi</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="creditCard"
                      checked={formData.paymentMethod === "creditCard"}
                      onChange={handleInputChange}
                      className="text-primary focus:ring-primary"
                    />
                    <span className="text-foreground">Kredi Kartı</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bankTransfer"
                      checked={formData.paymentMethod === "bankTransfer"}
                      onChange={handleInputChange}
                      className="text-primary focus:ring-primary"
                    />
                    <span className="text-foreground">Banka Havalesi</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cashOnDelivery"
                      checked={formData.paymentMethod === "cashOnDelivery"}
                      onChange={handleInputChange}
                      className="text-primary focus:ring-primary"
                    />
                    <span className="text-foreground">Kapıda Ödeme</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-between items-center">
                <Link 
                  href="/order" 
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  ← Sepete Dön
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-light transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "İşleniyor..." : `₺${total.toFixed(2)} Öde`}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 
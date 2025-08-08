import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Users, 
  Award,
  Sparkles,
  Crown,
  Smile,
  Heart,
  ChevronRight,
  MessageCircle
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    date: '',
    service: '',
    message: ''
  });

  const services = [
    {
      title: 'İmplant Tedavisi',
      description: 'Kayıp dişlerinizi doğal görünümlü ve fonksiyonel implantlarla yeniden kazanın.',
      icon: <Heart className="w-8 h-8 text-sky-500" />
    },
    {
      title: 'Estetik Diş Hekimliği',
      description: 'Gülümsemenizi güzelleştiren profesyonel estetik diş tedavileri.',
      icon: <Sparkles className="w-8 h-8 text-sky-500" />
    },
    {
      title: 'Zirkonyum Kronlar',
      description: 'Dayanıklı ve estetik zirkonyum kronlar ile dişlerinizi koruyun.',
      icon: <Crown className="w-8 h-8 text-sky-500" />
    },
    {
      title: '20\'lik Diş Çekimi',
      description: 'Ağrısız ve güvenli 20\'lik diş çekimi işlemleri uzman hekimimizle.',
      icon: <Smile className="w-8 h-8 text-sky-500" />
    },
    {
      title: 'Porselen Laminate Veneer',
      description: 'İnce porselen kaplamalar ile mükemmel bir gülümseme elde edin.',
      icon: <Award className="w-8 h-8 text-sky-500" />
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Randevu talebiniz alınmıştır. En kısa sürede size dönüş yapılacaktır.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Dr. Emine Sungur Yılmaz</h1>
                <p className="text-sm text-gray-600">Diş Hekimi</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-sky-600 transition-colors">Ana Sayfa</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-sky-600 transition-colors">Hakkında</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-sky-600 transition-colors">Hizmetlerimiz</button>
              <button onClick={() => scrollToSection('appointment')} className="text-gray-700 hover:text-sky-600 transition-colors">Randevu</button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-sky-600 transition-colors">Ana Sayfa</button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-sky-600 transition-colors">Hakkında</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-sky-600 transition-colors">Hizmetlerimiz</button>
                <button onClick={() => scrollToSection('appointment')} className="text-left text-gray-700 hover:text-sky-600 transition-colors">Randevu</button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Sağlıklı Gülümseniz
                  <span className="text-sky-500"> Bizim İşimiz</span>
                </h1>
                <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                  10 yıllık deneyimimiz ile güvenilir, hızlı ve çözüm odaklı diş hekimliği hizmeti sunuyoruz. 
                  Modern teknoloji ve kişisel ilgi ile gülümsemenizi en güzel haline getiriyoruz.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Hakkında</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Hizmetlerimiz</span>
                </button>
                <button 
                  onClick={() => scrollToSection('appointment')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Randevu Al</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3845986/pexels-photo-3845986.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Dental Clinic Interior"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">1000+ Mutlu Hasta</p>
                    <p className="text-sm text-gray-600">10 Yıllık Deneyim</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Hakkımda</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deneyimli ve güvenilir diş hekimliği hizmeti ile sağlıklı gülümsenizi koruyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-sky-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Dr. Emine Sungur Yılmaz</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-sky-500 mt-1" />
                    <p className="text-gray-700">Aksaray doğumlu</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-sky-500 mt-1" />
                    <p className="text-gray-700">2013 Selçuk Üniversitesi Diş Hekimliği Fakültesi mezunu</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-sky-500 mt-1" />
                    <p className="text-gray-700">Yaklaşık 10 yıl boyunca Kocaeli Devlet Hastaneleri'nde görev</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-sky-500 mt-1" />
                    <p className="text-gray-700">Kendi kliniğinde özel hasta odaklı hizmet</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="w-5 h-5 text-sky-500 mt-1" />
                    <p className="text-gray-700">Orta düzey İngilizce bilgisi</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <p className="text-gray-800 italic">
                  "Hasta yorumlarına göre <strong>profesyonel, hızlı ve çözüm odaklı</strong> yaklaşımımla 
                  hastalarımın güvenini kazanıyor ve en iyi tedavi sonuçlarını elde ediyorum."
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Dr. Emine Sungur Yılmaz"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern teknoloji ve uzman bilgimizle sizlere kapsamlı diş hekimliği hizmetleri sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-sky-50 rounded-xl group-hover:bg-sky-100 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  <button 
                    onClick={() => scrollToSection('appointment')}
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Randevu Al</span>
                  </button>
                  <button className="w-full text-sky-500 hover:text-sky-600 py-2 font-medium transition-colors duration-300">
                    Detaylı Bilgi
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Randevu Alın</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Size uygun zamanda randevunuzu planlayın. En kısa sürede size dönüş yapacağız.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Soyad
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Tercih Edilen Tarih
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Hizmet Türü
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Seçiniz</option>
                      <option value="implant">İmplant Tedavisi</option>
                      <option value="estetik">Estetik Diş Hekimliği</option>
                      <option value="zirkonyum">Zirkonyum Kronlar</option>
                      <option value="cekim">20'lik Diş Çekimi</option>
                      <option value="veneer">Porselen Laminate Veneer</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj (İsteğe bağlı)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Özel durumlarınız veya notlarınız varsa buraya yazabilirsiniz..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Randevu Talebimi Gönder</span>
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-sky-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-sky-500" />
                    <div>
                      <p className="font-semibold text-gray-900">Adres</p>
                      <p className="text-gray-600">İzmit, Kocaeli</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-sky-500" />
                    <div>
                      <p className="font-semibold text-gray-900">Telefon</p>
                      <p className="text-gray-600">+90 XXX XXX XX XX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-sky-500" />
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                      <p className="text-gray-600">Hızlı iletişim için</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-sky-500" />
                    <div>
                      <p className="font-semibold text-gray-900">E-posta</p>
                      <p className="text-gray-600">info@eminesunguryilmaz.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">Çalışma Saatleri</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Pazartesi - Cuma</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cumartesi</span>
                    <span>09:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pazar</span>
                    <span>Kapalı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Konum</h3>
              <p className="text-lg text-gray-600">
                Kliniğimizin konumunu haritada görüntüleyin ve kolayca yol tarifi alın.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-96 lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.8234567890123!2d29.9302164!3d40.781367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ2JzUzLjAiTiAyOcKwNTUnNDguOCJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Emine Sungur Yılmaz Diş Kliniği Konumu"
                ></iframe>
              </div>
              
              <div className="p-6 bg-white">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                    <MapPin className="w-6 h-6 text-sky-500" />
                    <div>
                      <p className="font-semibold text-gray-900">Klinik Adresi</p>
                      <p className="text-gray-600">İzmit, Kocaeli</p>
                    </div>
                  </div>
                  
                  <a
                    href="https://www.google.com/maps/@40.781367,29.9302164,17.5z?entry=ttu&g_ep=EgoyMDI1MDgwNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Google Maps'te Aç</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                  <Smile className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Dr. Emine Sungur Yılmaz</h3>
                  <p className="text-gray-400 text-sm">Diş Hekimi</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                10 yıllık deneyimimizle güvenilir, profesyonel ve çözüm odaklı diş hekimliği hizmeti sunuyoruz.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-white transition-colors">Ana Sayfa</button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">Hakkında</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition-colors">Hizmetlerimiz</button>
                <button onClick={() => scrollToSection('appointment')} className="block text-gray-400 hover:text-white transition-colors">Randevu</button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">İletişim</h4>
              <div className="space-y-2 text-gray-400">
                <p>İzmit, Kocaeli</p>
                <p>+90 XXX XXX XX XX</p>
                <p>info@eminesunguryilmaz.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dr. Emine Sungur Yılmaz. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
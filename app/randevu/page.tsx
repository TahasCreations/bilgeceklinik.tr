'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Appointment() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.date || !formData.time) {
      alert('Lütfen zorunlu alanları doldurun.');
      return;
    }
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Randevu Al
            </h1>
            <p className="text-xl text-gray-600">
              Size en uygun tarihi belirleyin, sağlıklı gülümsemenize kavuşun
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form & Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Randevu Formu
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 flex items-center justify-center bg-green-100 text-green-600 rounded-full mx-auto mb-4">
                      <i className="ri-check-line text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      Teşekkür Ederiz!
                    </h3>
                    <p className="text-gray-600">
                      Randevu talebiniz alındı. En kısa sürede size dönüş yapacağız.
                    </p>
                  </div>
                ) : (
                  <form id="appointment-form" onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          Ad *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Soyad *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="0555 123 45 67"
                        required
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="ornek@email.com"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                          Tercih Edilen Tarih *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                          Tercih Edilen Saat *
                        </label>
                        <div className="relative">
                          <select
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm appearance-none pr-8"
                            required
                          >
                            <option value="">Saat Seçin</option>
                            <option value="09:00">09:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <i className="ri-arrow-down-s-line text-gray-400"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Hizmet Tercihi
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm appearance-none pr-8"
                        >
                          <option value="">Hizmet Seçin</option>
                          <option value="implant">İmplant Tedavisi</option>
                          <option value="estetik">Estetik Diş Hekimliği</option>
                          <option value="zirkonyum">Zirkonyum Kronlar</option>
                          <option value="cekim">20'lik Diş Çekimi</option>
                          <option value="veneer">Porselen Laminate Veneer</option>
                          <option value="genel">Genel Muayene</option>
                          <option value="diger">Diğer</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <i className="ri-arrow-down-s-line text-gray-400"></i>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Ek Not / Şikayetiniz
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        maxLength={500}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                        placeholder="Varsa özel durumunuzu veya şikayetinizi yazabilirsiniz..."
                      ></textarea>
                      <div className="text-right text-sm text-gray-500 mt-1">
                        {formData.message.length}/500
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap cursor-pointer"
                    >
                      Randevu Talebi Gönder
                    </button>
                  </form>
                )}
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  İletişim Bilgileri
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full flex-shrink-0">
                      <i className="ri-map-pin-line text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        Adres
                      </h3>
                      <p className="text-gray-600">
                        İzmit, Kocaeli<br />
                        (Detaylı adres randevu onayında paylaşılacaktır)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full flex-shrink-0">
                      <i className="ri-phone-line text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        Telefon
                      </h3>
                      <p className="text-gray-600">
                        +90 555 123 45 67<br />
                        (WhatsApp ile de ulaşabilirsiniz)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full flex-shrink-0">
                      <i className="ri-time-line text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        Çalışma Saatleri
                      </h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                        <p>Cumartesi: 09:00 - 15:00</p>
                        <p>Pazar: Kapalı</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full flex-shrink-0">
                      <i className="ri-mail-line text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        E-posta
                      </h3>
                      <p className="text-gray-600">
                        info@eminesunguryilmaz.com
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Hızlı İletişim
                  </h3>
                  <div className="flex space-x-4">
                    <a href="tel:+905551234567" 
                       className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors cursor-pointer">
                      <i className="ri-phone-fill text-xl"></i>
                    </a>
                    <a href="https://wa.me/905551234567" 
                       className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors cursor-pointer">
                      <i className="ri-whatsapp-fill text-xl"></i>
                    </a>
                    <a href="mailto:info@eminesunguryilmaz.com" 
                       className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
                      <i className="ri-mail-fill text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Emergency Info */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-red-100 text-red-600 rounded-full flex-shrink-0">
                    <i className="ri-alert-line text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">
                      Acil Durumlar
                    </h3>
                    <p className="text-red-700 text-sm">
                      Acil dental durumlar için lütfen doğrudan telefonla arayın. 
                      WhatsApp üzerinden de 7/24 ulaşabilirsiniz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Konum
            </h2>
            <p className="text-xl text-gray-600">
              İzmit, Kocaeli'deki kliniğimizi kolayca bulabilirsiniz
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.7543521456434!2d29.928056315536936!3d40.78136657932143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac82d8b2c9b27%3A0x6c6c6c6c6c6c6c6c!2sKocaeli%2C%20T%C3%BCrkiye!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Emine Sungur Yılmaz Klinik Konumu"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
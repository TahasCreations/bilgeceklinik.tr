'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Dr. Emine Sungur Yılmaz
            </h1>
            <p className="text-xl text-gray-600">
              Deneyimli Diş Hekimi - İzmit, Kocaeli
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20female%20dentist%20in%20white%20coat%20in%20modern%20dental%20office%2C%20confident%20and%20friendly%20appearance%2C%20medical%20professional%20portrait%2C%20clean%20bright%20dental%20clinic%20environment%2C%20healthcare%20provider%2C%20trustworthy%20doctor%20with%20warm%20smile&width=500&height=600&seq=about-doctor&orientation=portrait"
                alt="Dr. Emine Sungur Yılmaz"
                className="w-full rounded-2xl shadow-2xl object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Hakkımda
              </h2>
              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  Merhaba, ben Dr. Emine Sungur Yılmaz. Aksaray doğumluyum ve 2013 yılında 
                  Selçuk Üniversitesi Diş Hekimliği Fakültesi'nden mezun oldum.
                </p>
                <p>
                  Mezuniyetimin ardından yaklaşık 10 yıl boyunca Kocaeli Devlet Hastaneleri'nde 
                  görev aldım. Bu süreçte binlerce hasta ile çalışma fırsatı buldum ve deneyimimi 
                  geliştirdim.
                </p>
                <p>
                  Şimdi kendi kliniğimde, hasta memnuniyetini ön planda tutarak hizmet veriyorum. 
                  Orta düzey İngilizce bilgim sayesinde yabancı hastalarıma da rahatça hizmet verebiliyorum.
                </p>
                <p>
                  Hastalarımın yorumlarında sıkça vurgulanan <strong>"profesyonel, hızlı ve çözüm odaklı"</strong> 
                  yaklaşımımla, her hastamın ihtiyaçlarına özel tedavi planları hazırlıyorum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Deneyim ve Eğitim
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  <i className="ri-graduation-cap-line text-blue-600 text-xl"></i>
                </div>
                Eğitim
              </h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full flex-shrink-0">
                      <i className="ri-school-line text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        Selçuk Üniversitesi
                      </h4>
                      <p className="text-gray-600">Diş Hekimliği Fakültesi</p>
                      <p className="text-blue-600 font-medium">2013 Mezunu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  <i className="ri-briefcase-line text-blue-600 text-xl"></i>
                </div>
                Deneyim
              </h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full flex-shrink-0">
                      <i className="ri-hospital-line text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        Kocaeli Devlet Hastaneleri
                      </h4>
                      <p className="text-gray-600">Diş Hekimi</p>
                      <p className="text-blue-600 font-medium">~10 Yıl Görev</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full flex-shrink-0">
                      <i className="ri-building-line text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        Özel Klinik
                      </h4>
                      <p className="text-gray-600">Klinik Sahibi ve Diş Hekimi</p>
                      <p className="text-blue-600 font-medium">Güncel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Approach */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Özellikler ve Yaklaşım
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mx-auto mb-4">
                <i className="ri-user-star-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Profesyonel
              </h3>
              <p className="text-gray-600">
                Hasta yorumlarında en çok vurgulanan özelliğimiz profesyonel yaklaşımımız
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mx-auto mb-4">
                <i className="ri-speed-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Hızlı
              </h3>
              <p className="text-gray-600">
                Zamanınızı değerli biliyor, hızlı ve etkili çözümler sunuyoruz
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mx-auto mb-4">
                <i className="ri-lightbulb-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Çözüm Odaklı
              </h3>
              <p className="text-gray-600">
                Her sorun için en uygun çözümü bulmaya odaklanıyoruz
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mx-auto mb-4">
                <i className="ri-global-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                İngilizce
              </h3>
              <p className="text-gray-600">
                Orta düzey İngilizce bilgim ile yabancı hastalarıma da hizmet veriyorum
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Hasta Yorumları
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Çok profesyonel bir yaklaşımı var. İmplant tedavim için endişeliydim ama 
                Dr. Emine Hanım'ın deneyimi sayesinde çok rahat geçti."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-user-line text-blue-600"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Mehmet K.</p>
                  <p className="text-sm text-gray-500">İmplant Hastası</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Hızlı ve çözüm odaklı yaklaşımı sayesinde kısa sürede tedavim tamamlandı. 
                Kesinlikle tavsiye ederim."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-user-line text-blue-600"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Ayşe D.</p>
                  <p className="text-sm text-gray-500">Estetik Hasta</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "20'lik dişlerimi çektirirken hiç ağrı hissetmedim. Çok deneyimli ve 
                güler yüzlü bir doktor."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-user-line text-blue-600"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Emre T.</p>
                  <p className="text-sm text-gray-500">Çekim Hastası</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Benimle Tanışmaya Hazır Mısınız?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Profesyonel, hızlı ve çözüm odaklı yaklaşımımla diş sağlığınız için buradayım
          </p>
          <Link href="/randevu" 
                className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg inline-block whitespace-nowrap cursor-pointer">
            Randevu Al
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
             style={{
               backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20dental%20clinic%20interior%20with%20comfortable%20patient%20chair%2C%20professional%20dental%20equipment%2C%20clean%20white%20and%20blue%20color%20scheme%2C%20bright%20lighting%2C%20welcoming%20atmosphere%2C%20medical%20office%20design%2C%20professional%20healthcare%20environment&width=1200&height=600&seq=hero-bg&orientation=landscape')`
             }}>
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="w-full">
              <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Gülümsemeniz Bizim <span className="text-blue-600">Önceliğimiz</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Profesyonel yaklaşımımız ve modern teknolojimizle diş sağlığınız için güvenilir çözümler sunuyoruz. 
                Her hastamıza özel, hızlı ve etkili tedavi anlayışıyla yanınızdayız.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/randevu" 
                      className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center whitespace-nowrap cursor-pointer">
                  Randevu Al
                </Link>
                <Link href="/hakkinda" 
                      className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center whitespace-nowrap cursor-pointer">
                  Hakkında
                </Link>
                <Link href="/hizmetler" 
                      className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors text-center whitespace-nowrap cursor-pointer">
                  Hizmetlerimiz
                </Link>
              </div>
            </div>
            <div className="lg:text-right">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20female%20dentist%20in%20white%20coat%20smiling%20warmly%20at%20camera%2C%20modern%20dental%20office%20background%2C%20friendly%20and%20approachable%20appearance%2C%20medical%20professional%20portrait%2C%20clean%20and%20bright%20environment%2C%20healthcare%20provider%2C%20trustworthy%20doctor&width=500&height=600&seq=doctor-portrait&orientation=portrait"
                alt="Dr. Emine Sungur Yılmaz"
                className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto rounded-2xl shadow-2xl object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600">
              Modern teknoloji ve uzman dokunuşuyla size en iyi hizmeti sunuyoruz
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "İmplant Tedavisi",
                description: "Eksik dişleriniz için kalıcı ve doğal görünümlü çözümler",
                icon: "ri-tooth-line",
                image: "https://readdy.ai/api/search-image?query=Dental%20implant%20procedure%20illustration%2C%20modern%20dental%20equipment%2C%20professional%20treatment%20room%2C%20medical%20device%20close-up%2C%20clean%20white%20background%2C%20healthcare%20technology&width=400&height=250&seq=implant&orientation=landscape"
              },
              {
                title: "Estetik Diş Hekimliği",
                description: "Gülümsemenizi daha güzel hale getiren estetik işlemler",
                icon: "ri-star-line",
                image: "https://readdy.ai/api/search-image?query=Beautiful%20smile%20transformation%2C%20cosmetic%20dentistry%20before%20after%2C%20white%20perfect%20teeth%2C%20dental%20aesthetics%2C%20professional%20dental%20care%2C%20bright%20clean%20background&width=400&height=250&seq=aesthetic&orientation=landscape"
              },
              {
                title: "Zirkonyum Kronlar",
                description: "Dayanıklı ve doğal görünümlü diş kaplamaları",
                icon: "ri-gem-line",
                image: "https://readdy.ai/api/search-image?query=Zirconium%20dental%20crowns%2C%20premium%20dental%20materials%2C%20tooth%20restoration%2C%20modern%20dental%20prosthetics%2C%20professional%20quality%2C%20medical%20equipment%20background&width=400&height=250&seq=zirconium&orientation=landscape"
              },
              {
                title: "20'lik Diş Çekimi",
                description: "Ağrısız ve güvenli yirmi yaş dişi çekim işlemleri",
                icon: "ri-scissors-line",
                image: "https://readdy.ai/api/search-image?query=Dental%20extraction%20procedure%2C%20professional%20dental%20tools%2C%20modern%20medical%20equipment%2C%20clean%20surgical%20environment%2C%20dental%20surgery%2C%20healthcare%20setting&width=400&height=250&seq=extraction&orientation=landscape"
              },
              {
                title: "Porselen Laminate Veneer",
                description: "İnce porselen kaplamalarla mükemmel gülümseme",
                icon: "ri-palette-line",
                image: "https://readdy.ai/api/search-image?query=Porcelain%20veneers%20dental%20treatment%2C%20dental%20laboratory%20work%2C%20perfect%20white%20teeth%2C%20cosmetic%20dentistry%2C%20professional%20dental%20care%2C%20bright%20medical%20background&width=400&height=250&seq=veneer&orientation=landscape"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover object-top rounded-xl mb-4"
                />
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4">
                  <i className={`${service.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link href="/hizmetler" 
                      className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                  Detaylı Bilgi →
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/hizmetler" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block whitespace-nowrap cursor-pointer">
              Tüm Hizmetleri Görüntüle
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p className="text-xl text-gray-600">
              Hasta memnuniyeti odaklı yaklaşımımızla fark yaratıyoruz
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mx-auto mb-4">
                <i className="ri-user-heart-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Profesyonel Yaklaşım
              </h3>
              <p className="text-gray-600">
                10 yıllık deneyimimizle her hastamıza özel, profesyonel tedavi yaklaşımı sunuyoruz.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mx-auto mb-4">
                <i className="ri-time-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Hızlı Çözüm
              </h3>
              <p className="text-gray-600">
                Zamanınızı değerli bilir, hızlı ve etkili çözümlerle tedavi sürecinizi kısaltırız.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Güvenilir Hizmet
              </h3>
              <p className="text-gray-600">
                Modern ekipmanlar ve sterilizasyon protokolleriyle güvenli tedavi ortamı sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Randevunuzu Bugün Alın
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Sağlıklı dişler ve güzel gülümseme için uzman ekibimizle tanışın
          </p>
          <Link href="/randevu" 
                className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg inline-block whitespace-nowrap cursor-pointer">
            Hemen Randevu Al
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
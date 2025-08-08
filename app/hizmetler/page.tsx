'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "İmplant Tedavisi",
      description: "Eksik dişleriniz için modern implant teknolojisiyle kalıcı ve doğal görünümlü çözümler sunuyoruz. Titanyum implantlar ile uzun süreli başarı garantisi.",
      features: [
        "Titanyum implant malzemesi",
        "3D görüntüleme ile planlama",
        "Ağrısız işlem",
        "Uzun ömürlü çözüm",
        "Doğal görünüm"
      ],
      duration: "2-6 ay",
      image: "https://readdy.ai/api/search-image?query=Dental%20implant%20surgery%20procedure%2C%20modern%20dental%20equipment%2C%20professional%20treatment%20room%2C%20medical%20device%20close-up%2C%20clean%20white%20background%2C%20healthcare%20technology%2C%20successful%20implant%20placement&width=500&height=300&seq=implant-detail&orientation=landscape"
    },
    {
      title: "Estetik Diş Hekimliği",
      description: "Gülümsemenizi daha güzel hale getirmek için kapsamlı estetik çözümler. Diş beyazlatma, bonding ve kontur düzeltmeleriyle mükemmel sonuçlar.",
      features: [
        "Diş beyazlatma",
        "Kompozit bonding",
        "Gülümseme tasarımı",
        "Renk uyumu",
        "Doğal estetik"
      ],
      duration: "1-3 seans",
      image: "https://readdy.ai/api/search-image?query=Beautiful%20smile%20transformation%2C%20cosmetic%20dentistry%20before%20after%2C%20white%20perfect%20teeth%2C%20dental%20aesthetics%2C%20professional%20dental%20care%2C%20bright%20clean%20background%2C%20smile%20makeover&width=500&height=300&seq=aesthetic-detail&orientation=landscape"
    },
    {
      title: "Zirkonyum Kronlar",
      description: "Metal desteksiz, dayanıklı ve doğal görünümlü zirkonyum kronlarla dişlerinize mükemmel koruma ve estetik sağlıyoruz.",
      features: [
        "Metal içermeyen yapı",
        "Yüksek dayanıklılık",
        "Doğal renk geçirgenliği",
        "Biyouyumlu malzeme",
        "Uzun ömür"
      ],
      duration: "1-2 hafta",
      image: "https://readdy.ai/api/search-image?query=Zirconium%20dental%20crowns%2C%20premium%20dental%20materials%2C%20tooth%20restoration%2C%20modern%20dental%20prosthetics%2C%20professional%20quality%2C%20medical%20equipment%20background%2C%20dental%20crown%20procedure&width=500&height=300&seq=zirconium-detail&orientation=landscape"
    },
    {
      title: "20'lik Diş Çekimi",
      description: "Ağrısız ve güvenli yirmi yaş dişi çekim işlemleri. Modern anestezi teknikleri ile konforlu deneyim sağlıyoruz.",
      features: [
        "Ağrısız işlem",
        "Modern anestezi",
        "Güvenli cerrahi",
        "Hızlı iyileşme",
        "Komplikasyon önlemi"
      ],
      duration: "30-60 dakika",
      image: "https://readdy.ai/api/search-image?query=Dental%20extraction%20procedure%2C%20professional%20dental%20tools%2C%20modern%20medical%20equipment%2C%20clean%20surgical%20environment%2C%20dental%20surgery%2C%20healthcare%20setting%2C%20wisdom%20tooth%20removal&width=500&height=300&seq=extraction-detail&orientation=landscape"
    },
    {
      title: "Porselen Laminate Veneer",
      description: "İnce porselen kaplamalarla dişlerinizin şeklini, rengini ve boyutunu mükemmel hale getirin. Hollywood gülüşüne kavuşun.",
      features: [
        "İnce porselen kaplama",
        "Minimal diş törpüleme",
        "Doğal görünüm",
        "Renk stabilitesi",
        "Leke direnci"
      ],
      duration: "2-3 seans",
      image: "https://readdy.ai/api/search-image?query=Porcelain%20veneers%20dental%20treatment%2C%20dental%20laboratory%20work%2C%20perfect%20white%20teeth%2C%20cosmetic%20dentistry%2C%20professional%20dental%20care%2C%20bright%20medical%20background%2C%20veneer%20application&width=500&height=300&seq=veneer-detail&orientation=landscape"
    },
    {
      title: "Dijital Diş Hekimliği",
      description: "En son teknoloji ile dijital ağız içi tarama, 3D görüntüleme ve CAD/CAM sistemleriyle hassas tedavi planlama yapıyoruz.",
      features: [
        "İntraoral dijital tarayıcı",
        "3D tedavi planlama",
        "CAD/CAM restorasyonlar",
        "Hızlı ve hassas ölçüm",
        "Konforlu deneyim"
      ],
      duration: "1-2 seans",
      image: "https://readdy.ai/api/search-image?query=Digital%20dentistry%20technology%2C%20intraoral%20scanner%20in%20use%2C%203D%20dental%20imaging%2C%20CAD%20CAM%20dental%20systems%2C%20modern%20digital%20dental%20equipment%2C%20high-tech%20dental%20laboratory%2C%20computer-aided%20dental%20design&width=500&height=300&seq=digital-detail&orientation=landscape"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Hizmetlerimiz
            </h1>
            <p className="text-xl text-gray-600">
              Modern teknoloji ve uzman dokunuşuyla size en iyi hizmeti sunuyoruz
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover object-top rounded-2xl shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Özellikler:
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-5 h-5 flex items-center justify-center mr-3">
                            <i className="ri-check-line text-green-600 text-lg"></i>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-sm text-gray-500">Süre:</span>
                      <p className="text-lg font-semibold text-blue-600">
                        {service.duration}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Link href="/randevu" 
                          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                      Randevu Al
                    </Link>
                    <Link href="/hakkinda" 
                          className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer">
                      Detaylı Bilgi
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Tedavi Sürecimiz
            </h2>
            <p className="text-xl text-gray-600">
              Size en iyi hizmeti verebilmek için izlediğimiz adımlar
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Konsültasyon
              </h3>
              <p className="text-gray-600">
                Detaylı muayene ve ihtiyaç analizi yaparak tedavi planı oluşturuyoruz
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Planlama
              </h3>
              <p className="text-gray-600">
                3D görüntüleme ve dijital planlama ile en uygun tedavi yöntemi belirliyoruz
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Tedavi
              </h3>
              <p className="text-gray-600">
                Modern teknoloji ve deneyimimizle konforlu tedavi süreci sağlıyoruz
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Takip
              </h3>
              <p className="text-gray-600">
                Tedavi sonrası düzenli kontroller ile uzun vadeli başarı garanti ediyoruz
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-xl text-gray-600">
              Hizmetlerimiz hakkında merak edilenler
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "İmplant tedavisi ağrılı mıdır?",
                answer: "Modern anestezi teknikleri sayesinde implant tedavisi ağrısız gerçekleştirilir. İşlem sonrası hafif rahatsızlık olabilir ancak ağrı kesici ile kolayca kontrol edilir."
              },
              {
                question: "Zirkonyum kronların ömrü ne kadardır?",
                answer: "Doğru bakım ve düzenli kontroller ile zirkonyum kronlar 15-20 yıl kullanılabilir. Dayanıklılıkları metal kronlardan daha yüksektir."
              },
              {
                question: "Veneer uygulaması dişlere zarar verir mi?",
                answer: "Veneer uygulamasında minimal diş törpüleme yapılır. Profesyonel uygulama ile dişlere kalıcı zarar vermeden estetik sonuç elde edilir."
              },
              {
                question: "20'lik diş çekimi sonrası ne kadar sürede iyileşirim?",
                answer: "Normal şartlarda 3-7 gün içinde iyileşme başlar. Komplikasyonsuz vakalarda 1-2 hafta içinde tam iyileşme gerçekleşir."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Hangi Hizmeti Tercih Edeceğinizi Belirleyelim
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ücretsiz konsültasyon ile size en uygun tedavi seçeneğini birlikte belirleyelim
          </p>
          <Link href="/randevu" 
                className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg inline-block whitespace-nowrap cursor-pointer">
            Ücretsiz Konsültasyon
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
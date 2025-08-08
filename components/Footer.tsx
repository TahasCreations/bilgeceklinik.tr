'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Dr. Emine Sungur Yılmaz
            </h3>
            <p className="text-gray-600 mb-4">
              Profesyonel diş hekimliği hizmetleri ile sağlığınız için buradayız.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-lg"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-map-pin-line"></i>
                </div>
                <span>İzmit, Kocaeli</span>
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-phone-line"></i>
                </div>
                <span>+90 555 123 45 67</span>
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-mail-line"></i>
                </div>
                <span>info@eminesunguryilmaz.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Çalışma Saatleri</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span>Pazartesi - Cuma</span>
                <span>09:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Cumartesi</span>
                <span>09:00 - 15:00</span>
              </div>
              <div className="flex justify-between">
                <span>Pazar</span>
                <span>Kapalı</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 Dr. Emine Sungur Yılmaz. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
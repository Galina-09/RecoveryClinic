import React, { useState } from 'react';
import { 
  Brain, 
  Heart, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  Star,
  Menu,
  X,
  Calendar,
  Shield,
  Award,
  ArrowRight
} from 'lucide-react';
import KovalenkoPhoto from "./image/Kovalenko.jpeg";
import PetrenkoPhoto from "./image/Doctor.webp";
import IvanovaPhoto from "./image/Ivanova.jpg";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Депресія та тривожні розлади",
      description: "Індивідуальна терапія для подолання депресії, панічних атак та тривожності"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Емоційне вигорання",
      description: "Відновлення після стресу, профілактика та лікування синдрому вигорання"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Сімейна терапія",
      description: "Вирішення конфліктів у стосунках, подружня та сімейна психотерапія"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Травматичний досвід",
      description: "Робота з ПТСР, дитячими травмами та важкими життєвими ситуаціями"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Розлади харчової поведінки",
      description: "Комплексне лікування анорексії, булімії та компульсивного переїдання"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Залежності",
      description: "Реабілітація від алкогольної, наркотичної та поведінкових залежностей"
    }
  ];

  const doctors = [
    {
      name: "Лікар Олена Коваленко",
      role: "Засновник, Головний лікар",
      specialty: "Психіатр, психотерапевт",
      experience: "15 років досвіду",
      education: "КМУ, стажування в Німеччині",
      photo: KovalenkoPhoto,
    },
    {
      name: "Лікар Андрій Петров",
      role: "Клінічний психолог",
      specialty: "КПТ, EMDR терапія",
      experience: "10 років досвіду",
      education: "НПУ, сертифікат EMDR",
      photo: PetrenkoPhoto
    },
    {
      name: "Лікар Марія Іванова",
      role: "Сімейний психотерапевт",
      specialty: "Сімейна терапія, підліткова психологія",
      experience: "12 років досвіду",
      education: "ОНУ, міжнародна сертифікація",
      photo: IvanovaPhoto,
    },
  ];

  const pricing = [
    {
      category: "Індивідуальні консультації",
      services: [
        { name: "Первинна консультація психіатра", price: "1200 грн" },
        { name: "Повторна консультація психіатра", price: "900 грн" },
        { name: "Сеанс психотерапії (60 хв)", price: "800 грн" },
        { name: "Консультація психолога (50 хв)", price: "600 грн" }
      ]
    },
    {
      category: "Спеціалізовані програми",
      services: [
        { name: "Курс лікування депресії (10 сеансів)", price: "7000 грн" },
        { name: "Програма подолання тривожності", price: "6500 грн" },
        { name: "Реабілітація від залежностей", price: "від 8000 грн" },
        { name: "EMDR терапія травм", price: "1000 грн/сеанс" }
      ]
    },
    {
      category: "Сімейна терапія",
      services: [
        { name: "Сімейна консультація (90 хв)", price: "1200 грн" },
        { name: "Подружня терапія", price: "1000 грн" },
        { name: "Підліткова психологія", price: "700 грн" },
        { name: "Групова терапія", price: "400 грн" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">Recovery Clinic</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Головна</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Послуги</a>
                <a href="#team" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Команда</a>
                <a href="#pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Прайс</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Контакти</a>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Записатися
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">Головна</a>
              <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Послуги</a>
              <a href="#team" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Команда</a>
              <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Прайс</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Контакти</a>
              <button className="w-full text-left bg-blue-600 text-white px-3 py-2 text-base font-medium hover:bg-blue-700 transition-colors rounded-lg mt-2">
                Записатися
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Ваше ментальне здоров'я - 
                <span className="text-blue-600 block">наш пріоритет</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Recovery Clinic - провідний центр ментального здоров'я у Вінниці. 
                Ми допомагаємо людям подолати психологічні труднощі та повернутися до повноцінного життя.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Записатися на консультацію
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center">
                  Дізнатися більше
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Mental health consultation"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">500+</p>
                    <p className="text-gray-600">Успішних випадків</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Спектр наших послуг
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ми надаємо комплексну допомогу при різних проблемах ментального здоров'я, 
              використовуючи сучасні методи терапії та індивідуальний підхід
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Досвідчені фахівці з багаторічною практикою та міжнародними сертифікатами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={doctor.photo} 
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{doctor.role}</p>
                  <p className="text-gray-600 mb-2">{doctor.specialty}</p>
                  <p className="text-sm text-gray-500 mb-1">{doctor.experience}</p>
                  <p className="text-sm text-gray-500">{doctor.education}</p>
                  <div className="flex items-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Прайс-лист
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Прозорі ціни на всі види послуг. Можлива оплата частинами та страхові випадки
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricing.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex justify-between items-start border-b border-gray-100 pb-4">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{service.name}</p>
                      </div>
                      <div className="ml-4">
                        <p className="font-bold text-blue-600 text-lg">{service.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Записатися
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 max-w-2xl mx-auto">
              <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
              <p className="text-emerald-800 font-medium">
                Перша консультація зі знижкою 20% для нових пацієнтів
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Контактна інформація
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Зв'яжіться з нами для запису на консультацію або отримання додаткової інформації. 
                Ми працюємо щодня та готові допомогти вам у будь-який час.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Адреса</p>
                    <p className="text-gray-600">м. Вінниця, вул. Київська 28</p>
                    <p className="text-gray-600">2-й поверх, офіс 201</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Телефони</p>
                    <p className="text-gray-600">+38 (043) 123-45-67</p>
                    <p className="text-gray-600">+38 (067) 890-12-34</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@recoveryclinic.ua</p>
                    <p className="text-gray-600">appointment@recoveryclinic.ua</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Графік роботи</p>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 20:00</p>
                    <p className="text-gray-600">Сб-Нд: 10:00 - 18:00</p>
                    <p className="text-gray-600 text-sm text-emerald-600 font-medium">24/7 екстрена допомога</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Записатися на консультацію</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ім'я</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Ваше повне ім'я"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="+38 (067) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Тип консультації</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    <option>Первинна консультація</option>
                    <option>Психотерапія</option>
                    <option>Сімейна терапія</option>
                    <option>Екстрена допомога</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Повідомлення</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Опишіть коротко ваш запит..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Відправити заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">Recovery Clinic</span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Провідний центр ментального здоров'я у Вінниці. Ми допомагаємо людям 
                подолати психологічні труднощі та повернутися до повноцінного життя.
              </p>
              <div className="flex space-x-4">
                <div className="bg-blue-600 p-2 rounded-full">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="bg-blue-600 p-2 rounded-full">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="bg-blue-600 p-2 rounded-full">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Послуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Психіатричні консультації</li>
                <li>Психотерапія</li>
                <li>Сімейна терапія</li>
                <li>Групова терапія</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Інформація</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Про клініку</li>
                <li>Наша команда</li>
                <li>Прайс-лист</li>
                <li>Контакти</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Recovery Clinic. Всі права захищені. Ліцензія МОЗ України №12345
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
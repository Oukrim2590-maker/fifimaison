import React from 'react';
import { SERVICES } from '../constants';
import { Utensils, PartyPopper, Briefcase, Truck, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  
  const getIcon = (name: string) => {
    switch(name) {
      case 'Utensils': return <Utensils className="h-10 w-10" />;
      case 'PartyPopper': return <PartyPopper className="h-10 w-10" />;
      case 'Briefcase': return <Briefcase className="h-10 w-10" />;
      case 'Truck': return <Truck className="h-10 w-10" />;
      default: return <Utensils className="h-10 w-10" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-rose-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">خدمات Fifi Maison</h1>
        <p className="text-lg text-slate-600">أكثر من مجرد توصيل أكل.. حنا معاك في كل مناسباتك</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service) => (
            <div key={service.id} className="flex flex-col md:flex-row gap-6 p-8 border border-rose-100 rounded-3xl hover:shadow-lg transition bg-white items-start">
              <div className="bg-rose-100 p-4 rounded-2xl text-brand-darkPink shrink-0">
                {getIcon(service.iconName)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                <Link to="/contact" className="text-brand-darkPink font-bold hover:underline inline-flex items-center">
                  تواصل معنا للمزيد
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 bg-stone-900 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-gold">وجبات مخصصة (Sur Mesure)</h2>
              <p className="text-stone-300 text-lg mb-8 leading-relaxed">
                عندك ريجيم خاص؟ ولا عندك حساسية من شي مكونات؟
                <br/>
                في Fifi Maison كنحترمو الاختيارات ديالك. يمكن ليك تطلبي وجبات معدلة حسب الرغبة ديالك.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="bg-brand-darkPink p-1 rounded-full"><Check size={16} /></span>
                  <span>بدون ملح / سكر</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-brand-darkPink p-1 rounded-full"><Check size={16} /></span>
                  <span>وجبات نباتية</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-brand-darkPink p-1 rounded-full"><Check size={16} /></span>
                  <span>تعديل المكونات</span>
                </li>
              </ul>
              <Link to="/order" className="bg-white text-stone-900 px-8 py-3 rounded-full font-bold hover:bg-stone-200 transition">
                طلب وجبة خاصة
              </Link>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1000&auto=format&fit=crop" 
                alt="Cooking Custom Meal" 
                className="rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

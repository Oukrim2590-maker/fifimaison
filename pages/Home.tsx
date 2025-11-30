import React from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../constants';
import MenuCard from '../components/MenuCard';
import { Clock, CheckCircle, Heart, ChevronLeft, Truck } from 'lucide-react';

const Home: React.FC = () => {
  const featuredItems = MENU_ITEMS.filter(item => item.featured).slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=2000&auto=format&fit=crop" 
            alt="Moroccan Food Table" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-rose-500/80 text-white text-sm font-medium mb-4 backdrop-blur-sm">
            أكل بيتي 100%
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            وصفات منزلية بحب...<br />
            <span className="text-brand-gold">كتوصلك حتى لباب دارك</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-100 mb-8 font-light max-w-2xl mx-auto">
            اكتشفي الطعم الأصيل مع Fifi Maison. وجبات محضرة بعناية، نظافة، وجودة عالية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/menu" 
              className="px-8 py-4 bg-brand-darkPink hover:bg-rose-700 text-white rounded-full font-bold text-lg shadow-lg transition-transform hover:scale-105"
            >
              شوف المينيو
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white hover:bg-stone-100 text-slate-900 rounded-full font-bold text-lg shadow-lg transition-transform hover:scale-105"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">علاش تختار Fifi Maison؟</h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'طبخ بحب', desc: 'كل وجبة كنوجدوها بحال إلا كنوجدوها لدارنا.' },
              { icon: CheckCircle, title: 'جودة عالية', desc: 'كنختارو أحسن المكونات الطرية من السوق.' },
              { icon: Clock, title: 'طلب مسبق', desc: 'علمينا قبل بـ 48 ساعة باش توصلك الماكلة على حقها.' },
              { icon: Truck, title: 'توصيل في مكناس', desc: 'كنوصلو ليك الطلبية فين ما كنتي في مكناس.' },
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-rose-50 rounded-2xl hover:shadow-md transition">
                <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                  <feature.icon className="h-8 w-8 text-brand-darkPink" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-16 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">أبرز الوجبات</h2>
              <div className="h-1 w-20 bg-brand-gold rounded-full"></div>
            </div>
            <Link to="/menu" className="hidden md:flex items-center text-brand-darkPink font-bold hover:underline">
              شوف كلشي <ChevronLeft className="h-5 w-5 mr-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/menu" className="inline-flex items-center text-brand-darkPink font-bold">
              شوف المينيو كامل <ChevronLeft className="h-5 w-5 mr-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Snippet */}
      <section className="py-16 bg-rose-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">"أحسن ماكلة دقتها في مكناس، النقا والبنة ديال الدار."</h2>
          <div className="flex justify-center items-center gap-2">
            <div className="flex text-brand-gold">
              {[1,2,3,4,5].map(i => <Heart key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <p className="font-semibold">- مريم ب.</p>
          </div>
          <Link to="/reviews" className="inline-block mt-8 bg-white text-rose-600 px-6 py-2 rounded-full font-bold hover:bg-stone-100 transition">
            شوف آراء الزبناء
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
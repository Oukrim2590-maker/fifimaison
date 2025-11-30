import React from 'react';
import { Phone, MapPin, Clock, Instagram, Send } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">تواصل معنا</h1>
          <p className="text-stone-300">عندك استفسار؟ بغيتي ديري طلبية كبيرة؟ حنا رهن الإشارة.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center border-b-4 border-brand-darkPink">
            <div className="bg-rose-50 p-4 rounded-full mb-4">
              <Phone className="h-6 w-6 text-brand-darkPink" />
            </div>
            <h3 className="font-bold text-xl mb-2">الهاتف / واتساب</h3>
            <p className="text-slate-600 mb-4" dir="ltr">+212 6 12 03 90 30</p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank" 
              rel="noreferrer"
              className="text-brand-darkPink font-bold hover:underline"
            >
              راسلنا دابا
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center border-b-4 border-brand-gold">
            <div className="bg-amber-50 p-4 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-brand-gold" />
            </div>
            <h3 className="font-bold text-xl mb-2">العنوان</h3>
            <p className="text-slate-600">مدينة مكناس، المغرب</p>
            <p className="text-xs text-slate-400 mt-2">(التوصيل متوفر لجميع الأحياء)</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center border-b-4 border-slate-800">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <Clock className="h-6 w-6 text-slate-800" />
            </div>
            <h3 className="font-bold text-xl mb-2">أوقات العمل</h3>
            <p className="text-slate-600">الاثنين - السبت</p>
            <p className="text-slate-600 font-bold">09:00 صباحاً - 08:00 مساءً</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Simple Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">ارسل لنا رسالة</h2>
            <form className="space-y-4">
              <input type="text" placeholder="الاسم" className="w-full p-3 rounded-lg border border-slate-200 focus:border-brand-darkPink outline-none" />
              <input type="email" placeholder="البريد الإلكتروني" className="w-full p-3 rounded-lg border border-slate-200 focus:border-brand-darkPink outline-none" />
              <textarea placeholder="رسالتك..." rows={4} className="w-full p-3 rounded-lg border border-slate-200 focus:border-brand-darkPink outline-none"></textarea>
              <button className="bg-slate-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-700 w-full md:w-auto">
                إرسال
              </button>
            </form>
          </div>

          {/* Map & Socials */}
          <div className="space-y-8">
             <div>
               <h2 className="text-2xl font-bold text-slate-800 mb-6">موقعنا</h2>
               <div className="bg-slate-100 w-full h-64 rounded-xl flex items-center justify-center relative overflow-hidden">
                 {/* Placeholder for Map - In a real app, use Google Maps Embed API */}
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52994.582888636!2d-5.5683457!3d33.8935208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda044d237b686a3%3A0x6284379434850d75!2sMeknes%2C%20Morocco!5e0!3m2!1sen!2sus!4v1715421234567!5m2!1sen!2sus"
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Meknes Map"
                 ></iframe>
               </div>
             </div>

             <div>
               <h2 className="text-2xl font-bold text-slate-800 mb-4">تابعنا على السوشيال ميديا</h2>
               <div className="flex gap-4">
                 <a href="#" className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold hover:opacity-90 transition">
                   <Instagram size={20} /> Instagram
                 </a>
                 <a href="#" className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full font-bold hover:opacity-90 transition">
                   <span className="font-bold text-lg leading-none">Tk</span> TikTok
                 </a>
               </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 border-t border-rose-100 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-brand-darkPink">Fifi Maison</h3>
            <p className="text-slate-600 leading-relaxed">
              نقدم لكم أشهى الأطباق المنزلية المحضرة بكل حب وعناية.
              الجودة والنظافة هي شعارنا في مكناس.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-800">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><Link to="/menu" className="text-slate-600 hover:text-brand-darkPink">قائمة الطعام</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-brand-darkPink">الخدمات</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-brand-darkPink">اتصل بنا</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-800">تواصل معنا</h4>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="h-4 w-4 text-brand-darkPink" />
                <span dir="ltr">+212 6 12 03 90 30</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="h-4 w-4 text-brand-darkPink" />
                <span>مكناس، المغرب</span>
              </div>
              <div className="flex gap-4 mt-2">
                <a href="#" className="p-2 bg-rose-100 rounded-full text-brand-darkPink hover:bg-rose-200 transition">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-rose-100 rounded-full text-brand-darkPink hover:bg-rose-200 transition">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

        </div>
        
        <div className="border-t border-rose-200 mt-10 pt-6 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Fifi Maison. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

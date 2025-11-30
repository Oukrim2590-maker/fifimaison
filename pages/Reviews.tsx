import React from 'react';
import { REVIEWS } from '../constants';
import { Star, Quote, MessageSquarePlus } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">آراء الزبناء</h1>
          <p className="text-lg text-slate-600">شنو قالو الناس اللي داقو ماكلتنا؟</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-rose-50 relative hover:-translate-y-1 transition duration-300">
              <Quote className="absolute top-6 left-6 h-8 w-8 text-rose-200 rotate-180" />
              <div className="flex gap-1 text-brand-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < review.rating ? 'fill-current' : 'text-slate-200'}`} 
                  />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">"{review.comment}"</p>
              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="font-bold text-slate-800">{review.name}</span>
                <span className="text-xs text-slate-400">{review.date}</span>
              </div>
            </div>
          ))}
          
          {/* Mock More Reviews for grid fulness */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-rose-50 relative hover:-translate-y-1 transition duration-300">
             <Quote className="absolute top-6 left-6 h-8 w-8 text-rose-200 rotate-180" />
              <div className="flex gap-1 text-brand-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">"طلبت البوفيه للعيد ميلاد د بنتي، كلشي عجبو الحال. شكراً بزاف على الاحترافية."</p>
              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="font-bold text-slate-800">هدى العمراني</span>
                <span className="text-xs text-slate-400">2 يناير 2024</span>
              </div>
          </div>
        </div>

        {/* Call to Action for Review */}
        <div className="bg-rose-100 rounded-3xl p-8 md:p-12 flex flex-col items-center text-center">
          <MessageSquarePlus className="h-12 w-12 text-brand-darkPink mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-3">حتى انتي جربتي ماكلتنا؟</h2>
          <p className="text-slate-600 mb-6 max-w-lg">رأيك كيهمنا بزاف وكيساعدنا نتحسنو. ماتردديش تشاركي معنا تجربتك.</p>
          <a 
            href="https://wa.me/212612039030?text=السلام عليكم، بغيت نعطي رأيي في الطلبية..."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-darkPink text-white px-8 py-3 rounded-full font-bold hover:bg-rose-800 transition"
          >
            كتب رأي دابا
          </a>
        </div>

      </div>
    </div>
  );
};

export default Reviews;

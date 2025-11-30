import React, { useState } from 'react';
import { MENU_ITEMS, CATEGORIES } from '../constants';
import MenuCard from '../components/MenuCard';
import { UtensilsCrossed } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-rose-100 rounded-full mb-4">
             <UtensilsCrossed className="h-8 w-8 text-brand-darkPink" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">قائمة الطعام</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            اختاري اللي شهيتي من أطباقنا المتنوعة. كلشي بلدي، طري، ومحضر بعناية.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm
                ${activeCategory === cat.id 
                  ? 'bg-brand-darkPink text-white shadow-rose-300' 
                  : 'bg-white text-slate-600 hover:bg-rose-50 border border-transparent'
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
             <p className="text-xl text-slate-500">لا توجد وجبات في هذا القسم حالياً.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;

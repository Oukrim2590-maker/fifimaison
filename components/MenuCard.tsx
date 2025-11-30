
import React, { useState } from 'react';
import { MenuItem } from '../types';
import { ShoppingBag, Star, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [isAdded, setIsAdded] = useState(false);

  const hasCustomization = item.customization && item.customization.length > 0;

  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (hasCustomization) {
      // If item has options, navigate to details page to let user customize
      navigate(`/menu/${item.id}`);
    } else {
      // If simple item, add directly
      addToCart(item);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 1500);
    }
  };

  return (
    <Link to={`/menu/${item.id}`} className="block h-full group">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col h-full">
        <div className="h-56 overflow-hidden relative">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 flex flex-col items-start gap-2">
              <span className="bg-white/95 backdrop-blur text-brand-darkPink font-bold px-3 py-1 rounded-full text-sm shadow-sm">
                  {item.price} درهم
              </span>
          </div>
          {item.rating && (
            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur text-white px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                <Star className="h-3 w-3 fill-current text-yellow-400" />
                <span>{item.rating}</span>
            </div>
          )}
        </div>
        
        <div className="p-5 flex flex-col flex-grow relative">
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-brand-darkPink transition-colors">{item.name}</h3>
          <p className="text-slate-600 text-sm mb-4 leading-relaxed flex-grow line-clamp-3">{item.description}</p>
          
          <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
             <span className="text-xs text-slate-400 font-medium group-hover:text-brand-darkPink transition-colors">اضغط للتفاصيل</span>
             
             {/* Unified Button: Always looks like Add to Cart */}
             <button 
                onClick={handleAddClick}
                className={`px-4 py-2 rounded-full text-sm font-bold transition flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5
                    ${isAdded 
                        ? 'bg-green-500 text-white' 
                        : 'bg-brand-darkPink text-white hover:bg-rose-800'
                    }`}
            >
                {isAdded ? (
                    <>
                        <Check size={16} />
                        <span>تمت الإضافة</span>
                    </>
                ) : (
                    <>
                        <ShoppingBag size={16} />
                        <span>أضف للسلة</span>
                    </>
                )}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MenuCard;

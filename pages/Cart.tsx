
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Edit2 } from 'lucide-react';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center py-20 px-4">
        <div className="bg-rose-100 p-6 rounded-full mb-6">
          <ShoppingBag className="h-16 w-16 text-brand-darkPink" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">السلة ديالك خاوية</h2>
        <p className="text-slate-600 mb-8">مازال ما ختاريتي والو من الشهيوات ديالنا.</p>
        <Link 
          to="/menu" 
          className="bg-brand-darkPink text-white px-8 py-3 rounded-full font-bold hover:bg-rose-800 transition shadow-lg"
        >
          شوف المينيو
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-2">
          <ShoppingBag className="h-8 w-8 text-brand-darkPink" />
          سلة الطلبات
        </h1>

        <div className="bg-white rounded-2xl shadow-sm border border-rose-100 overflow-hidden mb-8">
          <div className="p-6 md:p-8 space-y-8">
            {items.map((item) => (
              <div key={item.cartId} className="flex flex-col md:flex-row items-start md:items-center gap-6 border-b border-stone-100 pb-8 last:border-0 last:pb-0">
                {/* Image */}
                <Link to={`/menu/${item.id}`} className="shrink-0">
                    <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 rounded-xl object-cover shadow-sm hover:opacity-90 transition"
                    />
                </Link>
                
                {/* Details */}
                <div className="flex-grow text-right">
                  <h3 className="font-bold text-lg text-slate-800">
                    <Link to={`/menu/${item.id}`} className="hover:text-brand-darkPink">{item.name}</Link>
                  </h3>
                  
                  {/* Display Selected Options */}
                  {item.selectedOptions && item.selectedOptions.length > 0 && (
                      <div className="mt-1 flex flex-wrap gap-2">
                          {item.selectedOptions.map(opt => (
                              <span key={opt.id} className={`text-xs px-2 py-1 rounded-md font-medium ${opt.type === 'remove' ? 'bg-red-50 text-red-500 line-through decoration-red-500/50' : 'bg-green-50 text-green-600'}`}>
                                  {opt.type === 'remove' ? '' : '+ '}{opt.label}
                              </span>
                          ))}
                      </div>
                  )}

                  <p className="text-brand-darkPink font-medium mt-2">{item.finalPrice} درهم <span className="text-xs text-slate-400 font-normal"> للواحد</span></p>
                </div>

                {/* Controls Container */}
                <div className="flex items-center gap-4 self-end md:self-center w-full md:w-auto justify-between md:justify-start">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 bg-stone-50 rounded-lg p-1">
                    <button 
                        onClick={() => updateQuantity(item.cartId, -1)}
                        className="p-2 hover:bg-white rounded-md text-slate-600 transition shadow-sm"
                    >
                        <Minus size={16} />
                    </button>
                    <span className="font-bold text-slate-800 w-8 text-center">{item.quantity}</span>
                    <button 
                        onClick={() => updateQuantity(item.cartId, 1)}
                        className="p-2 hover:bg-white rounded-md text-slate-600 transition shadow-sm"
                    >
                        <Plus size={16} />
                    </button>
                    </div>

                    {/* Remove */}
                    <button 
                    onClick={() => removeFromCart(item.cartId)}
                    className="text-slate-400 hover:text-red-500 transition p-2 bg-slate-50 rounded-full md:bg-transparent"
                    title="حذف"
                    >
                    <Trash2 size={20} />
                    </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Footer Total */}
          <div className="bg-rose-50 p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="text-xl font-bold text-slate-800">
               المجموع الكلي: <span className="text-brand-darkPink text-2xl mr-2">{cartTotal} درهم</span>
             </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <Link 
            to="/menu"
            className="px-8 py-4 rounded-xl font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition flex items-center justify-center gap-2"
          >
            <ArrowRight size={20} />
            استمرار التسوق
          </Link>
          
          <Link 
            to="/order"
            className="px-8 py-4 rounded-xl font-bold text-white bg-green-500 hover:bg-green-600 transition shadow-lg flex items-center justify-center gap-2 flex-grow md:flex-grow-0 md:w-1/3"
          >
            إكمال الطلب
            <ShoppingBag size={20} />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Cart;

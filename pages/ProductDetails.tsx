
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MENU_ITEMS, REVIEWS } from '../constants';
import { MenuItem, CustomizationOption } from '../types';
import { Star, Minus, Plus, ShoppingBag, ArrowRight, CheckCircle, Clock, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<MenuItem | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<CustomizationOption[]>([]);
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const item = MENU_ITEMS.find(i => i.id === Number(id));
    setProduct(item);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const toggleOption = (option: CustomizationOption) => {
    setSelectedOptions(prev => {
      const exists = prev.find(o => o.id === option.id);
      if (exists) {
        return prev.filter(o => o.id !== option.id);
      }
      return [...prev, option];
    });
  };

  const calculateTotalPrice = () => {
    const extrasTotal = selectedOptions.reduce((sum, opt) => sum + (opt.price || 0), 0);
    return (product.price + extrasTotal) * quantity;
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedOptions);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      
      {/* Breadcrumb */}
      <div className="bg-white py-4 px-4 shadow-sm">
         <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="hover:text-brand-darkPink">الرئيسية</Link>
            <span>/</span>
            <Link to="/menu" className="hover:text-brand-darkPink">المينيو</Link>
            <span>/</span>
            <span className="text-slate-800 font-bold">{product.name}</span>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Right Column: Image */}
          <div className="space-y-6">
            {/* Image Container: Fixed height for 'Medium Size', object-contain for 'Natural Size' */}
            <div className="rounded-3xl overflow-hidden shadow-xl relative bg-white h-[350px] md:h-[450px] flex items-center justify-center border border-stone-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain"
              />
              {product.featured && (
                <span className="absolute top-6 right-6 bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  موصى به
                </span>
              )}
            </div>
            {/* Features Icons */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                    <Clock className="h-6 w-6 text-brand-darkPink mx-auto mb-2" />
                    <span className="text-xs text-slate-600 font-bold block">تحضير يومي</span>
                </div>
                <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                    <CheckCircle className="h-6 w-6 text-brand-darkPink mx-auto mb-2" />
                    <span className="text-xs text-slate-600 font-bold block">مكونات طرية</span>
                </div>
                <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                    <Truck className="h-6 w-6 text-brand-darkPink mx-auto mb-2" />
                    <span className="text-xs text-slate-600 font-bold block">توصيل سريع</span>
                </div>
            </div>
          </div>

          {/* Left Column: Details & Customization */}
          <div className="flex flex-col h-full">
            <h1 className="text-4xl font-bold text-slate-800 mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-6">
               <div className="flex text-brand-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < Math.round(product.rating || 5) ? 'fill-current' : 'text-slate-200'}`} />
                  ))}
               </div>
               <span className="text-slate-400 text-sm">({product.reviewsCount || 10} تقييم)</span>
            </div>

            <p className="text-xl font-bold text-brand-darkPink mb-6">{product.price} درهم</p>
            
            <p className="text-slate-600 leading-relaxed mb-8 text-lg bg-white p-6 rounded-xl border border-rose-50 shadow-sm">
              {product.description}
            </p>

            {/* Customization Options */}
            {product.customization && product.customization.length > 0 && (
              <div className="mb-8">
                <h3 className="font-bold text-lg text-slate-800 mb-4">تخصيص الطلب:</h3>
                <div className="space-y-3">
                  {product.customization.map(option => (
                    <label key={option.id} className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg cursor-pointer hover:border-rose-300 transition select-none">
                      <input 
                        type="checkbox"
                        checked={selectedOptions.some(o => o.id === option.id)}
                        onChange={() => toggleOption(option)}
                        className="w-5 h-5 text-brand-darkPink focus:ring-brand-darkPink border-gray-300 rounded"
                      />
                      <span className="flex-grow text-slate-700 font-medium">{option.label}</span>
                      {option.type === 'remove' && <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-md">حذف</span>}
                      {option.type === 'add' && <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-md">إضافة</span>}
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="mt-auto bg-white p-6 rounded-2xl shadow-lg border border-rose-100 sticky bottom-4 lg:static z-20">
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-between">
                
                {/* Quantity */}
                <div className="flex items-center gap-4">
                  <span className="text-slate-600 font-medium">الكمية:</span>
                  <div className="flex items-center gap-4 bg-stone-100 rounded-full px-2 py-1">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm text-slate-600 hover:text-brand-darkPink"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-bold text-xl w-6 text-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm text-slate-600 hover:text-brand-darkPink"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* Add Button & Total */}
                <button 
                  onClick={handleAddToCart}
                  className="flex-grow w-full sm:w-auto bg-brand-darkPink text-white py-3 px-8 rounded-full font-bold shadow-lg hover:bg-rose-800 transition flex items-center justify-center gap-3"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>إضافة للسلة</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded text-sm">{calculateTotalPrice()} درهم</span>
                </button>
              </div>
            </div>

            {/* Success Notification */}
            {showNotification && (
              <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-2 animate-bounce">
                <CheckCircle size={20} />
                <span>تمت الإضافة للسلة بنجاح!</span>
              </div>
            )}

          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
            <Star className="h-6 w-6 text-brand-gold fill-current" />
            تقييمات الزبناء
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Use existing mock reviews, but in a real app these would be filtered by product ID */}
             {REVIEWS.slice(0, 2).map(review => (
               <div key={review.id} className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                 <div className="flex items-center justify-between mb-4">
                   <h4 className="font-bold text-slate-800">{review.name}</h4>
                   <span className="text-sm text-slate-400">{review.date}</span>
                 </div>
                 <div className="flex text-brand-gold mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-current' : 'text-slate-200'}`} />
                    ))}
                 </div>
                 <p className="text-slate-600">{review.comment}</p>
               </div>
             ))}
          </div>
          <div className="mt-6 text-center">
             <button className="text-brand-darkPink font-bold hover:underline">عرض جميع التقييمات</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;


import React, { useState } from 'react';
import { MENU_ITEMS, WHATSAPP_NUMBER } from '../constants';
import { Calendar, Send } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Order: React.FC = () => {
  const { items, cartTotal } = useCart();
  
  // Local state for non-cart usage (direct access fallback)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    notes: ''
  });

  // Fallback for single item selection if cart is empty
  const [singleItem, setSingleItem] = useState({ name: '', quantity: 1 });

  const isCartEmpty = items.length === 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSingleItemChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
     const { name, value } = e.target;
     setSingleItem(prev => ({...prev, [name]: value}));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let orderDetails = "";
    let total = 0;

    if (!isCartEmpty) {
        // Build message from Cart
        items.forEach(item => {
            let optionsText = "";
            if (item.selectedOptions && item.selectedOptions.length > 0) {
               const modifications = item.selectedOptions.map(opt => {
                   if (opt.type === 'remove') return `(بدون ${opt.label.replace('بدون ', '')})`;
                   return `(+ ${opt.label})`;
               }).join(', ');
               optionsText = ` ${modifications}`;
            }

            orderDetails += `▪️ ${item.quantity}x ${item.name}${optionsText} - ${item.finalPrice * item.quantity} درهم\n`;
        });
        total = cartTotal;
    } else {
        // Build message from Single Item Fallback
        orderDetails += `▪️ ${singleItem.quantity}x ${singleItem.name}\n`;
        total = 0; 
    }

    // Construct the message
    const message = `
*طلب جديد من الموقع* 🛍️
------------------
👤 *الاسم:* ${formData.name}
📱 *الهاتف:* ${formData.phone}
📅 *تاريخ الاستلام:* ${formData.date}
📝 *ملاحظات:* ${formData.notes || 'لا يوجد'}

🛒 *الطلبية:*
${orderDetails}
------------------
💰 *المجموع:* ${total > 0 ? total + ' درهم' : 'غير محدد'}
------------------
يرجى تأكيد الطلب. وشكراً!
    `.trim();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
  };

  // Get date 48h from now for min attribute
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 2);
  const minDateStr = minDate.toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-rose-50/50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">تأكيد الطلب</h1>
          <p className="text-slate-600">عمر المعلومات ديالك وسيفت الطلب في الواتساب ديريكت.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-rose-100">
          
          {/* Order Summary Section */}
          <div className="mb-8 p-4 bg-stone-50 rounded-xl border border-stone-100">
            <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center justify-between">
              <span>ملخص الطلب</span>
              {!isCartEmpty && <Link to="/cart" className="text-xs text-brand-darkPink hover:underline">تعديل السلة</Link>}
            </h3>
            
            {isCartEmpty ? (
              <div className="text-center py-4">
                 <p className="text-sm text-slate-500 mb-4">السلة ديالك خاوية. بغيتي تختار وجبة دابا؟</p>
                 <div className="space-y-4">
                    <select
                        required
                        name="name"
                        value={singleItem.name}
                        onChange={handleSingleItemChange}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm"
                    >
                        <option value="">-- اختار الوجبة --</option>
                        {MENU_ITEMS.map(item => (
                        <option key={item.id} value={item.name}>{item.name} - {item.price} درهم</option>
                        ))}
                        <option value="طلب خاص">وجبة أخرى / طلب خاص</option>
                    </select>
                    <div className="flex items-center gap-2">
                         <label className="text-sm">الكمية:</label>
                         <input 
                            type="number" 
                            min="1" 
                            name="quantity"
                            value={singleItem.quantity}
                            onChange={handleSingleItemChange}
                            className="w-20 px-2 py-1 border rounded-md" 
                         />
                    </div>
                 </div>
              </div>
            ) : (
               <div className="space-y-2">
                  {items.map(item => (
                      <div key={item.cartId} className="flex flex-col text-sm border-b border-stone-200 pb-2 last:border-0">
                          <div className="flex justify-between">
                            <span className="text-slate-700 font-bold">{item.quantity}x {item.name}</span>
                            <span className="font-bold text-slate-800">{item.finalPrice * item.quantity} درهم</span>
                          </div>
                          {item.selectedOptions && item.selectedOptions.length > 0 && (
                             <div className="text-xs text-slate-500 mt-1 mr-4">
                                {item.selectedOptions.map(o => (
                                    <span key={o.id} className="ml-2 bg-stone-200 px-1 rounded">{o.label}</span>
                                ))}
                             </div>
                          )}
                      </div>
                  ))}
                  <div className="border-t border-stone-200 pt-2 mt-2 flex justify-between font-bold text-lg text-brand-darkPink">
                      <span>المجموع</span>
                      <span>{cartTotal} درهم</span>
                  </div>
               </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">الاسم الكامل</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-darkPink focus:ring-1 focus:ring-brand-darkPink outline-none transition"
                  placeholder="مثال: ليلى بناني"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">رقم الهاتف</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-darkPink focus:ring-1 focus:ring-brand-darkPink outline-none transition"
                  placeholder="06XXXXXXXX"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">تاريخ الاستلام (48 ساعة قبل)</label>
              <div className="relative">
                <Calendar className="absolute top-3.5 right-3 h-5 w-5 text-slate-400" />
                <input
                  required
                  type="date"
                  name="date"
                  min={minDateStr}
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-10 py-3 rounded-lg border border-slate-200 focus:border-brand-darkPink focus:ring-1 focus:ring-brand-darkPink outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">ملاحظات إضافية</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-darkPink focus:ring-1 focus:ring-brand-darkPink outline-none transition"
                placeholder="بغيتي تنقصي الملح؟ ولا شي حاجة أخرى..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Send className="h-5 w-5" />
              <span>إرسال الطلب عبر WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;

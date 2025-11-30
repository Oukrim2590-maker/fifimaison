
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MenuItem, CustomizationOption } from '../types';

// Extended interface for items inside the cart
export interface CartItem extends MenuItem {
  cartId: string; // Unique ID for this specific entry in cart (handles duplicates with diff options)
  quantity: number;
  selectedOptions?: CustomizationOption[]; // The user's choices
  finalPrice: number; // Price including extras
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem, quantity?: number, options?: CustomizationOption[]) => void;
  removeFromCart: (cartId: string) => void;
  updateQuantity: (cartId: string, delta: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('fifi_cart_v2');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('fifi_cart_v2', JSON.stringify(items));
  }, [items]);

  const addToCart = (product: MenuItem, quantity = 1, options: CustomizationOption[] = []) => {
    // Calculate price of extras
    const extrasPrice = options.reduce((sum, opt) => sum + (opt.price || 0), 0);
    const finalPrice = product.price + extrasPrice;

    // Create a unique identifier based on product ID and sorted option IDs
    // This allows us to group identical custom orders together, but separate distinct ones
    const optionsKey = options.map(o => o.id).sort().join('-');
    const existingItemIndex = items.findIndex(
      item => item.id === product.id && item.selectedOptions?.map(o => o.id).sort().join('-') === optionsKey
    );

    if (existingItemIndex > -1) {
      // Item exists with exact same options, just update quantity
      setItems(prev => {
        const newItems = [...prev];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      });
    } else {
      // Add new item entry
      const newItem: CartItem = {
        ...product,
        cartId: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        quantity,
        selectedOptions: options,
        finalPrice,
      };
      setItems(prev => [...prev, newItem]);
    }
  };

  const removeFromCart = (cartId: string) => {
    setItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  const updateQuantity = (cartId: string, delta: number) => {
    setItems(prev => prev.map(item => {
      if (item.cartId === cartId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const clearCart = () => setItems([]);

  const cartTotal = items.reduce((sum, item) => sum + (item.finalPrice * item.quantity), 0);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

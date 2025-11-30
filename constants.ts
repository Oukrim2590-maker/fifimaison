
import { MenuItem, Review, ServiceItem } from './types';
import { ChefHat, Truck, Utensils, PartyPopper, Briefcase } from 'lucide-react';

export const WHATSAPP_NUMBER = "212612039030";

export const CATEGORIES = [
  { id: 'all', label: 'الكل' },
  { id: 'main', label: 'أطباق رئيسية' },
  { id: 'salads', label: 'سلطات ومقبلات' },
  { id: 'sweets', label: 'حلويات' },
  { id: 'events', label: 'عروض ومناسبات' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    category: 'main',
    name: 'طاجين اللحم بالبرقوق',
    description: 'طاجين مغربي أصيل معسل باللوز والبرقوق، مطيب على حقو وطريقو.',
    price: 150,
    image: 'https://i.postimg.cc/8CRf7Wcy/Moroccan-sweet-meat-dish.jpg',
    featured: true,
    rating: 4.8,
    reviewsCount: 124,
    customization: [
      { id: 'no_prunes', label: 'بدون برقوق', type: 'remove' },
      { id: 'no_almonds', label: 'بدون لوز', type: 'remove' },
      { id: 'extra_meat', label: 'إضافة لحم (+50 درهم)', type: 'add', price: 50 },
      { id: 'extra_bread', label: 'خبز إضافي (+5 درهم)', type: 'add', price: 5 }
    ]
  },
  {
    id: 2,
    category: 'main',
    name: 'بسطيلة الدجاج واللوز',
    description: 'بسطيلة هماوية مقرمشة، عامرة بالدجاج واللوز الحر.',
    price: 450,
    image: 'https://i.postimg.cc/VkzRsYD7/vue-de-dessus-de-delicieuses-patisseries-avec-du-fromage-cottage-sur-fond-sombre-patisserie-sweet-ba.jpg',
    featured: true,
    rating: 4.9,
    reviewsCount: 85,
    customization: [
      { id: 'no_sugar', label: 'بدون سكر (تزيين)', type: 'remove' },
      { id: 'extra_almonds', label: 'لوز إضافي (+30 درهم)', type: 'add', price: 30 }
    ]
  },
  {
    id: 3,
    category: 'salads',
    name: 'سلطة رويال متنوعة',
    description: 'تشكيلة من الخضر الطازجة وفواكه البحر، تقديم راقي.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
    featured: false,
    rating: 4.7,
    reviewsCount: 42,
    customization: [
      { id: 'no_seafood', label: 'بدون فواكه البحر', type: 'remove' },
      { id: 'sauce_aside', label: 'الصلصة جانباً', type: 'remove' }
    ]
  },
  {
    id: 4,
    category: 'sweets',
    name: 'بلاطو حلويات اللوز',
    description: 'كيلو مخلط من حلويات اللوز المغربية التقليدية.',
    price: 180,
    image: 'https://i.postimg.cc/N03bcRVm/Moroccan-Sweets-hlwyat-mghrbyt.jpg',
    featured: true,
    rating: 5.0,
    reviewsCount: 210,
    customization: [
      { id: 'gift_box', label: 'علبة هدايا فاخرة (+20 درهم)', type: 'add', price: 20 }
    ]
  },
  {
    id: 5,
    category: 'main',
    name: 'رفيسة بالدجاج البلدي',
    description: 'قصعة الرفيسة بالمسمن والعدس والحلية والدجاج البلدي.',
    price: 200,
    image: 'https://i.postimg.cc/qqyvFHK3/Moroccan-Chicken-Rfissa-Trid-with-Chicken-and-Lentils.jpg',
    featured: false,
    rating: 4.6,
    reviewsCount: 56,
    customization: [
      { id: 'no_fenugreek', label: 'بدون حلبة', type: 'remove' },
      { id: 'extra_msemen', label: 'مسمن إضافي (+20 درهم)', type: 'add', price: 20 }
    ]
  },
  {
    id: 6,
    category: 'events',
    name: 'بوفيه مملحات (Finger Food)',
    description: 'تشكيلة راقية من المملحات للمناسبات (بريوات، ميني بيتزا، كيش).',
    price: 350,
  
    image: 'https://i.postimg.cc/J4zFK5W4/telechargement-(4).jpg',
    featured: true,
    rating: 4.9,
    reviewsCount: 30,
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'طلبات يومية',
    description: 'مافيك ما يطيب؟ وجبات غداء وعشاء منزلية كتوصلك سخونة.',
    iconName: 'Utensils'
  },
  {
    id: 2,
    title: 'المناسبات والعروض',
    description: 'تجهيز بوفيهات وعزومات، خطوبة، عقيقة، أو لمة عائلية.',
    iconName: 'PartyPopper'
  },
  {
    id: 3,
    title: 'وجبات للشركات',
    description: 'توصيل وجبات غداء للموظفين والشركات في مكناس بعقود شهرية.',
    iconName: 'Briefcase'
  },
  {
    id: 4,
    title: 'توصيل سريع',
    description: 'خدمة توصيل موثوقة داخل مدينة مكناس والنواحي.',
    iconName: 'Truck'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'سارة العلمي',
    comment: 'تبارك الله عليك، البسطيلة كانت كتحمق والتقديم راقي بزاف. شكراً Fifi Maison!',
    rating: 5,
    date: '12 أكتوبر 2023'
  },
  {
    id: 2,
    name: 'محمد التازي',
    comment: 'ماكلت الدار ديال بصح، النقا والبنة. الطاجين جا معلك ولذيذ.',
    rating: 5,
    date: '5 نونبر 2023'
  },
  {
    id: 3,
    name: 'فاطمة الزهراء',
    comment: 'تعامل راقي وخدمة في المستوى، الأكل وصل سخون وفي الوقت.',
    rating: 4,
    date: '20 دجنبر 2023'
  }
];

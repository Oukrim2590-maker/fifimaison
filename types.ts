
export interface CustomizationOption {
  id: string;
  label: string;
  type: 'remove' | 'add'; // 'remove' ingredients or 'add' extras
  price?: number; // Only for 'add' type
}

export interface MenuItem {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
  image: string;
  featured?: boolean;
  customization?: CustomizationOption[];
  rating?: number; // Average rating
  reviewsCount?: number;
}

export interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
  date: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

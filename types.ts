export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  specs: {
    sensor?: string;
    switches?: string;
    connection?: string;
    resolution?: string;
    weight?: string;
  };
  performance: {
    subject: string;
    A: number;
    fullMark: number;
  }[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

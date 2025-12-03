import React from 'react';
import { Product } from '../types';
import { ArrowRight, Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails, onAddToCart }) => {
  return (
    <div className="group bg-vortex-800 rounded-xl overflow-hidden border border-white/5 shadow-xl hover:shadow-vortex-accent/20 hover:border-vortex-accent/50 transition-all duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => onViewDetails(product)}>
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vortex-900 via-transparent to-transparent opacity-60"></div>
        <span className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-vortex-accent text-xs font-bold px-2 py-1 rounded border border-vortex-accent/30">
          {product.category}
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 
          className="text-lg font-bold text-white mb-1 cursor-pointer hover:text-vortex-accent transition-colors"
          onClick={() => onViewDetails(product)}
        >
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-white">${product.price}</span>
          <div className="flex space-x-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="p-2 bg-vortex-700 hover:bg-vortex-accent text-white rounded-lg transition-colors duration-200"
              title="Quick Add"
            >
              <Plus className="h-5 w-5" />
            </button>
            <button 
              onClick={() => onViewDetails(product)}
              className="p-2 border border-white/20 hover:border-vortex-accent text-gray-300 hover:text-vortex-accent rounded-lg transition-colors duration-200"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

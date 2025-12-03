import React, { useState } from 'react';
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import PerformanceChart from './components/PerformanceChart';
import AIChat from './components/AIChat';
import { PRODUCTS } from './constants';
import { Product, CartItem } from './types';
import { ArrowLeft, Trash2, Check, CreditCard } from 'lucide-react';

// --- Home Page Component ---
const HomePage: React.FC<{
  onViewProduct: (p: Product) => void;
  onAddToCart: (p: Product) => void;
}> = ({ onViewProduct, onAddToCart }) => {
  return (
    <div className="min-h-screen bg-vortex-900 pb-20">
      {/* Hero Section */}
      <div className="relative bg-vortex-800 h-[400px] flex items-center justify-center overflow-hidden mb-12">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-vortex-900"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
            LEVEL UP <span className="text-transparent bg-clip-text bg-gradient-to-r from-vortex-accent to-vortex-glow">YOUR REALITY</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Elite gaming gear engineered for victory. Powered by next-gen technology.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-8 pl-4 border-l-4 border-vortex-accent">Latest Drops</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onViewDetails={onViewProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Product Details Page ---
const ProductPage: React.FC<{
  product: Product | null;
  onAddToCart: (p: Product) => void;
  onBack: () => void;
}> = ({ product, onAddToCart, onBack }) => {
  if (!product) return <div className="text-white text-center mt-20">Product not found.</div>;

  return (
    <div className="min-h-screen bg-vortex-900 pt-8 px-4 sm:px-6 lg:px-8 pb-20">
      <button 
        onClick={onBack}
        className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2 h-5 w-5" /> Back to Store
      </button>

      <div className="max-w-7xl mx-auto bg-vortex-800/30 rounded-3xl p-6 md:p-12 border border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Image */}
          <div className="space-y-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
            </div>
            
            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="bg-vortex-900/50 p-4 rounded-xl border border-white/5">
                  <p className="text-gray-500 text-xs uppercase font-bold tracking-wider">{key}</p>
                  <p className="text-white font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <div className="mb-auto">
              <span className="inline-block bg-vortex-accent/10 text-vortex-accent px-3 py-1 rounded-full text-xs font-bold mb-4 border border-vortex-accent/20">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
              <p className="text-2xl text-vortex-accent font-light mb-6">${product.price}</p>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">{product.description}</p>
              
              <button 
                onClick={() => onAddToCart(product)}
                className="w-full md:w-auto bg-vortex-accent hover:bg-cyan-400 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center"
              >
                Add to Cart <Check className="ml-2 h-5 w-5" />
              </button>
            </div>

            {/* Performance Chart */}
            <div className="mt-12">
              <PerformanceChart data={product.performance} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Cart Page ---
const CartPage: React.FC<{
  cart: CartItem[];
  onRemove: (id: string) => void;
  onCheckout: () => void;
}> = ({ cart, onRemove, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-vortex-900 pt-8 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Your Cart</h2>
        
        {cart.length === 0 ? (
          <div className="text-center py-20 bg-vortex-800/30 rounded-2xl border border-dashed border-gray-700">
            <p className="text-gray-400 text-xl">Your cart is empty.</p>
          </div>
        ) : (
          <div className="bg-vortex-800 rounded-2xl overflow-hidden border border-white/5 shadow-xl">
            <div className="p-6 space-y-6">
              {cart.map(item => (
                <div key={item.id} className="flex items-center justify-between border-b border-white/10 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center space-x-4">
                    <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded-lg object-cover bg-vortex-900" />
                    <div>
                      <h3 className="text-white font-medium">{item.name}</h3>
                      <p className="text-gray-400 text-sm">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <span className="text-white bg-vortex-900 px-3 py-1 rounded-md border border-white/10">x{item.quantity}</span>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-vortex-900/50 p-6 border-t border-white/10">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-400">Total</span>
                <span className="text-2xl font-bold text-white">${total.toFixed(2)}</span>
              </div>
              <button 
                onClick={onCheckout}
                className="w-full bg-gradient-to-r from-vortex-accent to-vortex-glow hover:from-cyan-400 hover:to-violet-400 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex justify-center items-center"
              >
                Checkout <CreditCard className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main App Wrapper ---
const AppContent: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activePage, setActivePage] = useState('home');
  const navigate = useNavigate();

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Optional: Show toast or feedback here
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleNavigate = (page: string) => {
    setActivePage(page);
    navigate(page === 'home' ? '/' : `/${page}`);
  };

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    navigate('/product');
    setActivePage('product');
  };

  const handleBackToHome = () => {
    navigate('/');
    setActivePage('home');
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-vortex-900 min-h-screen font-sans text-gray-100 selection:bg-vortex-accent selection:text-black">
      <Navbar 
        cartCount={totalItems} 
        onNavigate={handleNavigate}
        currentPage={activePage}
      />
      
      <Routes>
        <Route path="/" element={
          <HomePage 
            onViewProduct={handleViewProduct} 
            onAddToCart={addToCart} 
          />
        } />
        <Route path="/product" element={
          <ProductPage 
            product={selectedProduct} 
            onAddToCart={addToCart}
            onBack={handleBackToHome}
          />
        } />
        <Route path="/cart" element={
          <CartPage 
            cart={cart}
            onRemove={removeFromCart}
            onCheckout={() => alert('Proceeding to Checkout Simulation...')}
          />
        } />
      </Routes>

      <AIChat />
    </div>
  );
};

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;

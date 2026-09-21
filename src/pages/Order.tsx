import { Link } from 'react-router-dom';
import { ShoppingBag, MapPin, Clock } from 'lucide-react';

export default function Order() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black mb-8 text-center">Start Your Order</h1>
      
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-8 border-b">
          <h2 className="text-2xl font-bold mb-6">How would you like to get your order?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex flex-col items-center justify-center p-6 border-2 border-[#DA291C] bg-red-50 rounded-2xl transition-colors">
              <ShoppingBag className="w-8 h-8 text-[#DA291C] mb-3" />
              <span className="font-bold text-[#DA291C]">Pickup</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 hover:border-gray-300 rounded-2xl transition-colors">
              <MapPin className="w-8 h-8 text-gray-600 mb-3" />
              <span className="font-bold text-gray-700">McDelivery®</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 hover:border-gray-300 rounded-2xl transition-colors">
              <Clock className="w-8 h-8 text-gray-600 mb-3" />
              <span className="font-bold text-gray-700">Curbside</span>
            </button>
          </div>
        </div>
        
        <div className="p-8 bg-gray-50">
          <h3 className="font-bold text-lg mb-4">Find a participating restaurant</h3>
          <div className="flex gap-4 mb-6">
            <input 
              type="text" 
              placeholder="Zip, City, or State" 
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#DA291C] focus:ring-1 focus:ring-[#DA291C]"
            />
            <button className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors">
              Search
            </button>
          </div>
          <p className="text-sm text-gray-500 text-center">
            Or <Link to="/locator" className="text-[#DA291C] hover:underline font-medium">use your current location</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

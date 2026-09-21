import { Link } from 'react-router-dom';
import { Smartphone, Gift, Star } from 'lucide-react';

export default function AppDownload() {
  return (
    <div className="flex flex-col">
      <section className="bg-[#FFC72C] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Get the App. <br/> Get the Deals.
            </h1>
            <p className="text-xl mb-8 max-w-lg">
              Download the McDonald's app to earn points on every order, access exclusive deals, and order ahead for pickup or delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-black text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-lg">
                <Smartphone className="w-5 h-5" /> App Store
              </button>
              <button className="bg-black text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-lg">
                <Smartphone className="w-5 h-5" /> Google Play
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800&h=800" 
              alt="McDonald's App" 
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl rotate-3"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16">Why Download the App?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-10 h-10 text-[#DA291C]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Exclusive Deals</h3>
              <p className="text-gray-600">Get access to daily deals and special offers only available in the McDonald's app.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-[#FFC72C]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">MyMcDonald's Rewards</h3>
              <p className="text-gray-600">Earn points on every order to redeem for free McDonald's favorites.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-10 h-10 text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mobile Order & Pay</h3>
              <p className="text-gray-600">Order ahead and choose how you want to pick up: Drive Thru, Curbside, or In-Store.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

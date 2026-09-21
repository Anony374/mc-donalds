import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#DA291C] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-4 leading-tight"
            >
              Free Fries <br/> <span className="text-[#FFC72C]">Friday</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl mb-8 max-w-md"
            >
              Get free medium Fries with any $1 minimum purchase, only in the app.*
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/app" className="inline-block bg-[#FFC72C] text-black font-bold px-8 py-4 rounded-full text-lg hover:bg-white transition-colors shadow-lg">
                Get the App
              </Link>
            </motion.div>
            <p className="text-xs mt-4 opacity-80">*Valid 1x on Fridays thru 12/31/26 at participating McDonald's. Excludes tax.</p>
          </div>
          <div className="flex-1 relative">
            <motion.img 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.4 }}
              src="https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&q=80&w=800&h=800" 
              alt="Delicious French Fries" 
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl rotate-3"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Favorites</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 1, name: "Big Mac®", desc: "Mouthwatering perfection starts with two 100% pure beef patties.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600&h=400" },
              { id: 2, name: "Chicken McNuggets®", desc: "Made with 100% white meat chicken and no artificial colors.", img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=600&h=400" },
              { id: 3, name: "McCafé® Iced Coffee", desc: "Refreshingly cool and made with 100% Arabica beans.", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600&h=400" }
            ].map((item) => (
              <Link to={`/item/${item.id}`} key={item.id} className="group block">
                <div className="bg-gray-50 rounded-2xl overflow-hidden mb-4 transition-transform group-hover:-translate-y-2 shadow-sm group-hover:shadow-md">
                  <img src={item.img} alt={item.name} className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#DA291C] transition-colors">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu" className="inline-block bg-[#DA291C] text-white font-bold px-8 py-3 rounded-full hover:bg-red-700 transition-colors">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* App Promo */}
      <section className="py-16 bg-[#FFC72C]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600&h=600" 
              alt="Mobile App" 
              className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl -rotate-6"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-black mb-4">Deals for Days</h2>
            <p className="text-xl mb-8">Get exclusive deals on your McDonald's favorites in the app with contactless Mobile Order & Pay* and convenient Drive Thru or Curbside pickup.</p>
            <Link to="/app" className="inline-block bg-black text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors">
              Download the App
            </Link>
            <p className="text-xs mt-4 opacity-70">*Mobile Order & Pay at participating McDonald's.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

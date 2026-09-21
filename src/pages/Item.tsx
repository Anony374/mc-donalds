import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Item() {
  const { id } = useParams();

  // Mock item data
  const item = {
    name: "Big Mac®",
    desc: "Mouthwatering perfection starts with two 100% pure beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It's topped off with pickles, crisp shredded lettuce, finely chopped onion and American cheese for a 100% beef burger with a taste like no other.",
    cals: "590 Cal.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800&h=600"
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:underline">Home</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <Link to="/menu" className="hover:underline">Menu</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-gray-900 font-medium">{item.name}</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 w-full bg-gray-50 rounded-3xl p-8 flex items-center justify-center">
          <img src={item.img} alt={item.name} className="w-full max-w-md object-cover rounded-2xl shadow-xl" referrerPolicy="no-referrer" />
        </div>
        
        <div className="flex-1 w-full">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{item.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{item.cals}</p>
          <p className="text-gray-800 leading-relaxed mb-8">{item.desc}</p>
          
          <button className="w-full md:w-auto bg-[#FFC72C] hover:bg-[#ffb700] text-black font-bold px-12 py-4 rounded-full text-lg transition-colors shadow-sm">
            Order Now
          </button>
          
          <div className="mt-12 pt-8 border-t">
            <h3 className="font-bold text-xl mb-4">Nutritional Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-gray-500 mb-1">Total Fat</p>
                <p className="font-bold text-lg">34g</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-gray-500 mb-1">Total Carbs</p>
                <p className="font-bold text-lg">46g</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-gray-500 mb-1">Protein</p>
                <p className="font-bold text-lg">25g</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-gray-500 mb-1">Sodium</p>
                <p className="font-bold text-lg">1050mg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Category() {
  const { category } = useParams();
  
  // Mock items
  const items = [
    { id: 1, name: "Big Mac®", cals: "590 Cal.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400&h=300" },
    { id: 2, name: "Quarter Pounder® with Cheese", cals: "520 Cal.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400&h=300" },
    { id: 3, name: "Double Quarter Pounder® with Cheese", cals: "740 Cal.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400&h=300" },
    { id: 4, name: "Cheeseburger", cals: "300 Cal.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400&h=300" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <nav className="flex items-center text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:underline">Home</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <Link to="/menu" className="hover:underline">Menu</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-gray-900 font-medium capitalize">{category?.replace('-', ' ')}</span>
      </nav>

      <h1 className="text-4xl font-black mb-8 capitalize">{category?.replace('-', ' ')}</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <Link to={`/item/${item.id}`} key={item.id} className="group block">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <img src={item.img} alt={item.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg group-hover:text-[#DA291C] transition-colors mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.cals}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

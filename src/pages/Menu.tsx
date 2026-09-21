import { Link } from 'react-router-dom';

const categories = [
  { id: 'burgers', name: 'Burgers', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 'chicken', name: 'Chicken & Fish Sandwiches', img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 'nuggets', name: 'McNuggets® and Meals', img: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 'fries', name: 'Fries & Sides', img: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 'breakfast', name: 'Breakfast', img: 'https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 'mccafe', name: 'McCafé® Bakery', img: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 'sweets', name: 'Sweets & Treats', img: 'https://images.unsplash.com/photo-1563805042-7684c8a9e9cb?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 'beverages', name: 'Beverages', img: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&q=80&w=400&h=300' },
];

export default function Menu() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black mb-8">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link to={`/menu/${cat.id}`} key={cat.id} className="group block">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <img src={cat.img} alt={cat.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg group-hover:text-[#DA291C] transition-colors">{cat.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

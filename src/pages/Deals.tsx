import { Link } from 'react-router-dom';

const deals = [
  { id: 1, title: 'Free Fries Friday', desc: 'Get free medium Fries with any $1 minimum purchase, only in the app.', img: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 2, title: '$1 Any Size Coffee', desc: 'Start your morning right with a $1 any size Premium Roast Coffee or Iced Coffee.', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 3, title: '20% Off Any Order', desc: 'Get 20% off your entire order when you use the app. Valid once per day.', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400&h=300' },
];

export default function Deals() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-black mb-4">Exclusive Deals</h1>
        <p className="text-xl text-gray-600">Download the McDonald's app to unlock these exclusive offers and start earning points on every order.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
            <img src={deal.img} alt={deal.title} className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-bold text-2xl mb-2">{deal.title}</h3>
              <p className="text-gray-600 mb-6 flex-1">{deal.desc}</p>
              <Link to="/app" className="block text-center bg-[#DA291C] hover:bg-red-700 text-white font-bold py-3 rounded-full transition-colors">
                Get Deal in App
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { MapPin, Search } from 'lucide-react';

export default function Locator() {
  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="bg-white border-b p-4 shadow-sm z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <h1 className="text-2xl font-bold">Find a McDonald's</h1>
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Zip, City, or State" 
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#DA291C] focus:ring-1 focus:ring-[#DA291C]"
            />
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-96 bg-white border-r overflow-y-auto p-4 flex flex-col gap-4">
          {[1, 2, 3].map((store) => (
            <div key={store} className="border rounded-xl p-4 hover:border-[#DA291C] cursor-pointer transition-colors">
              <h3 className="font-bold text-lg mb-1">McDonald's</h3>
              <p className="text-gray-600 text-sm mb-2">123 Main St, Cityville, ST 12345</p>
              <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> Open Now
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 py-2 rounded-full text-sm font-medium transition-colors">Directions</button>
                <button className="flex-1 bg-[#FFC72C] hover:bg-[#ffb700] py-2 rounded-full text-sm font-medium transition-colors">Order Here</button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Map Area */}
        <div className="flex-1 bg-gray-200 relative flex items-center justify-center">
          <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1600&h=900')] bg-cover bg-center"></div>
          <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl text-center max-w-sm mx-4">
            <MapPin className="w-12 h-12 text-[#DA291C] mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Interactive Map</h2>
            <p className="text-gray-600">Enter your location to find the nearest McDonald's restaurants.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

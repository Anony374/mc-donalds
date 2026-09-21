import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Category from './pages/Category';
import Item from './pages/Item';
import Deals from './pages/Deals';
import Order from './pages/Order';
import Locator from './pages/Locator';
import AppDownload from './pages/AppDownload';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:category" element={<Category />} />
            <Route path="/item/:id" element={<Item />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/order" element={<Order />} />
            <Route path="/locator" element={<Locator />} />
            <Route path="/app" element={<AppDownload />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white pt-12 pb-8 border-t">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:underline">Our History</Link></li>
              <li><Link to="#" className="hover:underline">Leadership Team</Link></li>
              <li><Link to="#" className="hover:underline">Values In Action</Link></li>
              <li><Link to="#" className="hover:underline">Investor Relations</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Careers</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:underline">Education Opportunities</Link></li>
              <li><Link to="#" className="hover:underline">Employee Perks</Link></li>
              <li><Link to="#" className="hover:underline">Meet Our People</Link></li>
              <li><Link to="#" className="hover:underline">Apply Now</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:underline">Wi-Fi</Link></li>
              <li><Link to="#" className="hover:underline">Gift Cards</Link></li>
              <li><Link to="#" className="hover:underline">PlayPlaces & Parties</Link></li>
              <li><Link to="#" className="hover:underline">McDelivery®</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:underline">Ronald McDonald House</Link></li>
              <li><Link to="#" className="hover:underline">HACER® Scholarships</Link></li>
              <li><Link to="#" className="hover:underline">Black & Positively Golden</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t text-xs text-gray-500 gap-4">
          <div className="flex gap-4">
            <Link to="#" className="hover:underline">Privacy Policy</Link>
            <Link to="#" className="hover:underline">Terms & Conditions</Link>
            <Link to="#" className="hover:underline">Accessibility</Link>
          </div>
          <p>© 2026 McDonald's. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

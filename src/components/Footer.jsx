import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Jandiyal Printing Press</h3>
            <p className="text-gray-300 mb-4">
              Professional printing services including offset, digital, and screen printing solutions for businesses and individuals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FiFacebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FiInstagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FiTwitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FiLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#offset" className="text-gray-300 hover:text-white">
                  Offset Printing
                </Link>
              </li>
              <li>
                <Link to="/services#digital" className="text-gray-300 hover:text-white">
                  Digital Printing
                </Link>
              </li>
              <li>
                <Link to="/services#screen" className="text-gray-300 hover:text-white">
                  Screen Printing
                </Link>
              </li>
              <li>
                <Link to="/services#design" className="text-gray-300 hover:text-white">
                  Design Services
                </Link>
              </li>
              <li>
                <Link to="/services#finishing" className="text-gray-300 hover:text-white">
                  Finishing Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 flex-shrink-0" />
                <span>Mohinder Nagar, Canal Road, Jammu, J&K 180016</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3 flex-shrink-0" />
                <span>0191-2553140</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3 flex-shrink-0" />
                <span>jandiyalprintingpress@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Jandiyal Printing Press. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
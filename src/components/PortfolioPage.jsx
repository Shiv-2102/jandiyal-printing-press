import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import useSEO from '../hooks/useSEO';

const PortfolioPage = () => {

  //useSEO
  useSEO({
    title: "Jandiyal Printing Press - High Quality Offset Printing Services in Jammu",
    description: "Get professional offset, digital, and screen printing services in Jammu. Fast turnaround and exceptional quality for all your business printing needs.",
    keywords: "printing services Jammu, offset printing, digital printing, screen printing, printing press Jammu, business cards, wedding cards, brochures, catalogs, banners, posters, packaging"
  });

  // Portfolio categories
  const categories = [
    'All',
    'Offset Printing',
    'Digital Printing',
    'Screen Printing',
    'Packaging',
    'Branding'
  ];

  // Portfolio items with sample data
  const portfolioItems = [
    {
      id: 1,
      title: 'Corporate Brochure',
      category: 'Offset Printing',
      image: 'https://via.placeholder.com/600x400?text=Corporate+Brochure',
      description: 'High-quality offset printed brochure for a financial services company featuring custom photography and premium paper stock.'
    },
    {
      id: 2,
      title: 'Event Posters',
      category: 'Digital Printing',
      image: 'https://via.placeholder.com/600x400?text=Event+Posters',
      description: 'Series of vibrant digital printed posters for a music festival with quick turnaround time.'
    },
    {
      id: 3,
      title: 'Company T-Shirts',
      category: 'Screen Printing',
      image: 'https://via.placeholder.com/600x400?text=Company+T-Shirts',
      description: 'Custom screen printed company t-shirts with multi-color logo for team building event.'
    },
    {
      id: 4,
      title: 'Product Packaging',
      category: 'Packaging',
      image: 'https://via.placeholder.com/600x400?text=Product+Packaging',
      description: 'Innovative packaging solution for a cosmetics brand featuring die-cutting and spot UV coating.'
    },
    {
      id: 5,
      title: 'Restaurant Menu',
      category: 'Digital Printing',
      image: 'https://via.placeholder.com/600x400?text=Restaurant+Menu',
      description: 'Durable laminated menus with high-quality food photography for an upscale restaurant.'
    },
    {
      id: 6,
      title: 'Corporate Stationery',
      category: 'Offset Printing',
      image: 'https://via.placeholder.com/600x400?text=Corporate+Stationery',
      description: 'Complete business stationery package including letterheads, envelopes, and business cards.'
    },
    {
      id: 7,
      title: 'Promotional Tote Bags',
      category: 'Screen Printing',
      image: 'https://via.placeholder.com/600x400?text=Promotional+Totes',
      description: 'Eco-friendly canvas tote bags with durable screen printed designs for a retail promotion.'
    },
    {
      id: 8,
      title: 'Brand Identity Package',
      category: 'Branding',
      image: 'https://via.placeholder.com/600x400?text=Brand+Identity',
      description: 'Comprehensive brand identity package including logo design, business cards, and letterhead.'
    },
    {
      id: 9,
      title: 'Product Catalog',
      category: 'Offset Printing',
      image: 'https://via.placeholder.com/600x400?text=Product+Catalog',
      description: 'Detailed product catalog with high-quality photography and specifications for a manufacturing company.'
    }
  ];

  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter items based on selected category
  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  // Handle category filter change
  const handleFilterChange = (category) => {
    setFilter(category);
  };

  // Handle portfolio item click
  const openItemDetails = (item) => {
    setSelectedItem(item);
  };

  // Close item detail modal
  const closeItemDetails = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      {/* Page Header */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our collection of high-quality printing projects we've completed for our valued clients.
          </p>
        </div>
      </div>

      {/* Filter Categories */}
      <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  filter === category
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors duration-200`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  onClick={() => openItemDetails(item)}
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl text-gray-600">
                No projects found in this category. Please check back later.
              </h3>
            </div>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={closeItemDetails}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 30 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <button
                  onClick={closeItemDetails}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{selectedItem.title}</h2>
                  <span className="bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded">
                    {selectedItem.category}
                  </span>
                </div>
                <p className="text-gray-700 mb-6">{selectedItem.description}</p>
                
                <div className="border-t pt-6 mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="font-medium w-32">Client:</span>
                      <span>Sample Client</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium w-32">Materials:</span>
                      <span>Premium 100lb Gloss Paper</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium w-32">Techniques:</span>
                      <span>4-Color Process, Spot UV Coating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium w-32">Timeline:</span>
                      <span>2 Weeks</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center bg-blue-700 text-white hover:bg-blue-800 font-medium py-2 px-6 rounded-md transition-colors"
                  >
                    Request Similar Project
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Want Quality Results Like These?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Our team is ready to help bring your printing project to life with the same attention to detail and quality.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md shadow-md transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
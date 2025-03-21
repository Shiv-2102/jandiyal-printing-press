import { Link } from 'react-router-dom';
import { FiPrinter, FiMonitor, FiLayers } from 'react-icons/fi';
import { motion } from 'framer-motion';

import useSEO from '../hooks/useSEO';

const HomePage = () => {
   //useSEO
   useSEO({
    title: "Jandiyal Printing Press - High Quality Offset Printing Services in Jammu",
    description: "Get professional offset, digital, and screen printing services in Jammu. Fast turnaround and exceptional quality for all your business printing needs.",
    keywords: "printing services Jammu, offset printing, digital printing, screen printing, printing press Jammu, business cards, wedding cards, brochures, catalogs, banners, posters, packaging"
  });

  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      company: 'ABC Corporation',
      text: 'The quality of printing exceeded our expectations. Our marketing materials look professional and have made a significant impact on our brand presentation.',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'Local Bistro',
      text: 'Fast turnaround and excellent customer service. The menu cards and promotional materials were delivered ahead of schedule and looked fantastic.',
    },
    {
      id: 3,
      name: 'Michael Brown',
      company: 'Tech Innovations',
      text: 'The attention to detail in our product catalogs was impressive. Colors were vibrant and consistent across all materials.',
    },
  ];

  // Sample recent projects
  const recentProjects = [
    {
      id: 1,
      title: 'Corporate Brochure',
      category: 'Offset Printing',
      image: 'https://via.placeholder.com/600x400?text=Corporate+Brochure',
    },
    {
      id: 2,
      title: 'Event Banners',
      category: 'Large Format',
      image: 'https://via.placeholder.com/600x400?text=Event+Banners',
    },
    {
      id: 3,
      title: 'Product Packaging',
      category: 'Digital Printing',
      image: 'https://via.placeholder.com/600x400?text=Product+Packaging',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Premium Printing Solutions for Your Business
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We provide high-quality offset, digital, and screen printing services
              tailored to your specific needs.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="bg-white text-blue-800 hover:bg-gray-100 font-medium py-3 px-6 rounded-md shadow-md transition duration-300"
              >
                Get a Quote
              </Link>
              <Link
                to="/services"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white font-medium py-3 px-6 rounded-md transition duration-300"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Printing Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              High-quality printing solutions for all your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Offset Printing */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-800 mb-6">
                <FiPrinter className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Offset Printing</h3>
              <p className="text-gray-600 mb-6">
                High-volume, high-quality printing ideal for brochures, catalogs, 
                books, and marketing materials with consistent color reproduction.
              </p>
              <Link
                to="/services#offset"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </Link>
            </motion.div>

            {/* Digital Printing */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-800 mb-6">
                <FiMonitor className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Digital Printing</h3>
              <p className="text-gray-600 mb-6">
                Quick turnaround for small to medium runs, variable data printing, 
                and on-demand printing with no minimum order quantity.
              </p>
              <Link
                to="/services#digital"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </Link>
            </motion.div>

            {/* Screen Printing */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-800 mb-6">
                <FiLayers className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Screen Printing</h3>
              <p className="text-gray-600 mb-6">
                Perfect for textiles, signage, displays, and specialty items with 
                vibrant colors and durability for both indoor and outdoor use.
              </p>
              <Link
                to="/services#screen"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Recent Projects</h2>
            <p className="mt-4 text-lg text-gray-600">
              Check out some of our latest printing work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProjects.map((project) => (
              <motion.div 
                key={project.id}
                className="group relative overflow-hidden rounded-lg shadow-md"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md transition duration-300"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-gray-600">
              Hear from businesses that have worked with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Printing Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free quote and consultation about your printing needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md shadow-md transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
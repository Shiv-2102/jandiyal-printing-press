import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiPrinter, FiMonitor, FiLayers, FiEdit, FiPackage } from 'react-icons/fi';

import useSEO from '../hooks/useSEO';

// Import images
import offsetPrintingImg from '../assets/offsetPrinting.jpg';
import digitalPrintingImg from '../assets/digitalPrinting.jpg';
import screenPrintingImg from '../assets/screenPrinting.jpeg';
import designServicesImg from '../assets/designServices.jpg';
import finishingSolutionsImg from '../assets/finishingSolutions.jpg';

const ServicesPage = () => {

  //useSEO
  useSEO({
    title: "Jandiyal Printing Press - High Quality Offset Printing Services in Jammu",
    description: "Get professional offset, digital, and screen printing services in Jammu. Fast turnaround and exceptional quality for all your business printing needs.",
    keywords: "printing services Jammu, offset printing, digital printing, screen printing, printing press Jammu, business cards, wedding cards, brochures, catalogs, banners, posters, packaging"
  });

  const location = useLocation();
  const offsetRef = useRef(null);
  const digitalRef = useRef(null);
  const screenRef = useRef(null);
  const designRef = useRef(null);
  const finishingRef = useRef(null);

  useEffect(() => {
    // Handle anchor links from URL hash
    if (location.hash) {
      const targetRef = {
        '#offset': offsetRef,
        '#digital': digitalRef,
        '#screen': screenRef,
        '#design': designRef,
        '#finishing': finishingRef
      }[location.hash];

      if (targetRef && targetRef.current) {
        // Add a small delay to ensure DOM is fully loaded
        setTimeout(() => {
          targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Common animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const ServiceCard = ({ icon: Icon, title, description, features, applications, id, reference, image }) => (
    <motion.section
      id={id}
      ref={reference}
      className="py-16 border-b border-gray-200 last:border-b-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeIn}>
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-800 mb-6">
              <Icon className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
            <p className="text-lg text-gray-700 mb-8">{description}</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Features & Benefits:</h3>
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ideal Applications:</h3>
            <ul className="space-y-3">
              {applications.map((application, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-700">{application}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="rounded-lg overflow-hidden shadow-xl"
            variants={fadeIn}
          >
            <div className="aspect-[7/6] w-full"> {/* Fixed aspect ratio container */}
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.target.src = `https://via.placeholder.com/600x450?text=${title.replace(' ', '+')}`;
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );

  return (
    <div>
      {/* Page Header */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Printing Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We offer a comprehensive range of high-quality printing solutions to meet all your business needs.
          </p>
        </div>
      </div>

      {/* Services Navigation */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto py-4 space-x-8">
            <a 
              href="#offset" 
              className="text-gray-700 hover:text-blue-700 whitespace-nowrap px-1 py-2 font-medium"
            >
              Offset Printing
            </a>
            <a 
              href="#digital" 
              className="text-gray-700 hover:text-blue-700 whitespace-nowrap px-1 py-2 font-medium"
            >
              Digital Printing
            </a>
            <a 
              href="#screen" 
              className="text-gray-700 hover:text-blue-700 whitespace-nowrap px-1 py-2 font-medium"
            >
              Screen Printing
            </a>
            <a 
              href="#design" 
              className="text-gray-700 hover:text-blue-700 whitespace-nowrap px-1 py-2 font-medium"
            >
              Design Services
            </a>
            <a 
              href="#finishing" 
              className="text-gray-700 hover:text-blue-700 whitespace-nowrap px-1 py-2 font-medium"
            >
              Finishing Solutions
            </a>
          </nav>
        </div>
      </div>

      {/* Services Content */}
      <div className="bg-white">
        <ServiceCard
          id="offset"
          reference={offsetRef}
          icon={FiPrinter}
          title="Offset Printing"
          description="Offset printing delivers exceptional quality and is ideal for high-volume print runs. It works by transferring ink from a plate to a rubber blanket, then onto the printing surface, ensuring consistent, high-quality results."
          features={[
            "Superior image quality with sharp details and accurate color reproduction",
            "Cost-effective for large volume printing runs",
            "Versatile application on various paper stocks and materials",
            "Consistent color throughout the entire print run",
            "Durable and long-lasting results"
          ]}
          applications={[
            "Business cards, letterheads, and corporate stationery",
            "Brochures, catalogs, and magazines",
            "Books and booklets",
            "Posters and marketing materials",
            "Product packaging and labels"
          ]}
          image={offsetPrintingImg}
        />

        <ServiceCard
          id="digital"
          reference={digitalRef}
          icon={FiMonitor}
          title="Digital Printing"
          description="Digital printing offers quick turnaround times and cost-effectiveness for smaller print runs. Using digital files directly, it eliminates the need for printing plates, making it perfect for on-demand and variable data printing needs."
          features={[
            "Rapid turnaround times - often same or next day delivery",
            "Cost-effective for small to medium print runs",
            "Variable data printing capabilities for personalization",
            "No minimum order requirements",
            "High-quality results on a variety of media"
          ]}
          applications={[
            "Personalized direct mail campaigns",
            "Short-run booklets and catalogs",
            "Business cards and promotional materials",
            "Custom invitations and greeting cards",
            "Prototypes and samples"
          ]}
          image={digitalPrintingImg}
        />

        <ServiceCard
          id="screen"
          reference={screenRef}
          icon={FiLayers}
          title="Screen Printing"
          description="Screen printing excels at producing vibrant, durable prints on various materials. By pushing ink through a mesh screen onto the substrate, this technique creates bold, long-lasting impressions that withstand frequent handling and exposure."
          features={[
            "Vibrant, opaque colors even on dark materials",
            "Durable prints that resist fading and wear",
            "Special effects including metallic, glitter, and raised textures",
            "Suitable for various materials including textiles, plastics, and metals",
            "Cost-effective for medium to large runs"
          ]}
          applications={[
            "T-shirts, hoodies, and other apparel",
            "Promotional products and merchandise",
            "Banners and signage",
            "Point-of-purchase displays",
            "Industrial applications requiring durability"
          ]}
          image={screenPrintingImg}
        />

        <ServiceCard
          id="design"
          reference={designRef}
          icon={FiEdit}
          title="Design Services"
          description="Our professional design services help bring your ideas to life with visually appealing, brand-consistent graphics and layouts. Our experienced designers work closely with you to create print-ready artwork that effectively communicates your message."
          features={[
            "Professional graphic design by experienced designers",
            "Brand consistency across all materials",
            "Print-optimized layouts and graphics",
            "Collaborative design process with revisions",
            "Expertise in both digital and print design requirements"
          ]}
          applications={[
            "Logo design and brand identity",
            "Marketing collateral and promotional materials",
            "Packaging design and product labels",
            "Publication layout and typography",
            "Custom illustrations and infographics"
          ]}
          image={designServicesImg}
        />

        <ServiceCard
          id="finishing"
          reference={finishingRef}
          icon={FiPackage}
          title="Finishing Solutions"
          description="Our comprehensive finishing services add professional touches to your printed materials. From binding and lamination to die-cutting and embossing, we provide the final details that elevate your prints and make them stand out."
          features={[
            "Wide range of finishing options in-house",
            "Professional results that enhance durability",
            "Creative techniques to increase visual impact",
            "Quality control throughout the finishing process",
            "Expert advice on suitable finishes for your project"
          ]}
          applications={[
            "Binding for books, catalogs, and reports",
            "Lamination for durability and protection",
            "Die-cutting for custom shapes and designs",
            "Foil stamping and embossing for elegant effects",
            "Folding, perforating, and scoring for functional materials"
          ]}
          image={finishingSolutionsImg}
        />
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Printing Project?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Contact us today for a consultation about your specific printing needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-700 text-white hover:bg-blue-800 font-medium py-3 px-8 rounded-md shadow-md transition duration-300"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
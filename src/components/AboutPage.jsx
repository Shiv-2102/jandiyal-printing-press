import { motion } from 'framer-motion';
import { FiPrinter, FiUsers, FiAward, FiClipboard } from 'react-icons/fi';

import useSEO from '../hooks/useSEO';

const AboutPage = () => {

  //useSEO
  useSEO({
    title: "Jandiyal Printing Press - High Quality Offset Printing Services in Jammu",
    description: "Get professional offset, digital, and screen printing services in Jammu. Fast turnaround and exceptional quality for all your business printing needs.",
    keywords: "printing services Jammu, offset printing, digital printing, screen printing, printing press Jammu, business cards, wedding cards, brochures, catalogs, banners, posters, packaging"
  });

  // Company stats
  const stats = [
    { 
      icon: FiPrinter, 
      value: '15+', 
      label: 'Years Experience', 
      description: 'Providing quality printing services'
    },
    { 
      icon: FiUsers, 
      value: '2,500+', 
      label: 'Happy Clients', 
      description: 'Trusted by businesses and individuals'
    },
    { 
      icon: FiAward, 
      value: '50+', 
      label: 'Industry Awards', 
      description: 'Recognized for excellence in printing'
    },
    { 
      icon: FiClipboard, 
      value: '10,000+', 
      label: 'Projects Completed', 
      description: 'Delivering quality prints on time'
    }
  ];

  // Team members
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'Founder & CEO',
      bio: 'With over 20 years of experience in the printing industry, John founded the company with a vision to provide exceptional quality printing services to businesses of all sizes.',
      image: 'https://via.placeholder.com/300x300?text=John+Smith'
    },
    {
      name: 'Sarah Johnson',
      position: 'Production Manager',
      bio: 'Sarah oversees all production processes, ensuring that every project meets our high-quality standards and is delivered on time. Her attention to detail is unmatched.',
      image: 'https://via.placeholder.com/300x300?text=Sarah+Johnson'
    },
    {
      name: 'Michael Brown',
      position: 'Lead Designer',
      bio: 'Michael brings creative vision to every project, helping clients transform their ideas into stunning visual designs that effectively communicate their message.',
      image: 'https://via.placeholder.com/300x300?text=Michael+Brown'
    },
    {
      name: 'Emily Davis',
      position: 'Client Relations Manager',
      bio: 'Emily ensures that each client receives personalized attention and support throughout their project, from initial consultation to final delivery.',
      image: 'https://via.placeholder.com/300x300?text=Emily+Davis'
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                About Our Printing Business
              </motion.h1>
              <motion.p 
                className="text-xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We're passionate about delivering exceptional printing solutions that help businesses communicate effectively and make lasting impressions.
              </motion.p>
            </div>
            <motion.div
              className="rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://via.placeholder.com/600x400?text=Printing+Shop" 
                alt="Our Printing Shop" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact by the Numbers</h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-blue-700 mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-xl font-medium mb-2">{stat.label}</p>
                <p className="text-blue-100">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="rounded-lg overflow-hidden shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img 
                src="https://via.placeholder.com/600x400?text=Company+History" 
                alt="Company History" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Established with a Passion for Quality
              </h3>
              <p className="text-gray-700 mb-4">
                Founded in 1987, our printing business began with a simple mission: to provide high-quality printing services with exceptional customer care. What started as a small shop with just two printing machines has grown into a full-service printing company equipped with state-of-the-art technology.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we've continuously invested in the latest printing equipment and technologies to offer our clients the best possible results. Our dedicated team has expanded, bringing together experts in offset, digital, and screen printing techniques.
              </p>
              <p className="text-gray-700">
                Today, we're proud to serve businesses of all sizes, from local startups to established corporations, helping them create impactful printed materials that effectively communicate their message and reinforce their brand identity.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              These core principles guide everything we do and help us deliver exceptional service to our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Excellence</h3>
              <p className="text-gray-700">
                We're committed to delivering the highest quality printing for every project, regardless of size. Our rigorous quality control ensures that every print meets or exceeds industry standards.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Reliability & Timeliness</h3>
              <p className="text-gray-700">
                We understand the importance of deadlines in business. Our streamlined processes ensure on-time delivery without compromising on quality, so you can rely on us for all your printing needs.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation & Adaptation</h3>
              <p className="text-gray-700">
                We continually invest in the latest printing technologies and techniques to provide our clients with innovative solutions that meet their evolving needs in today's fast-paced business environment.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Equipment Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Equipment</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We've invested in state-of-the-art printing technology to deliver exceptional quality and efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img 
                src="https://via.placeholder.com/600x400?text=Offset+Printing+Machine" 
                alt="Offset Printing Machine" 
                className="w-full h-48 object-cover rounded-md mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Heidelberg Speedmaster</h3>
              <p className="text-gray-700">
                Our high-performance offset printing press delivers exceptional color consistency and fine details for premium print materials.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img 
                src="https://via.placeholder.com/600x400?text=Digital+Printing+Machine" 
                alt="Digital Printing Machine" 
                className="w-full h-48 object-cover rounded-md mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Canon imagePRESS</h3>
              <p className="text-gray-700">
                Our digital press enables quick turnaround times with vibrant colors and precise text for short and medium print runs.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img 
                src="https://via.placeholder.com/600x400?text=Large+Format+Printer" 
                alt="Large Format Printer" 
                className="w-full h-48 object-cover rounded-md mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">HP Latex Printer</h3>
              <p className="text-gray-700">
                Our wide-format printer produces stunning banners, posters, and signage with environmentally friendly water-based inks.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our skilled professionals are dedicated to delivering exceptional printing services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-700 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Contact our team today to discuss your printing project and discover how we can help bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md shadow-md transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
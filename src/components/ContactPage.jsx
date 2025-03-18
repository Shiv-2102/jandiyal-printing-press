import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    service: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
    loading: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFormStatus({
      ...formStatus,
      loading: true
    });
    
    // Your EmailJS service ID, template ID, and public key
    const serviceId = 'service_ip3pdt4';
    const templateId = 'template_qweuvdo';
    const publicKey = 'vAid3qpTasWUHY7wY';
    
    // Send the form data to your email
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you for your message! We will get back to you shortly.',
          loading: false
        });
        
        // Reset form
        setFormData({
          user_name: '',
          user_email: '',
          user_phone: '',
          service: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        setFormStatus({
          submitted: true,
          error: true,
          message: 'There was an error sending your message. Please try again later.',
          loading: false
        });
      });
  };

  // Contact information
  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Our Location',
      details: [
        'Jandiyal Printing Press',
        'Jammu, J&K 180001',
        'India'
      ]
    },
    {
      icon: FiPhone,
      title: 'Phone Numbers',
      details: [
        'Main: (123) 456-7890',
        'Sales: (123) 456-7891',
        'Support: (123) 456-7892'
      ]
    },
    {
      icon: FiMail,
      title: 'Email Us',
      details: [
        'info@jandiyalprinting.com',
        'sales@jandiyalprinting.com',
        'support@jandiyalprinting.com'
      ]
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 3:00 PM',
        'Sunday: Closed'
      ]
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
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions about our printing services? We're here to help. Reach out to us using any of the methods below.
          </p>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700 mb-6">
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
                <ul className="space-y-2 text-gray-700">
                  {info.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              id="contact-form"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {formStatus.submitted && (
                <div className={`mb-6 p-4 rounded-md ${formStatus.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form ref={form} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="user_name" className="block text-gray-700 font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="user_email" className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="user_phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="user_phone"
                      name="user_phone"
                      value={formData.user_phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a service</option>
                      <option value="Offset Printing">Offset Printing</option>
                      <option value="Digital Printing">Digital Printing</option>
                      <option value="Screen Printing">Screen Printing</option>
                      <option value="Design Services">Design Services</option>
                      <option value="Finishing Solutions">Finishing Solutions</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white font-medium py-3 px-6 rounded-md hover:bg-blue-800 transition-colors"
                  disabled={formStatus.loading}
                >
                  {formStatus.loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Map and Direct Contact */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>
              
              {/* Google Maps Embed */}
              <div className="aspect-video bg-gray-200 rounded-lg mb-8 overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.5257351422924!2d74.84418537625098!3d32.72522798662998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e84f407a507ad%3A0x196eedca9af60b83!2sJandiyal%20Printing%20Press!5e0!3m2!1sen!2sin!4v1741883491165!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jandiyal Printing Press Location"
                ></iframe>
              </div>
              
              {/* Direct Contact Info */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Direct Contact</h3>
                <p className="text-gray-700 mb-4">
                  For urgent inquiries or to speak directly with our team, please call us or send an email. We aim to respond to all inquiries within 24 hours during business days.
                </p>
                <div className="flex items-center text-blue-700 font-medium">
                  <FiPhone className="mr-2" />
                  <span>(123) 456-7890</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-700">
              Find quick answers to common questions about our printing services.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What are your typical turnaround times?
              </h3>
              <p className="text-gray-700">
                Turnaround times vary depending on the project complexity, quantity, and chosen printing method. Digital printing typically takes 2-3 business days, while offset printing may require 5-7 business days. Rush services are available for an additional fee.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer design services if I don't have print-ready files?
              </h3>
              <p className="text-gray-700">
                Yes, our in-house design team can create custom designs or help optimize your existing files for printing. We offer a range of design services from simple layout adjustments to complete creative development.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What file formats do you accept for printing?
              </h3>
              <p className="text-gray-700">
                We accept most standard file formats including PDF, AI, PSD, INDD, JPG, and TIFF. For the best results, we recommend high-resolution PDF files with fonts embedded and at least 0.125" bleed on all sides.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can I get samples of paper stocks and finishes before ordering?
              </h3>
              <p className="text-gray-700">
                Absolutely! We offer sample kits that include various paper stocks, finishes, and printing techniques. Contact us to request a sample kit or visit our location to see and feel the options in person.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Printing Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Whether you have a specific project in mind or need guidance, our team is here to help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:1234567890"
              className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md shadow-md transition-colors"
            >
              Call Us Now
            </a>
            <a
              href="#contact-form"
              className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
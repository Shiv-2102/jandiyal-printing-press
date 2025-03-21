// src/hooks/useSEO.js
import { useEffect } from 'react';

const useSEO = ({ 
  title = "Jandiyal Printing Press - Professional Printing Services in Jammu",
  description = "Professional offset, digital, and screen printing services in Jammu.",
  keywords = "printing services, offset printing, digital printing, Jammu, printing press, box printing, printing press jammu"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
  }, [title, description, keywords]);
  
  const updateMetaTag = (name, content) => {
    let metaTag = document.querySelector(`meta[name="${name}"]`);
    
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.name = name;
      document.head.appendChild(metaTag);
    }
    
    metaTag.content = content;
  };
};

export default useSEO;
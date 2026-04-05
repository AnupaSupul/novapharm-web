import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
  return (
    <motion.div 
      className="loader-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <div className="loader-content">
        <div className="loader-logo-wrapper">
          <motion.div 
            className="loader-logo-ring"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img 
            src="/images/loagingLogo.png" 
            alt="NovaPharm" 
            className="loader-logo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          />
        </div>

      </div>
    </motion.div>
  );
};

export default Loader;

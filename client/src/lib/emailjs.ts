
import emailjs from '@emailjs/browser';

// EmailJS configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Замените на ваш Service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Замените на ваш Template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Замените на ваш Public Key
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export default emailjs;

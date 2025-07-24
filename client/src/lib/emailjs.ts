
import emailjs from '@emailjs/browser';

// EmailJS configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_ciopubi', // Замените на ваш Service ID
  TEMPLATE_ID: 'template_j8ptywg', // Замените на ваш Template ID
  PUBLIC_KEY: 'jtvSWs54XFYdMzh40', // Замените на ваш Public Key
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export default emailjs;

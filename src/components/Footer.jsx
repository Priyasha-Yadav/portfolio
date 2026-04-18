import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Youtube } from 'lucide-react';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Priyasha-Yadav',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/priyasha-yadav',
      color: 'hover:text-blue-400'
    },
    {
      name: 'LeetCode',
      icon: Code2,
      url: 'https://leetcode.com/u/Priyasha_Yadav/',
      color: 'hover:text-orange-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:priyasha.yadav.cg@gmail.com',
      color: 'hover:text-red-400'
    },
        {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@experimental-coder',
      color: 'hover:text-gray-300'
    },
  ];

  return (
    <footer className="bg-[#08081A] text-white py-6 px-6 border-t border-gray-800/50 mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} Priyasha Yadav
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Visit ${social.name}`}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Mail, Instagram } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className="relative py-12 bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-sm text-zinc-500 font-mono">
              © 2025 Aryan Dhillon. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="mailto:aryan_dhillon21@icloud.com"
              className="p-3 rounded-lg transition-all duration-300 hover:scale-110 bg-zinc-900/50 hover:bg-cyan-900/50 text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-400"
              style={{
                boxShadow: '0 0 10px rgba(34, 211, 238, 0.2)',
              }}
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.instagram.com/aryand_09/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg transition-all duration-300 hover:scale-110 bg-zinc-900/50 hover:bg-orange-900/50 text-orange-400 hover:text-orange-300 border border-orange-500/30 hover:border-orange-400"
              style={{
                boxShadow: '0 0 10px rgba(249, 115, 22, 0.2)',
              }}
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

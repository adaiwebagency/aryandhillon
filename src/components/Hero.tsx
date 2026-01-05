import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();
  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = [
    'Aspiring Technologist',
    'Future Automator',
    'Aquatics & Leadership',
    'Full Stack Developer',
  ];

  const quote = 'Believe you can and you\'re already halfway there.';

  useEffect(() => {
    const chars = quote.split('');
    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex < chars.length) {
        setDisplayText(chars.slice(0, charIndex + 1).join(''));
        charIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4000);

    return () => clearInterval(titleInterval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-gradient-to-br from-zinc-950 via-zinc-900 to-black' : 'bg-gradient-to-br from-zinc-50 via-white to-zinc-100'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse ${isDark ? 'bg-blue-500' : 'bg-blue-300'}`}></div>
        <div className={`absolute bottom-20 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse ${isDark ? 'bg-cyan-500' : 'bg-cyan-300'}`}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-32">
        <div className="mb-16 animate-fade-in-up">
          <div className="w-48 h-48 mx-auto mb-8 rounded-3xl overflow-hidden border-2 border-opacity-20 animate-float"
            style={{
              borderColor: isDark ? '#ffffff' : '#000000',
              boxShadow: isDark
                ? '0 25px 50px -12px rgba(59, 130, 246, 0.3)'
                : '0 25px 50px -12px rgba(59, 130, 246, 0.2)',
            }}
          >
            <img
              src="/src/assets/Profile Picture.jpg"
              alt="Aryan Dhillon"
              className="w-full h-full object-cover object-center"
              style={{
                filter: 'saturate(1.1) brightness(1.05) contrast(1.05)',
              }}
            />
          </div>
        </div>

        <div className="mb-8 min-h-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className={`text-6xl md:text-7xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
            Aryan Dhillon
          </h1>
          <p
            className={`text-2xl md:text-3xl font-light h-10 ${
              isDark ? 'text-blue-300' : 'text-blue-600'
            } transition-all duration-300`}
          >
            {titles[titleIndex]}
          </p>
        </div>

        <div className="mb-12 min-h-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p
            className={`text-xl md:text-2xl font-light leading-relaxed italic ${
              isDark ? 'text-zinc-300' : 'text-zinc-700'
            }`}
          >
            "{displayText}"
          </p>
          <p className={`text-sm mt-2 ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>
            — Theodore Roosevelt
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={scrollToContact}
            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
              isDark
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/50'
                : 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/50'
            }`}
          >
            Let's Connect ✦
          </button>
          <a
            href="#about"
            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 border-2 hover:scale-105 ${
              isDark
                ? 'border-zinc-600 text-zinc-300 hover:border-zinc-400 hover:text-white'
                : 'border-zinc-400 text-zinc-700 hover:border-zinc-600 hover:text-black'
            }`}
          >
            Learn More
          </a>
        </div>

        <div className={`flex flex-col gap-2 text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>
          <p>Driven by curiosity.</p>
          <p>Fuelled by ambition.</p>
          <p>Always learning, always building.</p>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <a href="#about">
          <ChevronDown
            size={32}
            className={`transition-all duration-300 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;

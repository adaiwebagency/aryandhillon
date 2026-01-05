import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../context/ThemeContext';
import { useRef, useEffect, useState } from 'react';

const Testimonials = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollAnimation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Tao Tang',
      role: 'Partner at Trident Consulting',
      text: 'Aryan became a highly impactful member of our team—demonstrating remarkable technical skill, strong architectural thinking, and impressive communication for a developer his age. His initiative, strategic mindset, and ability to deliver production-ready solutions make him an outstanding young software engineer.',
      image: '/src/assets/image.png',
    },
  ];

  const emptySlots = [
    { id: 2, number: '#2' },
    { id: 3, number: '#3' },
    { id: 4, number: '#4' },
    { id: 5, number: '#5' },
  ];

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-6xl md:text-7xl font-black mb-4 text-white tracking-tighter"
            style={{ fontFamily: '"Courier New", monospace' }}
          >
            TESTIMONIALS
          </h2>
          <div className="h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
          style={{ scrollBehavior: 'smooth' }}
        >

          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`flex-shrink-0 w-full md:w-[500px] rounded-2xl p-8 transition-all duration-300 border ${
                isDark
                  ? 'bg-gradient-to-br from-zinc-900/80 to-black border-cyan-500/50'
                  : 'bg-gradient-to-br from-zinc-100 to-white border-cyan-400/50'
              }`}
              style={{
                animation: isVisible ? `slideInHorizontal 0.8s ease-out ${index * 0.2}s forwards` : 'none',
                opacity: isVisible ? 1 : 0,
                boxShadow: isDark ? '0 0 20px rgba(34, 211, 238, 0.2)' : '0 0 20px rgba(34, 211, 238, 0.1)',
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-cyan-400/60"
                  style={{
                    boxShadow: '0 0 15px rgba(34, 211, 238, 0.3)',
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-black'}`}
                    style={{ fontFamily: '"Courier New", monospace' }}
                  >
                    {testimonial.name}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-cyan-400/80' : 'text-cyan-600'}`}
                    style={{ fontFamily: '"Courier New", monospace' }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className={`italic leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                "{testimonial.text}"
              </p>
            </div>
          ))}

          {emptySlots.map((slot) => (
            <div
              key={slot.id}
              className={`flex-shrink-0 w-full md:w-[500px] rounded-3xl p-8 border-2 border-dashed flex items-center justify-center min-h-80 animate-pulse transition-all duration-300 ${
                isDark
                  ? 'border-zinc-700 hover:border-blue-500'
                  : 'border-zinc-400 hover:border-blue-500'
              }`}
            >
              <div className="text-center">
                <p className={`text-lg font-medium mb-2 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                  {slot.number}
                </p>
                <p className={`text-sm ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
                  More testimonials coming soon...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

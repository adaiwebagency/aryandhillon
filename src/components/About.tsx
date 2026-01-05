import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCounterAnimation } from '../hooks/useCounterAnimation';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { label: 'Table Tennis Wins', end: 15 },
    { label: 'Swim Instructor', end: 1 },
    { label: 'Awards Earned', end: 12 },
    { label: 'Hours Volunteered', end: 120 },
    { label: 'Years in Tech', end: 3 },
    { label: 'Clubs & Leadership', end: 8 },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 bg-black"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-6xl md:text-7xl font-black mb-4 text-white tracking-tighter"
            style={{ fontFamily: '"Courier New", monospace' }}
          >
            ABOUT ME
          </h2>
          <div className="h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-orange-500"></div>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div
            className="rounded-2xl p-8 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-zinc-900/50 to-black border border-cyan-500/30 hover:border-cyan-500/60"
            style={{
              boxShadow: '0 0 20px rgba(34, 211, 238, 0.1)',
            }}
          >
            <p className="text-lg leading-relaxed text-zinc-300">
              I'm <span className="font-bold text-cyan-400">Aryan Dhillon</span> — a Grade 11 student at Turner Fenton Secondary School in Ontario, Canada. A <span className="font-semibold text-cyan-300">Full Stack Developer</span> skilled in Python, React.js, and MongoDB. I'm also a certified <span className="font-semibold text-cyan-300">Lifeguard and Swim Instructor</span>, combining technical expertise with hands-on leadership in aquatics.
            </p>
          </div>

          <div
            className="rounded-2xl p-8 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-zinc-900/50 to-black border border-orange-500/30 hover:border-orange-500/60"
            style={{
              boxShadow: '0 0 20px rgba(249, 115, 22, 0.1)',
            }}
          >
            <p className="text-lg leading-relaxed text-zinc-300">
              Beyond development, I'm a table tennis champion, competitive swimmer, dancer, and all-around athlete involved in numerous extracurriculars. My work ranges from building secure web portals with React and Azure to teaching swim lessons and ensuring pool safety. I love technology, problem-solving, storytelling, and building meaningful things. I strive for excellence in everything I do — sports, academics, leadership, creativity, and community.
            </p>
          </div>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 gap-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, isVisible, isDark }: { stat: any; isVisible: boolean; isDark: boolean }) => {
  const count = useCounterAnimation(stat.end, 2000, isVisible);

  return (
    <div
      className="rounded-xl p-6 text-center transition-all duration-300 hover:scale-110 bg-gradient-to-br from-zinc-900/60 to-black border border-cyan-500/30 hover:border-cyan-400"
      style={{
        boxShadow: '0 0 15px rgba(34, 211, 238, 0.1), inset 0 0 15px rgba(34, 211, 238, 0.05)',
      }}
    >
      <div className="text-4xl font-black mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        {count}+
      </div>
      <p className="text-sm font-medium text-cyan-300/80" style={{ fontFamily: '"Courier New", monospace' }}>
        {stat.label}
      </p>
    </div>
  );
};

export default About;

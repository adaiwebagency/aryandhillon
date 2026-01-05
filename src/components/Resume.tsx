import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../context/ThemeContext';
import { Download, Eye } from 'lucide-react';

const Resume = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollAnimation();

  const resumeData = {
    name: 'Aryan Dhillon',
    location: 'Ontario, Canada',
    school: 'Turner Fenton Secondary School (Grade 11)',
    phone: '647-389-3767',
    employement: 'Lifeguard/Swim-Instructor',
    skills: [
      'Communication',
      'Adaptability',
      'Leadership',
      'Athletic Discipline',
      'Creativity',
      'Technology',
    ],
    extras: 'Athlete • Table Tennis Champion • Swimmer • Dancer • Multi-club Leadership',
  };

  return (
    <section
      id="resume"
      ref={ref}
      className="relative py-20 md:py-32 bg-black"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-6xl md:text-7xl font-black mb-4 text-white tracking-tighter"
            style={{ fontFamily: '"Courier New", monospace' }}
          >
            RESUME
          </h2>
          <div className="h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div
            className="md:col-span-2 rounded-3xl p-8 transition-all duration-300 bg-gradient-to-br from-zinc-900/60 to-black border border-blue-500/30 hover:border-blue-400"
            style={{
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.1)',
            }}
          >
            <div className="rounded-2xl overflow-hidden mb-6 bg-white">
              <iframe
                src="/Aryan Dhillon's Resume (November).pdf"
                className="w-full h-[600px]"
                title="Resume PDF"
              />
            </div>

            <div className="flex gap-4 justify-center">
              <a
                href="/Aryan Dhillon's Resume (November).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 ${
                  isDark
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/50'
                    : 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                }`}
              >
                <Eye size={20} />
                View Full Resume
              </a>
              <a
                href="/Aryan Dhillon's Resume (November).pdf"
                download
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 border-2 ${
                  isDark
                    ? 'border-blue-500 text-blue-400 hover:bg-blue-900/30'
                    : 'border-blue-500 text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Download size={20} />
                Download PDF
              </a>
            </div>
          </div>

          <div className={`rounded-3xl p-8 space-y-6 ${isDark ? 'bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700' : 'bg-gradient-to-br from-zinc-50 to-white border border-zinc-300'}`}>
            <div>
              <p className={`text-xs font-medium mb-1 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                NAME
              </p>
              <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                {resumeData.name}
              </p>
            </div>

            <div>
              <p className={`text-xs font-medium mb-1 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                LOCATION
              </p>
              <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {resumeData.location}
              </p>
            </div>

            <div>
              <p className={`text-xs font-medium mb-1 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                SCHOOL
              </p>
              <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {resumeData.school}
              </p>
            </div>

            <div>
              <p className={`text-xs font-medium mb-1 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                PHONE
              </p>
              <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {resumeData.phone}
              </p>
            </div>

           
            <div>
              <p className={`text-xs font-medium mb-2 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                SKILLS
              </p>
        
            </div>

            <div>
      
              <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {resumeData.extras}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

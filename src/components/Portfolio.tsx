import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../context/ThemeContext';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const Portfolio = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollAnimation();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Secure Company Web Portal',
      description: 'Production-ready web portal with modern architecture, secure authentication, and cloud infrastructure.',
      tech: ['ReactJS', 'Tailwind', 'Azure', 'Terraform'],
    },
    {
      id: 2,
      title: 'SOAR Conference Website',
      description: 'Fully custom-coded modern website for student conference with smooth animations and responsive design.',
      tech: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 3,
      title: 'AI Learning Platform',
      description: 'Interactive teaching modules for AI club members to learn ML concepts and cloud technologies.',
      tech: ['Python', 'AWS', 'Machine Learning'],
    },
    {
      id: 4,
      title: 'TurnerHacks Hackathon',
      description: 'Award-winning hackathon project that secured 3rd place with innovative solution.',
      tech: ['React', 'Node.js', 'API'],
    },
  ]);

  const addProject = () => {
    setProjects([
      ...projects,
      {
        id: projects.length + 1,
        title: 'Coming Soon...',
        description: 'New project in development',
        tech: ['?'],
      },
    ]);
  };

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative py-20 md:py-32 bg-black"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/5 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-6xl md:text-7xl font-black mb-4 text-white tracking-tighter"
            style={{ fontFamily: '"Courier New", monospace' }}
          >
            PORTFOLIO
          </h2>
          <div className="h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-green-500 to-cyan-500"></div>
        </div>

        <div className={`grid md:grid-cols-2 gap-6 mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-gradient-to-br from-zinc-900/60 to-black border border-green-500/30 hover:border-green-400"
              style={{
                animation: isVisible ? `slideIn 0.6s ease-out ${index * 0.1}s forwards` : 'none',
                opacity: isVisible ? 1 : 0,
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.1)',
              }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-green-600 to-cyan-600"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">✨</div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors text-white"
                  style={{ fontFamily: '"Courier New", monospace' }}
                >
                  {project.title}
                </h3>

                <p className="mb-4 leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 bg-green-900/50 text-green-300 group-hover:bg-green-800 group-hover:text-green-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div
            onClick={addProject}
            className={`rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer border-2 border-dashed flex items-center justify-center min-h-72 group ${
              isDark
                ? 'border-zinc-700 hover:border-blue-500'
                : 'border-zinc-400 hover:border-blue-500'
            }`}
          >
            <div className="text-center">
              <Plus size={48} className={`mx-auto mb-4 group-hover:scale-110 transition-transform ${isDark ? 'text-zinc-600 group-hover:text-blue-500' : 'text-zinc-400 group-hover:text-blue-500'}`} />
              <p className={`font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Add Project
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

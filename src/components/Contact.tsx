import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../context/ThemeContext';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('aryan_dhillon21@icloud.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = async () => {
    await navigator.clipboard.writeText('6473893767');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 md:py-32 bg-black"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-6xl md:text-7xl font-black mb-4 text-white tracking-tighter"
            style={{ fontFamily: '"Courier New", monospace' }}
          >
            LET'S CONNECT
          </h2>
          <div className="h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
          <p className="mt-4 text-lg text-zinc-400">
            Love to connect with new people ✦
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div
            className="rounded-3xl p-8 transition-all duration-300 bg-gradient-to-br from-zinc-900/60 to-black border border-orange-500/30 hover:border-orange-400"
            style={{
              boxShadow: '0 0 20px rgba(249, 115, 22, 0.1)',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark
                      ? 'bg-zinc-800 text-white border border-zinc-700 focus:border-blue-500'
                      : 'bg-white text-black border border-zinc-300 focus:border-blue-500'
                  }`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark
                      ? 'bg-zinc-800 text-white border border-zinc-700 focus:border-blue-500'
                      : 'bg-white text-black border border-zinc-300 focus:border-blue-500'
                  }`}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    isDark
                      ? 'bg-zinc-800 text-white border border-zinc-700 focus:border-blue-500'
                      : 'bg-white text-black border border-zinc-300 focus:border-blue-500'
                  }`}
                  placeholder="Tell me what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 ${
                  isDark
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/50'
                    : 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                }`}
              >
                <Send size={20} />
                Send Message
              </button>

              {submitted && (
                <div className={`p-4 rounded-lg text-center text-sm font-medium ${isDark ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700'}`}>
                  ✓ Message sent successfully!
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div
              className={`rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700'
                  : 'bg-gradient-to-br from-zinc-100 to-zinc-50 border border-zinc-300'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${isDark ? 'bg-blue-900/50' : 'bg-blue-100'}`}>
                  <Mail size={24} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
                </div>
                <div className="flex-1">
                  <p className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>Email</p>
                  <div className="flex items-center gap-2">
                    <a href="mailto:aryan_dhillon21@icloud.com" className={`transition-colors ${isDark ? 'text-zinc-400 hover:text-blue-400' : 'text-zinc-600 hover:text-blue-600'}`}>
                      aryan_dhillon21@icloud.com
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className={`p-1.5 rounded transition-all duration-200 ${isDark ? 'hover:bg-zinc-700' : 'hover:bg-zinc-200'}`}
                      title="Copy email"
                    >
                      {copiedEmail ? (
                        <Check size={16} className="text-green-500" />
                      ) : (
                        <Copy size={16} className={isDark ? 'text-zinc-500' : 'text-zinc-400'} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700'
                  : 'bg-gradient-to-br from-zinc-100 to-zinc-50 border border-zinc-300'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${isDark ? 'bg-blue-900/50' : 'bg-blue-100'}`}>
                  <Phone size={24} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
                </div>
                <div className="flex-1">
                  <p className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>Phone</p>
                  <div className="flex items-center gap-2">
                    <a href="tel:6473893767" className={`transition-colors ${isDark ? 'text-zinc-400 hover:text-blue-400' : 'text-zinc-600 hover:text-blue-600'}`}>
                      647-389-3767
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className={`p-1.5 rounded transition-all duration-200 ${isDark ? 'hover:bg-zinc-700' : 'hover:bg-zinc-200'}`}
                      title="Copy phone"
                    >
                      {copiedPhone ? (
                        <Check size={16} className="text-green-500" />
                      ) : (
                        <Copy size={16} className={isDark ? 'text-zinc-500' : 'text-zinc-400'} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700'
                  : 'bg-gradient-to-br from-zinc-100 to-zinc-50 border border-zinc-300'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${isDark ? 'bg-blue-900/50' : 'bg-blue-100'}`}>
                  <MapPin size={24} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
                </div>
                <div>
                  <p className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>Location</p>
                  <p className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>Ontario, Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-16 text-center ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>
          <p>Whether you're reaching out for opportunities, collaboration, or just to say hi — I'd love to hear from you.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

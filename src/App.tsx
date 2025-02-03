import React, { useEffect, useState } from 'react';
import { 
  Award, 
  BriefcaseIcon, 
  ChevronUp,
  ClipboardList, 
  Compass, 
  Cpu, 
  Download, 
  Instagram,
  Linkedin, 
  Mail,
  Menu,
  Moon,
  Rocket, 
  Send, 
  Settings, 
  Sun,
  ThumbsUp, 
  Wrench,
  X,
  MessageCircle,
  Gauge,
  Target,
  TrendingUp
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Me', href: '#why-choose-me' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Navbar */}
        <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <a href="#" className="text-2xl font-bold text-blue-600 dark:text-blue-400">MN</a>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-700" />
                  )}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-700" />
                  )}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  ) : (
                    <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
              <div className="container mx-auto px-4 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Header Section */}
        <header 
          className="relative h-screen flex items-center justify-center" 
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2000")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="text-center text-white px-4" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Mary Nyingi</h1>
            <h2 className="text-2xl md:text-3xl mb-8">Transforming Industrial Efficiency Through Engineering Excellence</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Pioneering mechanical solutions that drive innovation, optimize performance, and deliver measurable results in East Africa's leading manufacturing facilities.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition duration-300">
                Transform Your Operations Today
              </button>
              <button className="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-lg transition duration-300 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" /> Download Portfolio
              </button>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2" data-aos="fade-right">
                <img 
                  src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=1000" 
                  alt="Mary Nyingi in industrial setting"
                  className="rounded-lg shadow-lg w-full object-cover h-[500px]"
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2" data-aos="fade-left">
                <h2 className="text-4xl font-bold mb-6 dark:text-white">Engineering Excellence Meets Strategic Vision</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  With over a decade at the forefront of industrial engineering, I've revolutionized operations at East Africa's leading manufacturers. At EABL Kenya, I spearheaded projects that achieved a 35% reduction in maintenance costs and a 25% increase in production efficiency through innovative automation solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  My expertise spans advanced CAD design, structural analysis, and project management, complemented by a proven track record of delivering multi-million dollar projects on time and under budget.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Wrench className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                    <span className="dark:text-gray-300">Precision Engineering</span>
                  </div>
                  <div className="flex items-center">
                    <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                    <span className="dark:text-gray-300">Process Optimization</span>
                  </div>
                  <div className="flex items-center">
                    <BriefcaseIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                    <span className="dark:text-gray-300">Strategic Leadership</span>
                  </div>
                  <div className="flex items-center">
                    <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                    <span className="dark:text-gray-300">Innovation Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Services I Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Compass, title: 'CAD Design & Modeling' },
                { icon: Cpu, title: 'Structural Analysis & Simulation' },
                { icon: ClipboardList, title: 'Project Management & Execution' },
                { icon: Settings, title: 'Industrial System Optimization' },
              ].map((service, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <service.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section id="why-choose-me" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Why Choose Mary Nyingi?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Award, 
                  title: 'Proven Track Record',
                  description: 'Delivered projects for industry giants like EABL Kenya and Coca-Cola Bottling Company.'
                },
                {
                  icon: ThumbsUp,
                  title: 'Client-Focused Approach',
                  description: 'Tailored solutions that meet your unique needs and goals.'
                },
                {
                  icon: Rocket,
                  title: 'Cutting-Edge Expertise',
                  description: 'Proficient in the latest engineering tools and technologies.'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <item.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Transformative Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-up">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1682144502406-80e8eb7e6747?q=80&w=1806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=1000" 
                  alt="EABL Automation Project"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">EABL Production Line Optimization</h3>
                  <div className="flex items-center mb-4">
                    <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">35% Efficiency Increase</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Led the complete overhaul of EABL's main production line, implementing IoT sensors and automated quality control systems that reduced downtime by 40%.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">Automation</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">IoT</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">Process Optimization</span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="100">
                <img 
                  src="https://images.unsplash.com/photo-1581091012184-7e0cdfbb6797?auto=format&fit=crop&q=80&w=1000" 
                  alt="Coca-Cola Equipment Design"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Coca-Cola Bottling Innovation</h3>
                  <div className="flex items-center mb-4">
                    <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">50% Waste Reduction</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Designed and implemented a revolutionary bottling system that reduced material waste by 50% and increased production speed by 25%.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">Equipment Design</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">Sustainability</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">Innovation</span>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="200">
                <img 
                  src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=1000" 
                  alt="Chloride Exide Project"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Chloride Exide Energy Solution</h3>
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">45% Energy Savings</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Developed an energy-efficient manufacturing process that reduced power consumption by 45% while maintaining production output.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">Energy Efficiency</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">Sustainability</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">Process Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-600 dark:bg-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
              <p className="mb-8">Have a project in mind? Let's collaborate to bring your ideas to life. Reach out today!</p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  data-aos="fade-up"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg text-gray-900 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  data-aos="fade-up"
                  data-aos-delay="200"
                />
                <button 
                  type="submit"
                  className="bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 flex items-center justify-center mx-auto"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Send className="w-5 h-5 mr-2" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Mary Nyingi</h3>
                <p className="text-gray-400">Mechanical Engineer & Project Manager</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-pink-400 transition duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-green-400 transition duration-300">
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a href="mailto:contact@marynyingi.com" className="hover:text-red-400 transition duration-300">
                  <Mail className="w-6 h-6" />
                </a>
            
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p>&copy; {new Date().getFullYear()} Mary Nyingi. All Rights Reserved.</p>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 dark:bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 z-50"
            data-aos="fade-up"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
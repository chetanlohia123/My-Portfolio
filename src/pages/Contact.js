import React, { useRef, useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaUser, FaCheckCircle, FaSpinner, FaRocket, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('d7ZSLI9c7ylKA3to5'); // Your public key
  }, []);

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-xl sm:text-2xl" />,
      label: 'Email',
      value: 'official.clohia@gmail.com',
      link: 'mailto:official.clohia@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
      delay: '0ms'
    },
    {
      icon: <FaPhone className="text-xl sm:text-2xl" />,
      label: 'Phone',
      value: '+91 95473 77980, +977 98633 30302',
      link: 'tel:+919547377980,+9779863330302',
      gradient: 'from-green-500 to-emerald-500',
      delay: '200ms'
    },
    {
      icon: <FaMapMarkerAlt className="text-xl sm:text-2xl" />,
      label: 'Location',
      value: 'Kathmandu, Nepal',
      link: 'https://maps.google.com/?q=Kathmandu,Nepal',
      gradient: 'from-red-500 to-pink-500',
      delay: '400ms'
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-lg sm:text-xl" />,
      label: 'GitHub',
      link: 'https://github.com/chetanlohia123',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: <FaLinkedin className="text-lg sm:text-xl" />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/chetan-lohia-160949337/',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      icon: <FaFacebook className="text-lg sm:text-xl" />,
      label: 'Facebook',
      link: 'https://www.facebook.com/chetan.lohia.73',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      icon: <FaInstagram className="text-lg sm:text-xl" />,
      label: 'Instagram',
      link: 'https://www.instagram.com/_chetanlohia_/',
      gradient: 'from-pink-500 to-purple-600'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const emailjsFormData = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: formData.message,
    };

    try {
      // 1. Send message to you
      await emailjs.send('service_zpku65b', 'template_4igafye', emailjsFormData);
      console.log('Message sent to you ✅');

      // 2. Send thank you confirmation to visitor
      await emailjs.send('service_zpku65b', 'template_6yv3ynk', emailjsFormData);
      console.log('Thank you message sent to visitor ✅');

      setSubmitStatus('success');
      setFormData({ user_name: '', user_email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-10 sm:py-16 lg:py-20 px-3 sm:px-6 text-white relative"
      style={{ background: 'linear-gradient(to right, #0d0d0d, #1a2b5a)' }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight px-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient">
              Get In Touch
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to bring your ideas to life? Let's collaborate and create something extraordinary together. 
            Every great project starts with a simple conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="mb-8 lg:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Let's Start Something Amazing
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                I'm passionate about turning innovative ideas into reality. Whether you have a project in mind, 
                need technical expertise, or just want to discuss possibilities, I'm here to help make it happen.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4 lg:space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group contact-card opacity-0 animate-slide-up"
                  style={{ animationDelay: info.delay, animationFillMode: 'forwards' }}
                >
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 lg:gap-6 p-4 sm:p-5 lg:p-6 bg-gray-900/40 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-1 lg:hover:-translate-y-2 hover:shadow-xl lg:hover:shadow-2xl hover:shadow-blue-500/20"
                  >
                    <div className={`p-3 lg:p-4 rounded-lg lg:rounded-xl bg-gradient-to-r ${info.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white text-base sm:text-lg group-hover:text-blue-300 transition-colors duration-300">
                        {info.label}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base break-words">
                        {info.value}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                      <FaRocket className="text-blue-400 text-sm sm:text-base" />
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="mt-8 lg:mt-12">
              <h4 className="text-xl sm:text-2xl font-bold mb-4 lg:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Connect With Me
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-gray-900/40 backdrop-blur-sm rounded-lg lg:rounded-xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className={`p-2 lg:p-3 rounded-md lg:rounded-lg bg-gradient-to-r ${social.gradient} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {social.icon}
                    </div>
                    <span className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-4 sm:p-5 lg:p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-green-500/20 mt-6 lg:mt-8">
              <div className="flex items-center gap-3 mb-2 lg:mb-3">
                <div className="relative flex-shrink-0">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 lg:w-4 lg:h-4 bg-green-400 rounded-full animate-ping opacity-75"></div>
                </div>
                <h4 className="font-semibold text-green-400 text-base sm:text-lg">Available for New Projects</h4>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Currently accepting new opportunities and collaborations. 
                <span className="text-green-400 font-medium block sm:inline"> Response time: 24-48 hours</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative order-1 lg:order-2">
            <div className="form-container bg-gray-900/40 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-6 sm:p-7 lg:p-8 border border-gray-700/30 shadow-2xl">
              <div className="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-8">
                <div className="p-2 lg:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg flex-shrink-0">
                  <FaPaperPlane className="text-white text-lg lg:text-xl" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white">Send a Message</h3>
                  <p className="text-gray-400 text-sm lg:text-base">Let's discuss your project</p>
                </div>
              </div>

              <div ref={form} className="space-y-5 lg:space-y-6">
                {/* Name Input */}
                <div className="relative group">
                  <div className={`flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-gray-800/60 backdrop-blur-sm rounded-lg lg:rounded-xl border-2 transition-all duration-300 ${
                    focusedField === 'name' ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-gray-700/30 group-hover:border-gray-600/50'
                  }`}>
                    <FaUser className={`transition-colors duration-300 flex-shrink-0 ${focusedField === 'name' ? 'text-blue-400' : 'text-gray-400 group-hover:text-gray-300'}`} />
                    <input
                      type="text"
                      name="user_name"
                      placeholder="What's your name?"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-base lg:text-lg min-w-0"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <div className={`flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-gray-800/60 backdrop-blur-sm rounded-lg lg:rounded-xl border-2 transition-all duration-300 ${
                    focusedField === 'email' ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-gray-700/30 group-hover:border-gray-600/50'
                  }`}>
                    <FaEnvelope className={`transition-colors duration-300 flex-shrink-0 ${focusedField === 'email' ? 'text-blue-400' : 'text-gray-400 group-hover:text-gray-300'}`} />
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your email address"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-base lg:text-lg min-w-0"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="relative group">
                  <div className={`p-3 lg:p-4 bg-gray-800/60 backdrop-blur-sm rounded-lg lg:rounded-xl border-2 transition-all duration-300 ${
                    focusedField === 'message' ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-gray-700/30 group-hover:border-gray-600/50'
                  }`}>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project or idea..."
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-transparent text-white placeholder-gray-400 outline-none resize-none text-base lg:text-lg leading-relaxed"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={sendEmail}
                  disabled={isSubmitting}
                  className={`group w-full py-3 lg:py-4 px-5 lg:px-6 rounded-lg lg:rounded-xl font-semibold text-base lg:text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 hover:shadow-xl hover:shadow-blue-500/30 bg-size-200 hover:bg-pos-100'
                  } text-white flex items-center justify-center gap-3 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      <span className="hidden sm:inline">Sending Message...</span>
                      <span className="sm:hidden">Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="group-hover:rotate-12 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-start gap-3 p-4 bg-green-500/20 border border-green-500/30 rounded-lg lg:rounded-xl text-green-400 animate-slide-up">
                    <FaCheckCircle className="text-lg lg:text-xl animate-bounce flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">Message sent successfully!</div>
                      <div className="text-xs sm:text-sm text-green-300 mt-1">You'll receive a confirmation email shortly. I'll get back to you within 24-48 hours.</div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-start gap-3 p-4 bg-red-500/20 border border-red-500/30 rounded-lg lg:rounded-xl text-red-400 animate-slide-up">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse flex-shrink-0 mt-2"></div>
                    <span className="text-sm sm:text-base">Oops! Something went wrong. Please try again or contact me directly.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .contact-card:hover {
          transform: translateY(-4px);
        }
        
        @media (min-width: 1024px) {
          .contact-card:hover {
            transform: translateY(-8px);
          }
        }
        
        .form-container {
          background: rgba(17, 24, 39, 0.4);
          backdrop-filter: blur(20px);
        }
        
        .bg-size-200 {
          background-size: 200% 100%;
        }
        
        .bg-pos-100 {
          background-position: 100% 0;
        }
        
        /* Mobile-specific optimizations */
        @media (max-width: 640px) {
          .min-w-0 {
            min-width: 0;
          }
        }
      `}</style>
    </section>
  );
}
import React, { useState } from 'react';
import { Send, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.send(
      'service_p20zvps',
      'template_e5krw0q',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      },
      publicKey
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setErrorMsg('Failed to send message. Please try again later.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-28 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-wide">
            Get In Touch
          </h2>
          <div className="w-24 h-[1px] bg-slate-800 mt-4" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Form Side (Col-7) */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-10 border border-slate-900 bg-[#070707] text-center space-y-4">
                <p className="text-xl font-medium text-white">Message sent successfully!</p>
                <p className="text-sm text-slate-400">Thank you for writing. I will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#070707] border border-slate-900 focus:border-slate-700 text-sm text-white placeholder-slate-600 transition-all outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#070707] border border-slate-900 focus:border-slate-700 text-sm text-white placeholder-slate-600 transition-all outline-none"
                      placeholder="yourname@domain.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#070707] border border-slate-900 focus:border-slate-700 text-sm text-white placeholder-slate-600 transition-all outline-none"
                    placeholder="Web project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                    Message details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#070707] border border-slate-900 focus:border-slate-700 text-sm text-white placeholder-slate-600 transition-all outline-none resize-none"
                    placeholder="Provide details about your project needs..."
                  />
                </div>

                {errorMsg && (
                  <p className="text-sm text-red-500 font-light mt-2">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2.5 w-full py-4 bg-white hover:bg-slate-200 text-black font-semibold text-sm transition-colors group disabled:opacity-50"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Right: Info and Image Panel (Col-5) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Image Box */}
            <div className="rounded-2xl overflow-hidden border border-slate-900 aspect-[16/10] bg-slate-950 relative group filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700">
              <div className="absolute inset-0 bg-black/20 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80" 
                alt="Office desk setup" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-8 border border-slate-900 bg-[#070707] space-y-6">
              <h3 className="text-xl font-medium text-white">Contact Info</h3>
              
              <div className="space-y-4 text-sm font-light text-slate-400">
                <div>
                  <p className="text-slate-500 font-semibold uppercase tracking-wider text-xs mb-1">Email Me</p>
                  <p className="text-white text-base">naveenkumar11202006@gmail.com</p>
                </div>
                <div>
                  <p className="text-slate-500 font-semibold uppercase tracking-wider text-xs mb-1">Location</p>
                  <p className="text-white text-base">Arumbbakkum, Chennai - 600025, India</p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-slate-900 my-4" />

              <div className="space-y-3">
                <p className="text-xs text-slate-400 font-light">Prefer direct messaging? Message me on WhatsApp.</p>
                <a
                  href="https://wa.me/916380722750" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-white hover:text-slate-300 font-semibold pb-1 border-b border-white hover:border-slate-300 transition-all group"
                >
                  WhatsApp Quick Chat
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Profile } from '../types/portfolio';

interface ContactProps {
  profile: Profile;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    // Ready to connect to Formspree / Web3Forms / EmailJS endpoint here
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1400);
  };

  const contactItems = [
    { href: `mailto:${profile.socials.email}`, icon: <Mail className="w-5 h-5" />, label: 'Email', value: profile.socials.email },
    { href: profile.socials.github, icon: <Github className="w-5 h-5" />, label: 'GitHub', value: profile.socials.github.replace('https://', '') },
    { href: profile.socials.linkedin, icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', value: profile.socials.linkedin.replace('https://', '') },
    { href: undefined, icon: <MapPin className="w-5 h-5" />, label: 'Location', value: profile.location },
  ];

  return (
    <section id="contact" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-slate-400">Have a project, hackathon invite, or collaboration idea? Let's connect.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Contact info */}
          <ScrollReveal className="lg:col-span-5" direction="left">
            <div className="glass-panel p-8 rounded-2xl space-y-5 border border-white/10">
              <h3 className="text-xl font-heading font-bold text-white border-b border-slate-800 pb-4">
                Contact Information
              </h3>
              {contactItems.map(({ href, icon, label, value }, i) => {
                const Wrapper: React.ElementType = href ? motion.a : motion.div;
                const wrapperProps = href
                  ? { href, target: label !== 'Email' && label !== 'Location' ? '_blank' : undefined, rel: 'noopener noreferrer' }
                  : {};

                return (
                  <Wrapper
                    key={i}
                    {...wrapperProps}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all group cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                      {icon}
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">{label}</span>
                      <p className="text-slate-200 font-semibold text-sm mt-0.5 group-hover:text-indigo-300 transition-colors truncate max-w-[220px]">
                        {value}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal className="lg:col-span-7" direction="right" delay={0.1}>
            <div className="glass-panel p-8 rounded-2xl border border-white/10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                {(['name', 'email'] as const).map((field) => (
                  <div key={field} className="space-y-1.5">
                    <label htmlFor={`form-${field}`} className="text-sm font-semibold text-slate-300 capitalize">
                      {field === 'name' ? 'Your Name' : 'Your Email'} <span className="text-indigo-400">*</span>
                    </label>
                    <motion.input
                      type={field === 'email' ? 'email' : 'text'}
                      id={`form-${field}`}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={field === 'name' ? 'Enter your full name' : 'name@example.com'}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm outline-none transition-all duration-200"
                      whileFocus={{
                        borderColor: 'rgba(99,102,241,0.8)',
                        boxShadow: '0 0 0 3px rgba(99,102,241,0.15)',
                      }}
                    />
                  </div>
                ))}

                <div className="space-y-1.5">
                  <label htmlFor="form-message" className="text-sm font-semibold text-slate-300">
                    Message <span className="text-indigo-400">*</span>
                  </label>
                  <motion.textarea
                    id="form-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here…"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm outline-none resize-none transition-all duration-200"
                    whileFocus={{
                      borderColor: 'rgba(99,102,241,0.8)',
                      boxShadow: '0 0 0 3px rgba(99,102,241,0.15)',
                    }}
                  />
                </div>

                {/* Status messages */}
                <AnimatePresence>
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" /> {errorMsg}
                    </motion.div>
                  )}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 shrink-0" /> Message sent! I'll get back to you soon.
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="ripple-btn w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02, boxShadow: '0 12px 30px rgba(99,102,241,0.45)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === 'loading' ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Sending…</>
                  ) : (
                    <> Send Message <Send className="w-4 h-4" /></>
                  )}
                </motion.button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

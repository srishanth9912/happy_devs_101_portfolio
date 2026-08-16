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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMsg('All fields are required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMsg('Invalid email format.');
      return;
    }

    setStatus('loading');
    const accessKey = profile.socials.web3formsKey;

    if (!accessKey) {
      // Fallback: Mock success state if no key is configured in portfolioData.ts yet
      console.warn(
        'Form submission simulated. Go to src/data/portfolioData.ts and configure "web3formsKey" to receive real emails.'
      );
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }, 1000);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
        }),
      });

      const resData = await response.json();
      if (response.status === 200 || resData.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(resData.message || 'Something went wrong.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Submission failed. Please try again.');
    }
  };

  const contactItems = [
    { href: `mailto:${profile.socials.email}`, icon: <Mail className="w-5 h-5" />, label: 'Email', value: profile.socials.email },
    { href: profile.socials.github, icon: <Github className="w-5 h-5" />, label: 'GitHub', value: profile.socials.github.replace('https://', '') },
    { href: profile.socials.linkedin, icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', value: 'LinkedIn Profile' },
    { href: undefined, icon: <MapPin className="w-5 h-5" />, label: 'Location', value: profile.location },
  ];

  return (
    <section id="contact" className="py-28 relative">
      <div className="section-line mb-28" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <ScrollReveal>
          <div className="mb-20">
            <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] block mb-3">// 06</span>
            <h2 className="text-5xl sm:text-7xl font-heading font-bold tracking-tighter">
              Let's Talk<span className="text-[#FF2D78]">.</span>
            </h2>
            <p className="text-white/30 text-base mt-4 max-w-xl">
              Have a project, hackathon invite, or collaboration idea?
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl">
          {/* Contact info */}
          <ScrollReveal className="lg:col-span-5" direction="left">
            <div className="space-y-4">
              {contactItems.map(({ href, icon, label, value }, i) => {
                const Wrapper: React.ElementType = href ? motion.a : motion.div;
                const wrapperProps = href
                  ? { href, target: label !== 'Email' && label !== 'Location' ? '_blank' : undefined, rel: 'noopener noreferrer' }
                  : {};

                return (
                  <Wrapper
                    key={i}
                    {...wrapperProps}
                    className="flex items-center gap-4 p-5 rounded-2xl cyber-card group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ x: 6, borderColor: 'rgba(204,255,0,0.3)' }}
                    data-cursor-hover
                  >
                    <div className="p-3 rounded-xl bg-[#CCFF00]/[0.06] text-[#CCFF00] group-hover:scale-110 transition-transform">
                      {icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">{label}</span>
                      <p className="text-white/60 font-heading font-medium text-sm mt-0.5 group-hover:text-[#CCFF00] transition-colors truncate max-w-[220px]">
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
            <div className="cyber-card p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                {(['name', 'email'] as const).map((field) => (
                  <div key={field} className="space-y-2">
                    <label htmlFor={`form-${field}`} className="text-xs font-mono uppercase tracking-[0.2em] text-white/30">
                      {field === 'name' ? 'Your Name' : 'Your Email'} <span className="text-[#CCFF00]">*</span>
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={`form-${field}`}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={field === 'name' ? 'John Doe' : 'john@example.com'}
                      className="neon-input w-full px-4 py-3.5 rounded-xl text-sm font-mono"
                    />
                  </div>
                ))}

                <div className="space-y-2">
                  <label htmlFor="form-message" className="text-xs font-mono uppercase tracking-[0.2em] text-white/30">
                    Message <span className="text-[#CCFF00]">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message…"
                    className="neon-input w-full px-4 py-3.5 rounded-xl text-sm font-mono resize-none"
                  />
                </div>

                {/* Status */}
                <AnimatePresence>
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="p-3.5 rounded-xl bg-[#FF2D78]/10 border border-[#FF2D78]/20 text-[#FF2D78] text-xs font-mono flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" /> {errorMsg}
                    </motion.div>
                  )}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-3.5 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-[#CCFF00] text-xs font-mono flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 shrink-0" /> Message sent! I'll reply soon.
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="neon-btn w-full py-4 rounded-xl text-sm font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-cursor-hover
                >
                  {status === 'loading' ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Sending…</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
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

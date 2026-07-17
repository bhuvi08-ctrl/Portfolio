import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [sendResult, setSendResult] = useState<'success' | 'error' | null>(null);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);
    setSendResult(null);

    // Read keys safely
    const serviceId = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID || '';
    const templateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID || '';
    const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY || '';

    try {
      if (serviceId && templateId && publicKey) {
        // Real EmailJS Dispatch
        await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey);
        setSendResult('success');
        setFeedbackMsg("Your message was dispatched successfully! I will get back to you shortly.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Elegant simulated dispatch with helpful configuration instructions
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSendResult('success');
        setFeedbackMsg(
          "Your message was simulated successfully! (Note: Connect EmailJS in .env with VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to enable live email delivery)."
        );
        console.log("Contact form payload:", formData);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      setSendResult('error');
      setFeedbackMsg("Failed to dispatch email. Please email directly at: " + PERSONAL_INFO.email);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-12 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs font-semibold text-blue-400 mb-4"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-sans font-bold tracking-tight mb-4"
          >
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Incredible
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Have an open internship opportunity, a freelance project, or just want to say hi? Fill out the form or reach out directly!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">

          {/* LEFT: Contact Information Sidebar (Spans 5 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
            id="contact-info-sidebar"
          >
            <div className="p-6 sm:p-8 rounded-3xl glass-card space-y-8">
              <h3 className="text-lg font-sans font-semibold text-white">Contact Information</h3>

              <div className="space-y-6">
                {/* Email Info */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl glass text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs font-mono uppercase tracking-wider">Email Me</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="block text-sm sm:text-base font-sans font-semibold text-slate-200 hover:text-blue-400 transition-colors mt-0.5 break-all">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone Info */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl glass text-indigo-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs font-mono uppercase tracking-wider">Call Me</span>
                    <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="block text-sm sm:text-base font-sans font-semibold text-slate-200 hover:text-indigo-400 transition-colors mt-0.5">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Location Info */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl glass text-purple-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs font-mono uppercase tracking-wider">My Location</span>
                    <p className="text-sm sm:text-base font-sans font-semibold text-slate-200 mt-0.5">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro EmailJS Config Note */}
            <div className="p-4 rounded-2xl glass border border-white/5 text-center text-[11px] text-slate-500 font-mono flex items-center justify-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span>Secure client-side EmailJS integration configured</span>
            </div>
          </motion.div>

          {/* RIGHT: High-Fidelity Contact Form (Spans 7 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
            id="contact-form-container"
          >
            <div className="p-6 sm:p-8 rounded-3xl glass-card">
              <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6" id="portfolio-contact-form">

                {/* Name Field */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-slate-200 focus:outline-none focus:ring-1 transition-all ${errors.name
                        ? 'border-rose-500/50 focus:ring-rose-500 focus:border-rose-500'
                        : 'border-white/10 focus:ring-blue-500 focus:border-blue-500 focus:bg-white/10'
                      }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-xs font-mono text-rose-400">{errors.name}</span>}
                </div>

                {/* Email Field */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-slate-200 focus:outline-none focus:ring-1 transition-all ${errors.email
                        ? 'border-rose-500/50 focus:ring-rose-500 focus:border-rose-500'
                        : 'border-white/10 focus:ring-blue-500 focus:border-blue-500 focus:bg-white/10'
                      }`}
                    placeholder="johndoe@example.com"
                  />
                  {errors.email && <span className="text-xs font-mono text-rose-400">{errors.email}</span>}
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-slate-200 focus:outline-none focus:ring-1 transition-all ${errors.subject
                        ? 'border-rose-500/50 focus:ring-rose-500 focus:border-rose-500'
                        : 'border-white/10 focus:ring-blue-500 focus:border-blue-500 focus:bg-white/10'
                      }`}
                    placeholder="Project Inquiry / Collaboration"
                  />
                  {errors.subject && <span className="text-xs font-mono text-rose-400">{errors.subject}</span>}
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-slate-200 focus:outline-none focus:ring-1 transition-all resize-none ${errors.message
                        ? 'border-rose-500/50 focus:ring-rose-500 focus:border-rose-500'
                        : 'border-white/10 focus:ring-blue-500 focus:border-blue-500 focus:bg-white/10'
                      }`}
                    placeholder="Describe your project, timeline, or message..."
                  />
                  {errors.message && <span className="text-xs font-mono text-rose-400">{errors.message}</span>}
                </div>

                {/* Send Status Notification */}
                <AnimatePresence mode="popLayout">
                  {sendResult && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-xl flex items-start gap-3 border text-xs font-sans ${sendResult === 'success'
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                          : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                        }`}
                      id="contact-status-alert"
                    >
                      {sendResult === 'success' ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      )}
                      <span>{feedbackMsg}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold tracking-wide bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white hover:opacity-95 active:scale-[0.99] disabled:opacity-50 transition-all cursor-pointer shadow-md shadow-indigo-500/15"
                  id="submit-contact-form-btn"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

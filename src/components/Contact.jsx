import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, submitted: false, error: "Please fill out all fields." });
      return;
    }
    
    setStatus({ submitting: true, submitted: false, error: null });
    
    // Simulate a successful form submission API call
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-dark-bg/20">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Let's talk about your next project or role</p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact details */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 tracking-tight">Let's connect</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                If you have a project in mind, a job opportunity, or just want to chat about web technology, feel free to drop a message. I'll get back to you as soon as possible!
              </p>
            </div>

            <div className="space-y-6">
              {/* Email Link */}
              <div className="flex items-start space-x-4 group">
                <div className="p-3.5 bg-brand-50 dark:bg-slate-800/80 rounded-xl text-brand-600 dark:text-brand-400 group-hover:scale-105 transition-transform border border-slate-200/30 dark:border-slate-700/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm">Email</h4>
                  <a href="mailto:g.mujtaba.dev@gmail.com" className="text-slate-600 dark:text-slate-400 text-sm hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
                    g.mujtaba.dev@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Link */}
              <div className="flex items-start space-x-4 group">
                <div className="p-3.5 bg-brand-50 dark:bg-slate-800/80 rounded-xl text-brand-600 dark:text-brand-400 group-hover:scale-105 transition-transform border border-slate-200/30 dark:border-slate-700/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm">Location</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Lahore, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="md:col-span-7 card p-8 relative">
            {status.submitted ? (
              <div className="text-center py-10 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 mb-6 border border-emerald-200 dark:border-emerald-900/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm mx-auto mb-8 font-normal">
                  Thank you for reaching out. I've received your message and will respond within 24 hours.
                </p>
                <button 
                  onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                  className="btn-secondary px-6 py-2.5"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status.error && (
                  <div className="p-4 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 text-xs font-semibold rounded-xl border border-rose-100 dark:border-rose-900/30">
                    {status.error}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all placeholder:text-slate-400/80 text-sm font-medium" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all placeholder:text-slate-400/80 text-sm font-medium" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Ghulam, I would love to discuss a project..."
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all placeholder:text-slate-400/80 text-sm font-medium resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status.submitting}
                  className="w-full btn-primary py-3.5 shadow-brand-500/25"
                >
                  {status.submitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Transmitting Message...
                    </span>
                  ) : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

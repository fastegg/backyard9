import React, { useState, FormEvent } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate sending logic
    setTimeout(() => {
      setIsSubmitted(true);
      // In a real generic app without backend, we might open mailto
      // window.location.href = `mailto:fastegg@gmail.com?subject=Backyard 9 Contact from ${formData.name}&body=${formData.message}`;
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-golf-100 text-golf-600 mb-6">
            <Mail size={32} />
          </div>
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-stone-600">
            Questions about the build? Want to trade tips on bentgrass maintenance? Send me a message.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-stone-100 relative overflow-hidden">
          {isSubmitted ? (
            <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">Message Sent!</h3>
              <p className="text-stone-600 mb-8">
                Thanks for reaching out. I'll get back to you as soon as I finish the next round.
              </p>
              <button 
                onClick={() => { setIsSubmitted(false); setFormData({name: '', email: '', message: ''}); }}
                className="px-6 py-2 bg-stone-100 text-stone-600 font-medium rounded-lg hover:bg-stone-200 transition-colors"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-golf-500 focus:border-golf-500 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-golf-500 focus:border-golf-500 outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-1">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-golf-500 focus:border-golf-500 outline-none transition-all resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-golf-600 hover:bg-golf-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
              
              <p className="text-center text-xs text-stone-400 mt-4">
                Alternatively, email me directly at <a href="mailto:fastegg@gmail.com" className="text-golf-600 hover:underline">fastegg@gmail.com</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
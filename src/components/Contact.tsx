'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Here you can add API call to send the email
    console.log('Form submitted:', formData);
    
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 font-light">
            Have a project in mind? I&apos;d love to hear from you. Send me a message and I&apos;ll
            respond as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-8 border border-gold/30 p-8 lg:p-12 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gold mb-3 tracking-widest uppercase">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-gold/50 text-white placeholder-gray-600 focus:border-gold focus:outline-none transition"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gold mb-3 tracking-widest uppercase">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-gold/50 text-white placeholder-gray-600 focus:border-gold focus:outline-none transition"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gold mb-3 tracking-widest uppercase">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-transparent border border-gold/50 text-white placeholder-gray-600 focus:border-gold focus:outline-none transition"
              placeholder="Project subject"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gold mb-3 tracking-widest uppercase">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-transparent border border-gold/50 text-white placeholder-gray-600 focus:border-gold focus:outline-none transition resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full luxury-button"
          >
            Send Message
          </button>

          {/* Success Message */}
          {submitted && (
            <div className="bg-gold/10 border border-gold text-gold px-6 py-4">
              ✅ Thank you for your message! I&apos;ll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

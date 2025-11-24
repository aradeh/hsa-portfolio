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
    <section id="contact" className="py-20 sm:py-28 lg:py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Contact Info */}
          <div>
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-serif font-light text-black mb-12 tracking-tight">
              LET'S
              <br />
              <span className="italic font-serif font-light">Collaborate</span>
            </h2>

            <div className="space-y-8">
              {/* Phone */}
              <div>
                <p className="text-sm font-bold text-black mb-2 tracking-widest uppercase">Phone</p>
                <p className="text-lg text-black font-light">(123) 456 7890</p>
              </div>

              {/* Email */}
              <div>
                <p className="text-sm font-bold text-black mb-2 tracking-widest uppercase">Email</p>
                <p className="text-lg text-black font-light">hello@reallyreatsite.com</p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-all duration-300 tracking-widest text-sm uppercase"
                >
                  Contact Me
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex gap-6 pt-8">
                <a href="#" className="w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.3 5.3c0-1.8-1.5-3.3-3.3-3.3h-8c-1.8 0-3.3 1.5-3.3 3.3v8c0 1.8 1.5 3.3 3.3 3.3h8c1.8 0 3.3-1.5 3.3-3.3v-8z"/></svg>
                </a>
                <a href="#" className="w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right - Featured Image */}
          <div className="h-96 sm:h-[500px] overflow-hidden rounded-lg shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=700&fit=crop"
              alt="Collaboration"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

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

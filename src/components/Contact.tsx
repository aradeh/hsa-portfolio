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
                  className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-all duration-300 tracking-widest text-sm uppercase"
                >
                  Contact Me
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex gap-6 pt-8">
                <a href="#" className="w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54h2.86l3.32-4.04-3.43-4.16h-2.92l2.92 3.63z"/></svg>
                </a>
                <a href="#" className="w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 2.2.5 4.2z"/></svg>
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

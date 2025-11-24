export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen py-20 sm:py-28 lg:py-32 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=1600&h=900&fit=crop)' }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Contact Info */}
          <div className="md:w-1/2">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-light text-white mb-12 leading-tight">
              LET'S
              <br />
              Collaborate
            </h2>

            <div className="space-y-10">
              {/* Email */}
              <div>
                <p className="text-xs font-bold text-white mb-3 tracking-widest uppercase letter-spacing">Email</p>
                <p className="text-xl text-white font-light">hello@reallygreatsite.com</p>
              </div>

              {/* Phone */}
              <div>
                <p className="text-xs font-bold text-white mb-3 tracking-widest uppercase">Phone</p>
                <p className="text-xl text-white font-light">(123) 456 7890</p>
              </div>
            </div>
          </div>

          {/* Right - Empty for layout balance */}
          <div className="md:w-1/2"></div>
        </div>
      </div>
    </section>
  );
}

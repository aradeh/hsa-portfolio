export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Contact Info */}
          <div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-light text-black mb-12 leading-tight">
              LET'S
              <br />
              Collaborate
            </h2>

            <div className="space-y-10">
              {/* Email */}
              <div>
                <p className="text-xs font-bold text-black mb-3 tracking-widest uppercase letter-spacing">Email</p>
                <p className="text-xl text-black font-light">hello@reallygreatsite.com</p>
              </div>

              {/* Phone */}
              <div>
                <p className="text-xs font-bold text-black mb-3 tracking-widest uppercase">Phone</p>
                <p className="text-xl text-black font-light">(123) 456 7890</p>
              </div>
            </div>
          </div>

          {/* Right - Featured Image */}
          <div className="h-96 md:h-[450px] lg:h-[500px] overflow-hidden rounded-lg">
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

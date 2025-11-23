'use client';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=600&fit=crop"
              alt="Photographer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
              About Me
            </h2>
            <p className="text-lg text-secondary mb-6 leading-relaxed">
              I&apos;m a passionate photographer with over 10 years of experience capturing
              beautiful moments across the globe. My work focuses on authentic storytelling
              through the lens of nature, culture, and human emotion.
            </p>
            <p className="text-lg text-secondary mb-8 leading-relaxed">
              Whether it&apos;s a dramatic landscape, intimate portrait, or vibrant street scene,
              I believe every photograph has a story to tell. I&apos;m committed to delivering
              high-quality imagery that resonates with viewers and creates lasting memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent">500+</p>
                <p className="text-secondary">Projects Completed</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent">1000+</p>
                <p className="text-secondary">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent">10+</p>
                <p className="text-secondary">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

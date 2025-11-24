'use client';

export default function Gallery() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Health First',
      subtitle: 'Pubmats',
      description: 'Created marketing paraphernalia for Health First\'s all-natural wellness items',
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=600&fit=crop',
    },
    {
      id: 2,
      title: 'Urban Design',
      subtitle: 'Branding',
      description: 'Complete brand identity and marketing materials',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop',
    },
    {
      id: 3,
      title: 'Nature Series',
      subtitle: 'Photography',
      description: 'Eco-friendly design focused on environmental consciousness',
      image: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=600&h=600&fit=crop',
    },
  ];

  return (
    <section id="portfolio" className="relative min-h-screen py-20 sm:py-28 lg:py-32 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=1600&h=900&fit=crop)' }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-serif font-bold text-white mb-2 leading-tight">
            PAST
          </h2>
          <p className="text-5xl sm:text-6xl font-serif font-light text-white italic">
            Work
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {portfolioItems.map((item, index) => (
            <div key={item.id} className={`group cursor-pointer ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              {/* Image Container */}
              <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-lg mb-6 group-hover:shadow-xl transition-shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm font-light text-gray-200 mb-3 tracking-widest uppercase">
                  {item.subtitle}
                </p>
                <p className="text-base text-gray-100 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

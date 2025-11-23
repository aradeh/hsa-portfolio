'use client';

export default function Gallery() {
  const photos = [
    {
      id: 1,
      title: 'Mountain Landscape',
      category: 'Nature',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
    },
    {
      id: 2,
      title: 'Golden Hour',
      category: 'Nature',
      image: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=600&h=600&fit=crop',
    },
    {
      id: 3,
      title: 'Urban Life',
      category: 'Street',
      image: 'https://images.unsplash.com/photo-1514897575822-ffa3a3adb338?w=600&h=600&fit=crop',
    },
    {
      id: 4,
      title: 'Portrait',
      category: 'People',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
    },
    {
      id: 5,
      title: 'Forest Path',
      category: 'Nature',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop',
    },
    {
      id: 6,
      title: 'City Lights',
      category: 'Street',
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&h=600&fit=crop',
    },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Gallery
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Explore a collection of my recent photography work across various categories.
          </p>
        </div>

        {/* Gallery Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 h-64 sm:h-72 lg:h-80"
            >
              {/* Image */}
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {photo.title}
                </h3>
                <p className="text-sm text-gray-300">{photo.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

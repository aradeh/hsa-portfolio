'use client';

import { useState, useEffect } from 'react';

interface Photo {
  id: string;
  title: string;
  category: string;
  image: string;
  key: string;
}

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [useS3, setUseS3] = useState(false);

  const fallbackPhotos = [
    {
      id: '1',
      title: 'Mountain Landscape',
      category: 'Nature',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      key: 'nature/mountain.jpg',
    },
    {
      id: '2',
      title: 'Golden Hour',
      category: 'Nature',
      image: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=600&h=600&fit=crop',
      key: 'nature/golden-hour.jpg',
    },
    {
      id: '3',
      title: 'Urban Life',
      category: 'Street',
      image: 'https://images.unsplash.com/photo-1514897575822-ffa3a3adb338?w=600&h=600&fit=crop',
      key: 'street/urban.jpg',
    },
    {
      id: '4',
      title: 'Portrait',
      category: 'People',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
      key: 'people/portrait.jpg',
    },
  ];

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/photos');
        
        if (response.ok) {
          const data = await response.json();
          if (data.photos && data.photos.length > 0) {
            setPhotos(data.photos);
            setUseS3(true);
            setError(null);
          } else {
            setPhotos(fallbackPhotos);
            setError('S3 photos not available');
          }
        } else {
          setPhotos(fallbackPhotos);
          setError('Using sample photos (S3 not configured)');
        }
      } catch (err) {
        console.error('Error fetching photos:', err);
        setPhotos(fallbackPhotos);
        setError('Using sample photos (S3 not configured)');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <section id="gallery" className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-black mb-6 tracking-tight">
            Gallery
          </h2>
          <div className="h-1 w-20 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-light tracking-wide">
            Explore a collection of my recent artwork and design projects.
          </p>
          {error && (
            <p className="text-sm text-amber-600 mt-4">
              ℹ️ {error}
            </p>
          )}
          {useS3 && (
            <p className="text-sm text-green-600 mt-2">
              ✓ Loading photos from AWS S3 ({photos.length} photos)
            </p>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
              <p className="mt-4 text-gray-700">Loading gallery...</p>
            </div>
          </div>
        ) : photos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-700">No photos available</p>
          </div>
        ) : (
          <>
            <div
              className={`grid gap-8 sm:gap-10 ${
                photos.length === 1
                  ? 'grid-cols-1 max-w-lg mx-auto'
                  : photos.length === 2
                  ? 'grid-cols-1 sm:grid-cols-2'
                  : photos.length <= 4
                  ? 'grid-cols-1 sm:grid-cols-2'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="group relative overflow-hidden border border-gray-300 transition-all duration-300 h-64 sm:h-72 lg:h-80 hover:shadow-lg rounded-lg"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 text-center">{photo.title}</h3>
                    <p className="text-sm text-gray-300">{photo.category}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-700">
                Displaying {photos.length} photo{photos.length !== 1 ? 's' : ''}
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

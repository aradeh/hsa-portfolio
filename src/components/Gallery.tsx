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

  // Fallback photos if S3 is not configured
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
    {
      id: '5',
      title: 'Forest Path',
      category: 'Nature',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop',
      key: 'nature/forest.jpg',
    },
    {
      id: '6',
      title: 'City Lights',
      category: 'Street',
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&h=600&fit=crop',
      key: 'street/city-lights.jpg',
    },
  ];

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/photos');
        
        if (!response.ok) {
          throw new Error('Failed to fetch photos from S3');
        }

        const data = await response.json();

        if (data.photos && data.photos.length > 0) {
          setPhotos(data.photos);
          setUseS3(true);
          setError(null);
        } else {
          // Fallback to default photos if S3 is empty
          setPhotos(fallbackPhotos);
          setError('S3 bucket is empty, using sample photos');
        }
      } catch (err) {
        console.error('Error fetching photos:', err);
        // Use fallback photos if S3 fetch fails
        setPhotos(fallbackPhotos);
        setError('Using sample photos (S3 not configured)');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <section id="gallery" className="py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
            Gallery
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light tracking-wide">
            Explore a collection of my recent photography work across various categories.
          </p>
          {error && (
            <p className="text-sm text-gold mt-4">
              ℹ️ {error}
            </p>
          )}
          {useS3 && (
            <p className="text-sm text-green-400 mt-2">
              ✓ Loading photos from AWS S3 ({photos.length} photos)
            </p>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
              <p className="mt-4 text-gray-400">Loading gallery...</p>
            </div>
          </div>
        ) : photos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-400">No photos available</p>
          </div>
        ) : (
          <>
            {/* Dynamic grid based on photo count */}
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
                  className="group relative overflow-hidden luxury-border transition-all duration-300 h-64 sm:h-72 lg:h-80 hover:shadow-luxury-lg"
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

            {/* Photo count info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-secondary">
                Displaying {photos.length} photo{photos.length !== 1 ? 's' : ''}
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

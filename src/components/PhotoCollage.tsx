import { Camera } from 'lucide-react';

function PhotoCollage() {
  const photos = [
    { id: 1, src: '/photos/friend1.jpg', size: 'col-span-2 row-span-2' },
    { id: 2, src: '/photos/friend3.jpg', size: 'col-span-1 row-span-1' },
    { id: 3, src: '/photos/friend4.jpg', size: 'col-span-1 row-span-1' },
    { id: 4, src: '/photos/friend5.jpg', size: 'col-span-1 row-span-2' },
    { id: 5, src: '/photos/friend6.jpg', size: 'col-span-2 row-span-1' },
  ];

  return (
    <section className="mb-20">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-purple-600 mb-4 flex items-center justify-center gap-3">
          <Camera className="w-10 h-10" />
          Our Memories
          <Camera className="w-10 h-10" />
        </h2>
        <p className="text-gray-700 text-lg">Captured moments of pure friendship</p>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className={`${photo.size} bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group relative`}
          >
            {/* Photo (if available) */}
            {photo.src && (
              <img
                src={photo.src}
                alt={`Photo ${photo.id}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* Overlay for hover effect */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>

            {/* Optional Text on Hover */}
            <div className="relative z-10 text-white text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-sm font-semibold">Photo {photo.id}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PhotoCollage;

import { Sparkles, Eye } from 'lucide-react';

function GalleryHighlight() {
  const highlights = [
    { title: 'Laugh Together', emoji: '😂', color: 'from-yellow-300 to-orange-400' },
    { title: 'Create Memories', emoji: '📸', color: 'from-pink-300 to-rose-400' },
    { title: 'Dream Big', emoji: '🌟', color: 'from-purple-300 to-indigo-400' },
    { title: 'Stay Strong', emoji: '💪', color: 'from-blue-300 to-cyan-400' },
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-purple-600 mb-4 flex items-center justify-center gap-3">
          <Eye className="w-10 h-10" />
          Highlights
          <Sparkles className="w-10 h-10" />
        </h2>
        <p className="text-gray-700 text-lg">What makes our friendship special</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="group relative h-40 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}></div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-6xl mb-3">{item.emoji}</span>
              <p className="font-bold text-xl text-center px-4">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GalleryHighlight;

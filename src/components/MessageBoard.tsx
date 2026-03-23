import { MessageCircle, Heart } from 'lucide-react';

function MessageBoard() {
  const messages = [
    { text: 'Thank you for being my rock', color: 'from-pink-400 to-rose-400' },
    { text: 'Our friendship is my favorite adventure', color: 'from-blue-400 to-cyan-400' },
    { text: 'You make life colorful', color: 'from-purple-400 to-pink-400' },
    { text: 'Forever grateful for you', color: 'from-yellow-400 to-orange-400' },
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-purple-600 mb-4 flex items-center justify-center gap-3">
          <MessageCircle className="w-10 h-10" />
          Messages from the Heart
        </h2>
        <p className="text-gray-700 text-lg">Things I want you to know</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${msg.color} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group relative overflow-hidden`}
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl group-hover:bg-white/30 transition-all"></div>
            <div className="relative z-10">
              <Heart className="w-6 h-6 text-white mb-3 fill-white" />
              <p className="text-white text-2xl font-bold italic">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MessageBoard;

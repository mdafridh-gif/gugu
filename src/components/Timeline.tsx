import { Heart, Laugh, Plane, Calendar } from 'lucide-react';

function Timeline() {
  const events = [
    {
      icon: Calendar,
      title: 'How We Met',
      emoji: '🥰',
      description: 'We met in our school called SPJ but we talked during LOCKDOWN That days beigns our friendship began and changed everything!....  if that was not happened i was literally not happy because all your help,care,love,laughter makes me not to leave you MY  GUGYYYY 💖',
      color: 'from-pink-400 to-rose-400',
    },
    {
      icon: Laugh,
      title: 'Funniest Moments',
      emoji: '😂',
      description: 'Every time I listened for your MOKKA JOKES!, All the funniest moments are in our instagram chats that i roasted you and for the roasted you try to roast me but that was never happened.. so try your best MY GIRL!',
      color: 'from-yellow-400 to-orange-400',
    },
    {
      icon: Plane,
      title: 'Our Adventures',
      emoji: '🌍',
      description: 'We crossed many beautiful,rough and stubborn things that you helped me for my love and i helped for yours but past is past.Next I choose different studies,school and then you gone to different city,college for your better future. I MISS YOU SO MUCH GUGYYY. please come to MADURAI soon and meet me once that will make me stress free, At last every journey is better when we\'re together!',
      color: 'from-blue-400 to-cyan-400',
    },
  ];

  return (
    <section className="mb-20">
      <h2 className="text-5xl font-bold text-center text-purple-600 mb-12">
        Our Friendship Timeline ✨
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event, index) => {
          const Icon = event.icon;
          return (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center mb-4 mx-auto`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                {event.title} {event.emoji}
              </h3>
              <p className="text-gray-600 text-center text-lg">{event.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Timeline;

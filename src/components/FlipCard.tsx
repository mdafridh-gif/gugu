interface FlipCardProps {
  front: string;
  back: string;
  isFlipped: boolean;
  onClick: () => void;
}

function FlipCard({ front, back, isFlipped, onClick }: FlipCardProps) {
  return (
    <div
      className="relative h-48 cursor-pointer perspective-1000"
      onClick={onClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl shadow-lg flex items-center justify-center">
          <span className="text-7xl">{front}</span>
        </div>

        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl shadow-lg flex items-center justify-center rotate-y-180 p-6">
          <p className="text-white text-xl font-bold text-center">{back}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;

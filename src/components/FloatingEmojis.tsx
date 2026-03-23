function FloatingEmojis() {
  const emojis = ['💖', '⭐', '✨', '🌸', '🦋', '🌈', '💫', '🎀', '🌺', '💝'];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {emojis.map((emoji, index) => (
        <div
          key={index}
          className="absolute text-4xl animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
            opacity: 0.6,
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
}

export default FloatingEmojis;

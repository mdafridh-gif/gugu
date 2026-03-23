import { useState, useEffect, useRef } from 'react';
import { Heart, Star, Sparkles, Volume2, VolumeX, Plus, Trash2, Music } from 'lucide-react';
import FloatingEmojis from './components/FloatingEmojis';
import FlipCard from './components/FlipCard';
import Timeline from './components/Timeline';
import PhotoCollage from './components/PhotoCollage';
import MessageBoard from './components/MessageBoard';
import GalleryHighlight from './components/GalleryHighlight';

interface Song {
  id: string;
  title: string;
  url: string;
}

function App() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [songs, setSongs] = useState<Song[]>([
    { id: '1', title: 'Vizhi Veekura', url: 'https://res.cloudinary.com/dgxpxpxyx/video/upload/v1634567890/vizhi-veekura-bgm_sample.mp3' },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [showMusicPanel, setShowMusicPanel] = useState(false);
  const [newSongTitle, setNewSongTitle] = useState('');
  const [newSongUrl, setNewSongUrl] = useState('');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.loop = false;
      audioRef.current.volume = 0.100;
    }

    if (songs.length === 0) return;

    const audio = audioRef.current;
    audio.src = songs[currentSongIndex].url;

    if (isMusicPlaying) {
      audio.play().catch(() => {
        console.log('Playback started');
      });
    } else {
      audio.pause();
    }

    const handleEnded = () => {
      setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    };

    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, [isMusicPlaying, currentSongIndex, songs]);

  const addSong = () => {
    if (newSongTitle.trim() && newSongUrl.trim()) {
      setSongs([...songs, { id: Date.now().toString(), title: newSongTitle, url: newSongUrl }]);
      setNewSongTitle('');
      setNewSongUrl('');
    }
  };

  const removeSong = (id: string) => {
    const updatedSongs = songs.filter((song) => song.id !== id);
    setSongs(updatedSongs);
    if (currentSongIndex >= updatedSongs.length) {
      setCurrentSongIndex(Math.max(0, updatedSongs.length - 1));
    }
  };

  const toggleCard = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const loveReasons = [
    { front: '💛', back: 'You always make me laugh' },
    { front: '🌟', back: 'You never judge me' },
    { front: '🤗', back: 'You\'re always there for me' },
    { front: '✨', back: 'You inspire me to be better' },
    { front: '🎉', back: 'Life is more fun with you' },
    { front: '💝', back: 'You understand me completely' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 relative overflow-hidden">
      <FloatingEmojis />

      <div className="fixed top-6 right-6 z-50 flex gap-2">
        <button
          onClick={() => setShowMusicPanel(!showMusicPanel)}
          className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          title="Music settings"
        >
          <Music className="w-6 h-6 text-purple-500" />
        </button>
        <button
          onClick={() => setIsMusicPlaying(!isMusicPlaying)}
          className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          title={isMusicPlaying ? 'Mute music' : 'Play background music'}
        >
          {isMusicPlaying ? (
            <Volume2 className="w-6 h-6 text-pink-500" />
          ) : (
            <VolumeX className="w-6 h-6 text-gray-400" />
          )}
        </button>
      </div>

      {showMusicPanel && (
        <div className="fixed top-24 right-6 z-50 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 w-96 max-h-96 overflow-y-auto">
          <h3 className="text-xl font-bold text-purple-600 mb-4 flex items-center gap-2">
            <Music className="w-5 h-5" />
            Customize Background Music
          </h3>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Add New Song</label>
            <input
              type="text"
              placeholder="Song title"
              value={newSongTitle}
              onChange={(e) => setNewSongTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-pink-500"
            />
            <input
              type="url"
              placeholder="Song URL (MP3)"
              value={newSongUrl}
              onChange={(e) => setNewSongUrl(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-pink-500"
            />
            <button
              onClick={addSong}
              className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" /> Add Song
            </button>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Current Playlist ({songs.length})</label>
            <div className="space-y-2">
              {songs.map((song, index) => (
                <div
                  key={song.id}
                  className={`p-3 rounded-lg flex items-center justify-between cursor-pointer transition-all ${
                    index === currentSongIndex
                      ? 'bg-gradient-to-r from-pink-200 to-purple-200 border-2 border-pink-400'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={() => {
                    setCurrentSongIndex(index);
                    setIsMusicPlaying(true);
                  }}
                >
                  <span className="text-sm font-medium text-gray-800 truncate">{song.title}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeSong(song.id);
                    }}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10">
        <header className="text-center pt-16 pb-12 px-4">
          <div className="inline-block animate-bounce mb-4">
            <Heart className="w-16 h-16 text-pink-500 fill-pink-500" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-4 animate-fade-in">
            My Best Friend Shri Lakshana 💖
          </h1>
          <p className="text-2xl text-gray-700 font-medium max-w-2xl mx-auto">
            This page is all about the most amazing friend ever!
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
            <Star className="w-8 h-8 text-purple-500 animate-spin-slow" />
            <Sparkles className="w-8 h-8 text-pink-500 animate-pulse" />
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 pb-20">
          <Timeline />

          <PhotoCollage />

          <GalleryHighlight />

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-purple-600 mb-4 flex items-center justify-center gap-3">
                <Heart className="w-10 h-10" />
                Things I Love About You
                <Heart className="w-10 h-10" />
              </h2>
              <p className="text-gray-700 text-lg">Click the cards to reveal!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loveReasons.map((reason, index) => (
                <FlipCard
                  key={index}
                  front={reason.front}
                  back={reason.back}
                  isFlipped={flippedCards.has(index)}
                  onClick={() => toggleCard(index)}
                />
              ))}
            </div>
          </section>

          <section className="mb-20 bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
            <div className="text-center">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-6 animate-pulse" />
              <blockquote className="text-3xl md:text-4xl font-serif italic text-gray-800 mb-4">
                "Good friend is like a stars — you don't always see them, but you know they're always there."
              </blockquote>
              <div className="flex justify-center gap-2 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          </section>

          <MessageBoard />

          <footer className="text-center py-12">
            <div className="inline-block bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                BY:GUGY'S BOY(MOHAMMED AFRIDH) 💫
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;

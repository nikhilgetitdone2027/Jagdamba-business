import React, { useState, useRef } from 'react';
import { SectionHeading } from './SectionHeading';
import { videosData } from '../data/videos';
import { VideoItem } from '../types';
import { Play, Pause, Maximize2, Film, Sparkles, X, Volume2, VolumeX } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [modalVideo, setModalVideo] = useState<VideoItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Highlights' },
    { id: 'wedding', label: 'Wedding Setup' },
    { id: 'catering', label: 'Catering & Counters' },
    { id: 'decoration', label: 'Mandap & Decor' },
    { id: 'lighting', label: 'Lighting & Ambience' },
  ];

  const filteredVideos =
    activeCategory === 'all'
      ? videosData
      : videosData.filter(
          (v) => v.category === activeCategory || (activeCategory === 'wedding' && v.category === 'events')
        );

  return (
    <section id="videos" className="py-20 sm:py-28 bg-[#140204] text-[#FFFDD0] relative overflow-hidden dark-dot-pattern">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#5D0E11]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Cinematic Event Tours"
          title="EVENT HIGHLIGHTS & LIVE REELS"
          subtitle="Experience the grandeur of our live banquet counters, bespoke mandap decorations, and illuminated celebratory evenings."
          theme="dark"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-sm text-xs sm:text-sm font-cinzel font-bold tracking-wider transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-[#D4AF37] text-[#5D0E11] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20 scale-105'
                  : 'bg-[#5D0E11]/60 text-[#FFFDD0]/80 border-[#D4AF37]/30 hover:border-[#D4AF37] hover:text-[#FFFDD0]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVideos.map((video) => {
            const isPlaying = playingVideoId === video.id;

            return (
              <div
                key={video.id}
                className="rounded-sm bg-[#5D0E11]/40 border-2 border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-2xl overflow-hidden transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Media Container */}
                <div className="relative aspect-video bg-[#140204] overflow-hidden">
                  {isPlaying ? (
                    <video
                      src={video.videoSrc}
                      poster={video.poster}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // If video file is not yet uploaded locally, open modal preview with explanation
                        console.log('Video src not found locally:', video.videoSrc);
                      }}
                    >
                      Your browser does not support HTML5 video.
                    </video>
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={video.poster}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#140204] via-black/40 to-transparent" />

                      {/* Play Button Overlay */}
                      <button
                        type="button"
                        onClick={() => setPlayingVideoId(video.id)}
                        className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#D4AF37] text-[#5D0E11] flex items-center justify-center shadow-2xl group-hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-[#FFFDD0]"
                        aria-label={`Play ${video.title}`}
                      >
                        <Play className="w-7 h-7 fill-current ml-1" />
                      </button>

                      {/* Duration / Film Badge */}
                      {video.duration && (
                        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-sm bg-[#140204]/90 border border-[#D4AF37]/50 text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-1">
                          <Film className="w-3 h-3" />
                          {video.duration}
                        </div>
                      )}

                      {/* Category Tag */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-sm bg-[#5D0E11]/90 border border-[#D4AF37]/60 text-[10px] font-bold text-[#FFFDD0] uppercase tracking-wider">
                        {video.categoryLabel}
                      </div>

                      {/* Fullscreen Modal View Trigger */}
                      <button
                        type="button"
                        onClick={() => setModalVideo(video)}
                        className="absolute top-3 right-3 p-2 rounded-sm bg-[#140204]/80 border border-[#D4AF37]/40 text-[#D4AF37] hover:text-[#FFFDD0] hover:border-[#D4AF37] transition-colors"
                        title="Expand Video"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-5 sm:p-6 bg-[#140204]/90 border-t border-[#D4AF37]/30 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#FFFDD0] mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {video.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#FFFDD0]/80 leading-relaxed mb-4">
                      {video.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#D4AF37]/20 text-[11px] text-[#D4AF37]">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      HTML5 Local MP4 Player Ready
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        if (isPlaying) {
                          setPlayingVideoId(null);
                        } else {
                          setPlayingVideoId(video.id);
                        }
                      }}
                      className="font-bold uppercase tracking-wider underline hover:text-[#FFFDD0] transition-colors"
                    >
                      {isPlaying ? 'Close Player' : 'Watch Clip'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Video Customization Information Callout */}
        <div className="mt-12 p-4 sm:p-6 rounded-sm bg-[#5D0E11]/30 border border-[#D4AF37]/30 text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#FFFDD0]/80 leading-relaxed">
            <strong className="text-[#D4AF37] font-semibold">Video Integration:</strong> Add your own event MP4 videos into <code className="bg-[#140204] px-1.5 py-0.5 rounded text-[#D4AF37]">public/videos/</code> and update titles in <code className="bg-[#140204] px-1.5 py-0.5 rounded text-[#D4AF37]">src/data/videos.ts</code>.
          </p>
        </div>
      </div>

      {/* Expanded Modal Video Player */}
      {modalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-[#140204] rounded-sm border-2 border-[#D4AF37] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-[#5D0E11] border-b border-[#D4AF37]">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                  {modalVideo.categoryLabel}
                </span>
                <h4 className="font-cinzel text-base sm:text-lg font-bold text-[#FFFDD0]">
                  {modalVideo.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setModalVideo(null)}
                className="p-2 rounded-sm text-[#FFFDD0] hover:text-[#D4AF37] transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Element */}
            <div className="relative aspect-video bg-black">
              <video
                src={modalVideo.videoSrc}
                poster={modalVideo.poster}
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Your browser does not support HTML5 video.
              </video>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#140204] text-xs text-[#FFFDD0]/80">
              {modalVideo.description}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

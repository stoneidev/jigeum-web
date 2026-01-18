'use client';

import { motion } from 'framer-motion';
import { Youtube, Instagram, Play } from 'lucide-react';

const videos = [
    {
        platform: 'YouTube Shorts',
        title: 'Viral K-Beauty Secret Revealed',
        url: 'https://youtube.com/shorts/UyBMKPlEw0U?si=eAeQRJgOWkqv-Zi5',
        icon: Youtube,
        color: '#FF0000',
        thumbnail: 'https://img.youtube.com/vi/UyBMKPlEw0U/hqdefault.jpg',
        label: 'Viral Now'
    },
    {
        platform: 'TikTok',
        title: 'Top 5 K-Beauty Products 2025',
        url: 'https://www.tiktok.com/@skincarewithdee/video/7448375621532298514',
        icon: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
            </svg>
        ),
        color: '#00F2EA',
        thumbnail: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=600&fit=crop',
        label: '2026 Prediction'
    },
    {
        platform: 'Instagram Reels',
        title: 'Best Korean Sunscreens 2025',
        url: 'https://www.instagram.com/reels/C_p-Z2ByO3p/',
        icon: Instagram,
        color: '#E4405F',
        thumbnail: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=600&fit=crop',
        label: 'Essential Picks'
    }
];

export default function SocialVideos() {
    return (
        <section className="py-16 border-t border-white/5 mt-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-xl lg:text-2xl font-serif text-white font-medium">Trending Now</h2>
                    <p className="text-gray-500 text-sm mt-1">Check out the most viral K-Beauty content across social media</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* YouTube Shorts - Autoplay Embed */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-white/10"
                >
                    <iframe
                        src="https://www.youtube.com/embed/UyBMKPlEw0U?autoplay=1&mute=1&loop=1&playlist=UyBMKPlEw0U&controls=0&modestbranding=1&rel=0&iv_load_policy=3"
                        title="YouTube Shorts"
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>

                    {/* Overlay to catch clicks and redirect to full video */}
                    <a
                        href="https://youtube.com/shorts/UyBMKPlEw0U"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10"
                    />

                    {/* Gradient Overlay for labels */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Platform Information */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                        <div className="p-2 bg-black/50 backdrop-blur-md rounded-lg border border-white/10">
                            <Youtube className="w-5 h-5 text-[#FF0000]" />
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-white/80 bg-black/50 backdrop-blur-md px-2 py-1 rounded-md border border-white/5">
                            Year End Best
                        </span>
                    </div>

                    {/* Video Title */}
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                        <p className="text-xs text-white/60 mb-1">YouTube Shorts</p>
                        <h3 className="text-lg font-medium text-white">
                            Viral K-Beauty Secret Revealed
                        </h3>
                    </div>
                </motion.div>

                {/* TikTok & Instagram - High Quality Static Cards */}
                {videos.slice(1).map((video, index) => (
                    <motion.a
                        key={video.platform}
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index + 1) * 0.1 }}
                        className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-white/5 border border-white/10 block"
                    >
                        {/* Thumbnail Placeholder */}
                        <div className="absolute inset-0">
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                        </div>

                        {/* Platform Information */}
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                            <div className="p-2 bg-black/50 backdrop-blur-md rounded-lg border border-white/10">
                                <video.icon />
                            </div>
                            <span className="text-[10px] uppercase tracking-widest text-white/80 bg-black/50 backdrop-blur-md px-2 py-1 rounded-md border border-white/5">
                                {video.label}
                            </span>
                        </div>

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center">
                                <Play className="w-8 h-8 text-white fill-white" />
                            </div>
                        </div>

                        {/* Video Title */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <p className="text-xs text-white/60 mb-1">{video.platform}</p>
                            <h3 className="text-lg font-medium text-white group-hover:text-pink-300 transition-colors">
                                {video.title}
                            </h3>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}

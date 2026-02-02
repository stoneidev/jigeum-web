'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ThumbsUp, Calendar, ExternalLink, Search, TrendingUp, AlertCircle, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';

interface RedditPost {
    id: string;
    title: string;
    author: string;
    subreddit: string;
    url: string;
    score: number;
    num_comments: number;
    created_utc: number;
    thumbnail: string | null;
    selftext: string;
}

interface RedditSearchResponse {
    query: string;
    count: number;
    results: RedditPost[];
}

export default function RedditAnalysis() {
    const [data, setData] = useState<RedditSearchResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const query = 'stylekorean';

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/reddit/search?q=${encodeURIComponent(query)}&limit=10`);
                if (!response.ok) throw new Error('Failed to fetch Reddit data');
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const scrollToIndex = (index: number) => {
        if (!data) return;
        const newIndex = Math.max(0, Math.min(index, data.results.length - 1));
        setActiveIndex(newIndex);
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.offsetWidth;
            scrollRef.current.scrollTo({
                left: newIndex * (cardWidth * 0.85 + 16),
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.offsetWidth * 0.85 + 16;
            const newIndex = Math.round(scrollRef.current.scrollLeft / cardWidth);
            setActiveIndex(newIndex);
        }
    };

    if (loading) {
        return (
            <div className="py-12 flex flex-col items-center justify-center border-b border-white/10">
                <Loader2 className="w-8 h-8 text-pink-400 animate-spin mb-4" />
                <p className="text-gray-400 text-sm">Analyzing Reddit mentions for "{query}"...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-12 flex flex-col items-center justify-center border-b border-white/10 text-center px-4">
                <AlertCircle className="w-8 h-8 text-red-400 mb-4" />
                <p className="text-white font-medium mb-1">Failed to load social insights</p>
                <p className="text-gray-400 text-sm">{error}</p>
            </div>
        );
    }

    if (!data || data.results.length === 0) return null;

    // 간단한 통계 계산
    const totalScore = data.results.reduce((acc, post) => acc + post.score, 0);
    const totalComments = data.results.reduce((acc, post) => acc + post.num_comments, 0);
    const topSubreddits = Object.entries(
        data.results.reduce((acc: Record<string, number>, post) => {
            acc[post.subreddit] = (acc[post.subreddit] || 0) + 1;
            return acc;
        }, {})
    ).sort((a, b) => b[1] - a[1]).slice(0, 3);

    return (
        <section className="py-12 border-b border-white/10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 px-4 lg:px-0">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FF4500]">
                            <span className="text-white text-[10px] font-bold">r/</span>
                        </div>
                        <p className="text-pink-400 text-xs tracking-[0.2em] uppercase font-bold">Social Listening</p>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-serif text-white leading-tight">
                        "{query}" Community Analysis
                    </h2>
                    <p className="text-gray-400 text-sm mt-2 max-w-2xl">
                        Real-time buzz and customer sentiment from Reddit's global beauty communities.
                    </p>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => scrollToIndex(activeIndex - 1)}
                        disabled={activeIndex === 0}
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                        onClick={() => scrollToIndex(activeIndex + 1)}
                        disabled={activeIndex === data.results.length - 1}
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>

            {/* Insight Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 px-4 lg:px-0">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-1">Total Mentions</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">{data.count}+</span>
                        <span className="text-green-400 text-[10px] flex items-center gap-0.5">
                            <TrendingUp size={10} /> Active
                        </span>
                    </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-1">Total Upvotes</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">{totalScore}</span>
                        <ThumbsUp size={14} className="text-pink-400" />
                    </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-1">Engagement</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">{totalComments}</span>
                        <MessageSquare size={14} className="text-blue-400" />
                    </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-1">Top Community</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-white truncate">{topSubreddits[0]?.[0]}</span>
                    </div>
                </div>
            </div>

            {/* Posts Carousel */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {data.results.map((post, index) => (
                    <div
                        key={post.id}
                        className={`flex-shrink-0 w-[85%] md:w-[45%] lg:w-[31%] snap-start group transition-all duration-300 ${
                            index === activeIndex ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                        }`}
                    >
                        <a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block h-full bg-gradient-to-br from-white/10 to-transparent rounded-2xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-500 hover:translate-y-[-4px]"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[10px] font-bold text-pink-400 uppercase tracking-widest">{post.subreddit}</span>
                                <ExternalLink size={14} className="text-gray-500 group-hover:text-white transition-colors" />
                            </div>
                            
                            <h3 className="text-white font-medium mb-4 line-clamp-2 group-hover:text-pink-200 transition-colors leading-relaxed">
                                {post.title}
                            </h3>

                            {post.selftext && (
                                <p className="text-gray-400 text-xs mb-6 line-clamp-3 leading-relaxed">
                                    {post.selftext}
                                </p>
                            )}

                            <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1">
                                        <ThumbsUp size={12} className="text-gray-500" />
                                        <span className="text-[10px] text-gray-500">{post.score}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MessageSquare size={12} className="text-gray-500" />
                                        <span className="text-[10px] text-gray-500">{post.num_comments}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-gray-600">
                                    <Calendar size={12} />
                                    <span className="text-[10px]">
                                        {new Date(post.created_utc * 1000).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>

            {/* Progress Bar */}
            <div className="flex justify-center gap-2 mt-8">
                {data.results.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToIndex(index)}
                        className={`h-1 rounded-full transition-all duration-500 ${
                            index === activeIndex ? 'bg-pink-400 w-8' : 'bg-white/10 w-4'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}

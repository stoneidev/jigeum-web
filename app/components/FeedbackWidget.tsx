'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, ThumbsUp, ThumbsDown } from 'lucide-react';

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState<'good' | 'bad' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Vercel Analytics 또는 외부 서비스로 피드백 전송
    console.log({ rating, feedback });
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setFeedback('');
      setRating(null);
    }, 2000);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Feedback Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden text-gray-900"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-semibold text-lg text-gray-900">Send Feedback</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              {submitted ? (
                <div className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <ThumbsUp className="w-8 h-8 text-green-600" />
                  </motion.div>
                  <p className="text-lg font-medium text-gray-900">Thank you!</p>
                  <p className="text-gray-500 text-sm mt-1">Your feedback has been submitted.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-4 space-y-4">
                  {/* Rating */}
                  <div>
                    <p className="text-sm font-medium mb-2 text-gray-900">Do you like this service?</p>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setRating('good')}
                        className={`flex-1 py-3 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${
                          rating === 'good'
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-gray-200 hover:border-gray-300 text-gray-700'
                        }`}
                      >
                        <ThumbsUp className="w-5 h-5" />
                        Good
                      </button>
                      <button
                        type="button"
                        onClick={() => setRating('bad')}
                        className={`flex-1 py-3 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${
                          rating === 'bad'
                            ? 'border-red-500 bg-red-50 text-red-700'
                            : 'border-gray-200 hover:border-gray-300 text-gray-700'
                        }`}
                      >
                        <ThumbsDown className="w-5 h-5" />
                        Not great
                      </button>
                    </div>
                  </div>

                  {/* Feedback Text */}
                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-900">
                      Leave a comment (optional)
                    </label>
                    <textarea
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="What did you like? Any suggestions for improvement?"
                      className="w-full p-3 border rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-black/10 text-gray-900 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={!rating}
                    className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Feedback
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

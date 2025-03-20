"use client"
import { useState } from "react"
import ThemeToggle from "@/app/components/ThemeToggle";

export default function YoutubeMultiPlayer() {
  const [videoUrl, setVideoUrl] = useState("")
  const [videoId, setVideoId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const numberOfVideos = 20

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Extract video ID from YouTube URL
    const extractVideoId = (url) => {
      // Handle different YouTube URL formats
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = url.match(regExp)

      return match && match[2].length === 11 ? match[2] : null
    }

    const id = extractVideoId(videoUrl)

    // Simulate a small delay for visual feedback
    setTimeout(() => {
      setVideoId(id)
      setIsLoading(false)
    }, 300)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header with gradient text */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          YouTube Multi Player
        </h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
          Watch the same video in multiple players simultaneously
        </p>
      </div>
        <ThemeToggle />

      {/* Custom form with tailwind-only styling */}
      <div className="max-w-3xl mx-auto mb-12">
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Custom input */}
            <div className="flex-1 relative">
              <input
                type="text"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Paste YouTube video URL here..."
                className="w-full px-5 py-4 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 dark:focus:ring-indigo-400/30 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400 backdrop-blur-sm shadow-sm"
              />
              {videoUrl && (
                <button
                  type="button"
                  onClick={() => setVideoUrl("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Custom button */}
            <button
              type="submit"
              disabled={isLoading || !videoUrl}
              className="px-8 py-4 rounded-xl font-medium bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 hover:from-indigo-500 hover:to-purple-500 dark:hover:from-indigo-400 dark:hover:to-purple-400 active:from-indigo-700 active:to-purple-700 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-indigo-500/30 text-white"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing
                </span>
              ) : (
                "Play Videos"
              )}
            </button>
          </div>

          {/* Error message if invalid URL */}
          {videoUrl && !videoId && videoUrl.includes("youtube") && (
            <p className="mt-2 text-red-500 dark:text-red-400 text-sm">Please enter a valid YouTube URL</p>
          )}

          {/* Hint text */}
          <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm">
            Enter any YouTube video URL to play it {numberOfVideos} times simultaneously
          </p>
        </form>
      </div>

      {/* Video grid or placeholder */}
      {videoId ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: numberOfVideos }).map((_, index) => (
            <div
              key={index}
              className="aspect-video w-full rounded-xl overflow-hidden shadow-md dark:shadow-lg shadow-slate-200/50 dark:shadow-black/30 transform hover:scale-[1.02] transition-transform"
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1`}
                title={`YouTube video player ${index + 1}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-12 text-center max-w-3xl mx-auto backdrop-blur-sm shadow-xl dark:shadow-black/20">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-75 blur-lg"></div>
              <div className="relative bg-white dark:bg-slate-900 rounded-full p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">No Video Selected</h3>
          <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            Enter a YouTube URL above and click "Play Videos" to see the same video playing in {numberOfVideos}{" "}
            different players simultaneously.
          </p>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>Made with ❤️ using Next.js and Tailwind CSS</p>
      </footer>
    </div>
  )
}


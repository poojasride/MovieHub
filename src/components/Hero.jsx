const HeroSection = () => {
  return (
    <section className="w-full  text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Hero Left */}
          <div className="space-y-6">
            <span className="inline-block text-sm tracking-widest uppercase text-red-500 font-semibold">
              Unlimited Movies & Series
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Stream Movies, TV Shows <br />
              <span className="text-red-500">Anytime, Anywhere</span>
            </h1>

            <p className="text-gray-300 text-lg max-w-xl">
              Discover trending movies, top-rated series, and exclusive content.
              Watch seamlessly across all your devices with cinematic quality.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition">
                Get Started
              </button>

              <button className="px-8 py-3 border border-gray-500 hover:border-white rounded-lg font-semibold transition">
                Browse Movies
              </button>
            </div>
          </div>

          {/* Hero Right */}
          <div className="space-y-4 text-gray-300">
            <div className="border border-gray-700 rounded-xl p-6 backdrop-blur-sm bg-white/5">
              <h3 className="text-xl font-semibold text-white mb-3">
                Why Choose Us?
              </h3>

              <ul className="space-y-3">
                <li>🎬 10,000+ Movies & TV Shows</li>
                <li>⚡ Fast Streaming, No Buffering</li>
                <li>📱 Watch on Mobile, Tablet & TV</li>
                <li>⭐ Personalized Recommendations</li>
              </ul>
            </div>

            <p className="text-sm text-gray-400">
              Join millions of users enjoying premium entertainment with zero
              compromise on quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

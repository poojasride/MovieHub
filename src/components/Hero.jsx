const HeroSection = () => {
  return (
    <section className="w-full  to-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* 🔴 Hero Left */}
          <div className="space-y-8">
            
            <span className="inline-block text-sm tracking-widest uppercase text-red-500 font-semibold font-serif mb-2 mt-4">
              Unlimited Movies & TV Shows
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight ">
              Stream Your Favorite <br />
              <span className="text-red-500">
                Movies Anytime, Anywhere
              </span>
            </h1>

            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              Discover trending blockbusters, top-rated series, and exclusive
              content — all in one place. Enjoy seamless streaming across all
              your devices with cinematic quality and personalized
              recommendations tailored just for you.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-red-500/30">
                Get Started
              </button>

              <button className="px-8 py-3 border border-gray-600 hover:border-white rounded-lg font-semibold transition duration-300">
                Browse Movies
              </button>
            </div>

          </div>

          {/* 🔵 Hero Right */}
          <div className="space-y-6">
            
            <div className="border border-gray-800 rounded-2xl p-8 bg-white/5 backdrop-blur-md shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Why Choose MovieHub?
              </h3>

              <ul className="space-y-4 text-gray-300 text-base">
                <li className="flex items-center gap-3">
                  🎬 <span>10,000+ Movies & TV Shows</span>
                </li>
                <li className="flex items-center gap-3">
                  ⚡ <span>Fast Streaming, No Buffering</span>
                </li>
                <li className="flex items-center gap-3">
                  📱 <span>Watch on Mobile, Tablet & TV</span>
                </li>
                <li className="flex items-center gap-3">
                  ⭐ <span>Personalized Recommendations</span>
                </li>
                <li className="flex items-center gap-3">
                  🔒 <span>Secure & Ad-Free Experience</span>
                </li>
                <li className="flex items-center gap-3">
                  🌐 <span>Multi-Language Support</span>
                </li>
                <li className="flex items-center gap-3">
                  ⬇️ <span>Download & Watch Offline</span>
                </li>
              </ul>
            </div>

            <p className="text-sm text-gray-500">
              Join millions of users enjoying premium entertainment without
              compromise.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

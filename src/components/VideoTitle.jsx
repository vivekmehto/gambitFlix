const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute top-0 left-0 flex flex-col justify-center px-6 md:px-24 text-white 
      bg-linear-to-r from-black via-black/60 to-transparent">
      
      <h1 className="text-3xl md:text-6xl font-extrabold drop-shadow-lg leading-tight max-w-3xl">
        {title}
      </h1>

      <p className="hidden md:block mt-6 text-lg text-gray-200 max-w-xl leading-relaxed drop-shadow-md">
        {overview}
      </p>

      <div className="flex gap-4 mt-8">
        {/* Play Button */}
        <button className="flex items-center gap-2 bg-white text-black font-semibold py-2 md:py-3 px-4 md:px-10 text-lg rounded-lg hover:bg-opacity-80 transition duration-300 shadow-lg">
          <span className="text-2xl">▶</span> Play
        </button>

        {/* More Info Button */}
        <button className="hidden md:flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white font-semibold py-2 md:py-3 px-4 md:px-10 text-lg rounded-lg hover:bg-white/30 transition duration-300 shadow-lg">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
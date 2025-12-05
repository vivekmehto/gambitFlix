const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="
        absolute top-0 left-0 
        w-full h-full
        flex flex-col justify-center
        px-4 sm:px-6 md:px-24
        text-white
        bg-linear-to-r from-black via-black/60 to-transparent
      "
    >
      <h1 className="text-2xl sm:text-3xl md:text-6xl font-extrabold drop-shadow-lg leading-snug max-w-3xl">
        {title}
      </h1>

      <p className="hidden md:block mt-4 text-base md:text-lg text-gray-200 max-w-xl leading-relaxed drop-shadow-md">
        {overview}
      </p>

      <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
        <button
          className="
          flex items-center gap-2 
          bg-white text-black font-semibold 
          py-2 sm:py-2.5 md:py-3 
          px-4 sm:px-6 md:px-10 
          text-sm sm:text-base md:text-lg 
          rounded-lg hover:bg-opacity-80 
          transition duration-300 shadow-lg
        "
        >
          <span className="text-xl sm:text-2xl">▶</span> Play
        </button>

        <button
          className="
          hidden md:flex items-center gap-2 
          bg-white/20 backdrop-blur-sm text-white font-semibold 
          py-2 md:py-3 
          px-4 md:px-10 
          text-lg rounded-lg 
          hover:bg-white/30 transition duration-300 shadow-lg
        "
        >
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

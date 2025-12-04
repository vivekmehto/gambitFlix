const ShimmerMovieRow = () => {

  return (
    <div className="overflow-x-auto no-scrollbar py-2">
      <div className="flex gap-4">
        {Array(10).fill(0).map((_, i) => (
          <div
            key={i}
            className="
              w-40 h-60 rounded-md bg-gray-800/40
              animate-pulse
            "
          ></div>
        ))}
      </div>
    </div>
  );
};

const MainContainerShimmer = () => {
  return (
    <div className="relative w-full h-screen md:h-[80vh] bg-gray-900">
      <div className="absolute inset-0 bg-gray-800"></div>

      <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent"></div>

      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white space-y-5">
        
        <div className="h-8 md:h-12 w-2/3 bg-gray-700 rounded-md"></div>
        <div className="h-8 md:h-12 w-1/2 bg-gray-700 rounded-md"></div>

        <div className="hidden md:block space-y-3 mt-4">
          <div className="h-3 w-2/3 bg-gray-700 rounded-md"></div>
          <div className="h-3 w-1/2 bg-gray-700 rounded-md"></div>
        </div>

        <div className="flex gap-4 mt-6">
          <div className="h-10 w-32 bg-gray-700 rounded-lg"></div>
          <div className="h-10 w-32 bg-gray-700 rounded-lg hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export{ MainContainerShimmer, ShimmerMovieRow };

import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { MainContainerShimmer } from "./ShimmerUI";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const selected = useSelector((store) => store.movies?.selected);

  if (!movies) return <MainContainerShimmer />;

  const mainMovie = movies[0];

  const currentId = selected?.id || mainMovie?.id;
  const currentType = selected?.type || "movie";
  const title =
    selected?.name ||
    mainMovie?.original_title ||
    mainMovie?.title ||
    mainMovie?.name;
  const overview = selected?.overview || mainMovie?.overview || "";

  return (
    <div className="relative bg-black min-h-[60vh] md:min-h-[70vh] pt-[30%] md:pt-0">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={currentId} type={currentType} />
    </div>
  );
};

export default MainContainer;

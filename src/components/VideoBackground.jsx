import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId, type = "movie" }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId, type);

  return (
    <div className="w-full">
      <div className="w-full aspect-video overflow-hidden rounded-md">
        {trailerVideo?.key ? (
          <iframe
            className="w-full h-full"
            src={
              "https://www.youtube.com/embed/" +
              trailerVideo.key +
              "?autoplay=1&mute=1&controls=0&rel=0"
            }
            title="YouTube trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="w-full h-full bg-black" />
        )}
      </div>
    </div>
  );
};

export default VideoBackground;

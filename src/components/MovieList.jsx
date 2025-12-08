import MovieCard from "./MovieCard";
import { ShimmerMovieRow } from "./ShimmerUI";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>

      {movies?.length ? (
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {movies.map((movie) => {
              const type = movie.media_type || (movie.name ? "tv" : "movie");
              return (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  posterPath={movie.poster_path}
                  type={type}
                  name= {movie.name || movie.title}
                  overview = {movie.overview}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <ShimmerMovieRow />
      )}
    </div>
  );
};

export default MovieList;

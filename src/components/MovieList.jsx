import MovieCard from "./MovieCard";
import { ShimmerMovieRow } from "./ShimmerUI";

const MovieList = ({ title, movies }) => {
  return (<>
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      {movies?.length ?
    (
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
       ): 
        (
        <ShimmerMovieRow />
        )}
    </div>

       
        </>
  );
};
export default MovieList;
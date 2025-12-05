import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black pt-44">
      <div className=" mt-0 md:-mt-52 pl-2 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Popular TV Shows"} movies={movies.tvPopular} />
        <MovieList title={"TV SHOWS Airing Today"} movies={movies.tvAirToday} />
        <MovieList title={"Top Rated TV Shows"} movies={movies.tvTopRated} />
      </div>
    </div>
  );
};
export default SecondaryContainer;

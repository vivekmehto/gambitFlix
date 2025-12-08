import { useParams } from "react-router";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const API_KEY = import.meta.env.VITE_TMDB_KEY;

  const getMovieDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    const json = await data.json();
    setMovie(json);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  if (!movie)
    return <h1 className="text-white p-10 text-2xl">Loading movie details...</h1>;

  return (
    <div className="text-white p-10 flex gap-10">
      <img
        className="w-72 rounded-xl shadow-lg"
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt={movie.title}
      />

      <div>
        <h1 className="text-4xl font-bold">{movie.title}</h1>
        <p className="text-gray-300 my-3">{movie.tagline}</p>
        <p className="text-lg w-2/3">{movie.overview}</p>

        <h2 className="mt-5 font-semibold">
          ⭐ Rating: {movie.vote_average} / 10
        </h2>
        <h3 className="mt-2">
          🎬 Release Date: {movie.release_date}
        </h3>
      </div>
    </div>
  );
};

export default MovieDetails;

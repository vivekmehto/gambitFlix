import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";


const useNowPlayingMovies = () => {
  const dispatch = useDispatch(); 

  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch( 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS );
      const jsonData = await data.json();
      console.log("movies",jsonData);
      dispatch(addNowPlayingMovies(jsonData.results));

    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    } 
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

}

export default useNowPlayingMovies;
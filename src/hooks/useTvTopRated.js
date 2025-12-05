import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTvTopRated } from "../utils/movieSlice";


const useTvTopRated = () => {
  const dispatch = useDispatch(); 

  const getTvTopRated = async () => {
    try {
      const data = await fetch( 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTIONS );
      const jsonData = await data.json();
      console.log("TV Top Rated Data:", jsonData);
      dispatch(addTvTopRated(jsonData.results));

    } catch (error) {
      console.error("Error fetching TV top rated TV shows:", error);
    } 
  }

  useEffect(() => {
    getTvTopRated();
  }, []);

}

export default useTvTopRated;
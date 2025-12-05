import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTvPopular } from "../utils/movieSlice";


const useTvPopular = () => {
  const dispatch = useDispatch(); 

  const getTvPopular = async () => {
    try {
      const data = await fetch( 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', API_OPTIONS );
      const jsonData = await data.json();
      console.log("TV Popular Data:", jsonData);
      dispatch(addTvPopular (jsonData.results));

    } catch (error) {
      console.error("Error fetching TV popular TV shows:", error);
    } 
  }

  useEffect(() => {
    getTvPopular();
  }, []);

}

export default useTvPopular;
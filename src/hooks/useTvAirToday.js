import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTvAirToday } from "../utils/movieSlice";
import { useSelector } from "react-redux";


const useTvAirToday = () => {
    const dispatch = useDispatch();

    const tvAirToday = useSelector((store) => store.movies.tvAirToday);

    const getTvAirToday = async () => {
        const data = await fetch("https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
             API_OPTIONS);
        const json = await data.json();
        console.log("TV Shows Airing Today Data:", json);
        dispatch(addTvAirToday(json.results));
    }

    useEffect(() => {
        !tvAirToday && getTvAirToday();
    }, []);
}

export default useTvAirToday
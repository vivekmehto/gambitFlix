import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
const useMovieTrailer = (id, type = "movie") => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!id) return;

    const fetchTrailer = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      const data = await res.json();

      const trailer = data.results.find((v) => v.site === "YouTube");
      dispatch(addTrailerVideo(trailer || null));
    };

    fetchTrailer();
  }, [id, type]);
};
export default useMovieTrailer;

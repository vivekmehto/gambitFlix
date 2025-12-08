import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { setSelected } from "../utils/movieSlice";

const MovieCard = ({ id, posterPath, type = "movie" }) => {
  const dispatch = useDispatch();

  if (!posterPath) return null;

  return (

    <Link to={"/movie/" + id}>
    <div className="w-36 md:w-48 pr-4 cursor-pointer hover:scale-105 transition duration-200">
      <img
        onClick={() => {
          console.log("clicked", id, type);
          dispatch(setSelected({ id, type }));
        }}
        alt="Movie Poster"
        src={IMG_CDN_URL + posterPath}
        className="rounded-md"
      />
    </div>
    </Link>
  );
};

export default MovieCard;

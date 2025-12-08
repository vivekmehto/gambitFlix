import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { setSelected } from "../utils/movieSlice";
import { Link } from "react-router";

const MovieCard = ({ id, posterPath, type = "movie", name, overview }) => {
  const dispatch = useDispatch();

  if (!posterPath) return null;

  return (
    // <Link to={"/movie/" + id}>
    <div className="w-36 md:w-48 pr-4 cursor-pointer hover:scale-105 transition duration-200">
      <img
        onClick={() => {
          dispatch(setSelected({ id, type, name, overview }));
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        alt="Movie Poster"
        src={IMG_CDN_URL + posterPath}
        className="rounded-md"
      />
    </div>
    // </Link>
  );
};

export default MovieCard;

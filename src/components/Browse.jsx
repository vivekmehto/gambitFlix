import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import Footer from "./Footer"
import { useSelector } from "react-redux"
import useTvPopular from "../hooks/useTvPopular"
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import useTvAirToday from "../hooks/useTvAirToday"
import useTvTopRated from "../hooks/useTvTopRated"


const Browse = () => {
  
  // const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTvPopular();
  useUpcomingMovies();
  useTvAirToday();
  useTvTopRated();
 
  return (
    <div>
      <Header />
      
          <MainContainer />
          <SecondaryContainer />
      
      <Footer />
    </div>
  )
}

export default Browse
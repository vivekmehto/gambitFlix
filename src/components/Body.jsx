import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router"; 
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Body = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="relative h-screen w-full overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg"
          alt="Hero background — cinematic scene"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black/80 pointer-events-none" />

        <div className="relative z-30">
          <Header />
        </div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Unlimited movies,
            <br />
            shows, and more
          </h1>
          <p className="mt-4 text-white text-lg sm:text-xl">
            Watch anywhere and anytime.
          </p>
          <Link to="/browse">
            <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
              Get Started
            </button>
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-black">
        <div className="h-8 md:h-12" />

        <div className="pl-4 md:pl-12 relative z-10">
          <div className="mt-6">
            <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Body;

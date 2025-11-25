
import Header from "./Header";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="relative h-screen w-full overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg"
          alt="Hero background — cinematic scene"
        />

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
          <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Get Started
          </button>
        </div>
      </header>

      <main className="flex-1 bg-white">
        <section className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4">Trending Now</h2>
       
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Body;

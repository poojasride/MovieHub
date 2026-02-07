import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import omdbApi from "../api/omdb";

function MovieDetail() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await omdbApi.get("", {
          params: {
            i: id,
            plot: "full",
          },
        });
        console.log(response.data);
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  return (
    <div className=" text-white min-h-screen mt-8">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-14 items-start">
          {/* POSTER */}
          <div className="relative mx-auto lg:mx-0">
            <img
              src={movieDetails.Poster}
              alt={movieDetails.Title}
              className="w-[300px] h-[450px] object-cover rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
          </div>

          {/* CONTENT */}
          <div className="space-y-6">
            {/* Platform */}
            <p className="text-sm tracking-wide text-gray-400 font-medium">
              Now streaming on Movie{" "}
              <span className="text-red-600 font-bold">Hub</span>
            </p>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {movieDetails.Title}
            </h1>

            {/* Year and Runtime */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
              <span>{movieDetails.Year}</span>
              <span>•</span>
              <span>{movieDetails.Runtime}</span>
              <span>•</span>
              <span className="text-gray-200">{movieDetails.Genre}</span>
              <span className="border border-gray-700 px-2 py-0.5 rounded text-xs">
                {movieDetails.Rated}
              </span>
            </div>

            {/* Plot */}
            <p className="text-gray-300 leading-relaxed max-w-3xl line-clamp-2">
              {movieDetails.Plot}
            </p>

            {/* Information of Movie */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-sm text-gray-300">
              <p>
                <span className="text-gray-500">Director:</span>{" "}
                {movieDetails.Director}
              </p>
              <p>
                <span className="text-gray-500">Writer:</span> {movieDetails.Writer}
              </p>
              <p>
                <span className="text-gray-500">Stars:</span> {movieDetails.Actors}
              </p>
              <p>
                <span className="text-gray-500">Language:</span>{" "}
                {movieDetails.Language}
              </p>
              <p>
                <span className="text-gray-500">Country:</span> {movieDetails.Country}
              </p>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition duration-300">
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;

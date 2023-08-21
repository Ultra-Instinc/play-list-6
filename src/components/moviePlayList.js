import { useDispatch, useSelector } from "react-redux";
import { createRandomMovie } from "../data";
import { addMovie, removeMovie } from "../store";

function MoviePlaylist() {
  const dispatch = useDispatch();
  const moviePlaylist = useSelector((state) => {
    return state.movies;
  });

  const handleMovieAdd = (movie) => {
    dispatch(addMovie(movie));
  };
  const handleMovieRemove = (movie) => {
    dispatch(removeMovie(movie));
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className=" text-slate-400 text-xl md:text-2xl lg:text-4xl">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className=" mt-4 mb-8 sm:left-[40%]  md:left-[46%] px-6 py-2 bg-gradient-to-br from-slate-400 to-slate-600 rounded-xl focus:ring-2 focus:ring-slate-800 hover:bg-gradient-to-tr hover:from-slate-200 hover:to-slate-400 duration-500 hover:scale-105 focus:animate-pulse "
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <div className="text-slate-300 text-[25px] flex justify-center will-change-scroll  h-[650px]">
            <div className="text-bold  flex">
                <ul>{renderedMovies}</ul>
            </div>
        </div>
    </div>
  );
}

export default MoviePlaylist;

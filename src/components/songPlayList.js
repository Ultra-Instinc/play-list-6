import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data";
import { addSong, removeSong } from "../store";

function SongPlaylist() {
  const dispatch = useDispatch();
  const songPlaylist = useSelector((state) => {
    return state.songs;
  });

  const handleSongAdd = (song) => {
    dispatch(addSong(song));
  };
  const handleSongRemove = (song) => {
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="">
      <div className="">
        <h3 className=" text-slate-400 text-xl md:text-2xl lg:text-4xl">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className=" mt-4 mb-8 sm:left-[40%]  md:left-[46%] px-6 py-2 bg-gradient-to-br from-slate-400 to-slate-600 rounded-xl focus:ring-2 focus:ring-slate-800 hover:bg-gradient-to-tr hover:from-slate-200 hover:to-slate-400 duration-500 hover:scale-105 focus:animate-pulse "
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
        <div className="text-slate-300 text-[25px] flex justify-center will-change-scroll h-[650px]">
            <div className="text-bold  flex">
                <ul>{renderedSongs}</ul>
            </div>
        </div>
      
    </div>
  );
}

export default SongPlaylist;

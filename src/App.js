import { useDispatch } from "react-redux";
import { reset } from "./store";
import MoviePlaylist from "./components/moviePlayList";
import SongPlaylist from "./components/songPlayList";

export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
    <div className=" min-h-screen flex justify-center gap-[100px] md:gap-[200px] lg:gap-[500px]">
      <button onClick={() => handleResetClick()} className=" fixed  sm:bottom-[10%] bottom-[0] left-[35%] sm:left-[40%]  md:left-[46%] px-6 py-2 bg-gradient-to-br from-slate-400 to-slate-600 rounded-xl focus:ring-2 focus:ring-slate-800 hover:bg-gradient-to-tr hover:from-slate-200 hover:to-slate-400 duration-500 hover:scale-105 focus:animate-pulse ">
        Reset Both Playlists
      </button>
      <div className="flex duration-500 w-full sm:justify-center">
        <MoviePlaylist/>
      </div>
      
      <div className="flex duration-500 w-full  sm:justify-center">
        <SongPlaylist  />
      </div>
      
    </div>
  );
}

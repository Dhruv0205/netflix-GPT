import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () =>{
    //Fetch data from tmdb api and update store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTION
    );

    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  };

 useEffect(()=>{
 getNowPlayingMovies();
 } ,[]);
};

export default useNowPlayingMovies;
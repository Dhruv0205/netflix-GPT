import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTION } from '../utils/constant';
import { addMovieTrailer } from '../utils/movieSlice';

const VideoBackground = ({ movieId }) => {
 
const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  
const dispatch = useDispatch();  
  
// Fetching trailer video and updating the store with trailer video data

 const getMovieVideo = async () => {
   const data = await fetch(
     "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",
     API_OPTION
   );

   const json = await data.json();
   console.log(json);

   const filterData = json.results.filter((video) => video.type === "Trailer");

   const trailer = filterData.length ? filterData[0] : json.results[0];
   console.log(trailer);
   dispatch(addMovieTrailer(trailer));
 };

 useEffect(()=>{
    getMovieVideo();
 },[]);

  return (
    <div >
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"   
      ></iframe>
    </div>
  );
};

export default VideoBackground;

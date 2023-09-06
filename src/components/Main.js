import { useEffect, useState } from "react";
import Request from "../Request";
function Main() {
  const [movies, setmovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(Request.request_poular);
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      console.log(data);
      setmovies(data.results);
    };
    fetchdata();
  }, []);
  const truncatestring=(str,num)=>{
    if(str?.length>num){
    return str.slice(0,num)+"......"
  }else{
    return str;
  }
}
    
  return (
    <>
      <div className="w-full h-[600px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>

          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div className="absolute w-full top-[20%] p-4 ">
            <h1 className="text-3xl font-bold">{movie?.title}</h1>
            <div className="my-4">
              <button className="border bg-gray-300  text-black py-2 px-5">
                PLay
              </button>
              <button className="border text-white py-2 px-5 ml-4">
                Watch Later
              </button>
            </div>
            <p className="text-gray-300 font-bold">Released:{movie?.release_date}</p>
            <p className="w-full text-gray:200  ">{truncatestring(movie?.overview,100)}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;

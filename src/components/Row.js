import { useEffect, useState } from "react";
import Movie from "./Movie";

function Row({ title, fetchurl ,row }) {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(fetchurl);
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      setmovies(data.results);
    };
    fetchdata();
  }, [fetchurl]);
  const slideleft=()=>{
    var slide=document.getElementById("slider"+row);
    slide.scrollLeft=slide.scrollLeft-500;



  }
  const slideright=()=>{
    var slide=document.getElementById("slider"+row);
    slide.scrollLeft=slide.scrollLeft+500;
    


  }


  return (
    <>
      <h2 className="text-white font-bold text-2xl  ml-4 p-4 ">{title}</h2>
      <div className="relative flex  justify-center items-center group">
        <span onClick={slideleft} className="hidden  group-hover:block">
          {" "}
          <i className=" ml-3 bg-white fa-solid fa-chevron-left opacity-50 hover:opacity-100 px-4 py-3 rounded-3xl  cursor-pointer"></i>
        </span>

        <div
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar "
          id={"slider"+row}
        >
          {movies.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
        </div>
        <span onClick={slideright} className="hidden group-hover:block">
          {" "}
          <i className=" bg-white px-4 py-3 opacity-50  hover:opacity-100 rounded-3xl mr-3  fa-solid fa-chevron-right cursor-pointer hidden "></i>
        </span>
      </div>
    </>
  );
}
export default Row;

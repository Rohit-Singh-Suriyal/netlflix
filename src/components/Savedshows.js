import { useEffect,useState } from "react";
import { UserAuth } from "../context/Authcontext";
import { db } from "../firebase";
//db stands for data base
import { updateDoc,doc,onSnapshot } from "firebase/firestore";

function Savedshows(){
    const[movies,setmovies]=useState([]);
    const {user}=UserAuth();
    const slideleft=()=>{
        var slide=document.getElementById("slider");
        slide.scrollLeft=slide.scrollLeft-500;
    
    
    
      }
      const slideright=()=>{
        var slide=document.getElementById("slider");
        slide.scrollLeft=slide.scrollLeft+500;
        
    
    
      }
      useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
          setmovies(doc.data()?.saveshows);
        });
      }, [user?.email]);

      const movieref=doc(db,"users",`${user?.email}`)
      const deleteshow=async(passed_id)=>{
        try{
          const result=movies.filter((item)=>item.id!==passed_id)
          await updateDoc(movieref,{
            saveshows:result,
          })
        }catch(error){
          console.log(error);
        }
      }
 return(
   <>
   
   <h2 className="text-white font-bold text-2xl  ml-4 p-4 ">My Shows</h2>
      <div className="relative flex  justify-center items-center group">
        <span onClick={slideleft} className="hidden  group-hover:block">
          {" "}
          <i className=" ml-3 bg-white fa-solid fa-chevron-left opacity-50 hover:opacity-100 px-4 py-3 rounded-3xl  cursor-pointer"></i>
        </span>

        <div
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar "
          id={"slider"}
        >
          {movies.map((item,id) => (
             <div  key={id} className="w-[160px] inline-block cursor-pointer relative p-2 ml-7 ml">
                
             <img src={`https://image.tmdb.org/t/p/w500/${item?.img}`}></img>
             <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white hover:opacity-100">
           
             <p className="text-center text-[13px] font-bold h-full flex p-1 justify-center items-center overflow-hidden"> {item?.title}</p>
             <p onClick={()=>deleteshow(item.id)} className="absolute text-gray-300 top-2 right-3"><i class="fa-solid fa-xmark"></i></p>
            
              
               
             </div>
             </div>
          ))}
        </div>
        <span onClick={slideright} className="hidden group-hover:block">
          {" "}
          <i className=" bg-white px-4 py-3 opacity-50  hover:opacity-100 rounded-3xl mr-3  fa-solid fa-chevron-right cursor-pointer hidden "></i>
        </span>
      </div>
   
   
   
   
   
   
   </>





 )




}
export default Savedshows;
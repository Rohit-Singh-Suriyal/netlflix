import { useState } from "react";
import { UserAuth } from "../context/Authcontext";
import {db} from "../firebase"
import { arrayUnion,doc, updateDoc} from "firebase/firestore";
 
function Movie({item}){
const[saved,setsaved]=useState(false);
 const[like,setlike]=useState(false);
 const {user}=UserAuth();
 const movieID=doc(db,'users',`${user?.email}`)
 const saveShow=async()=>{
      if(user?.email){
        setlike(!like)
        setsaved(true);
        await updateDoc(movieID,{
            saveshows:arrayUnion({
                id:item.id,
                title:item.title,
                img:item.backdrop_path
            })
        })
      }else{
        alert("please log in to save a movie");
      }
 }
 return(
  <>
   <div className="w-[160px] inline-block cursor-pointer relative p-2 ml-7 ml">
                
               <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}></img>
               <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white hover:opacity-100">
               {like?<p className="absolute h-full ml-4 mr-2 mt-2" ><i class="fa-solid fa-heart" style={{color: "#07f242"}}></i></p>
               :
               <p onClick={saveShow} className="absolute h-full ml-4 mr-2 mt-2"><i className="fa-regular fa-heart"></i></p>}
               <p className="text-center text-[13px] font-bold h-full flex p-1 justify-center items-center overflow-hidden"> {item?.title}</p>
              
                
                 
               </div>
               </div>
  
  
  
  
  
  
  </>




 )



}
export default Movie;
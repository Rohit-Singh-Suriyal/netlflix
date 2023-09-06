import Savedshows from "../components/Savedshows";

const Account=()=>{
 return(
   <>
   
   <div className="w-full text-white ">
    <img
          className="   w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        ></img>
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]">

        </div>
        <div className="absolute top-[20%] p-4 ">
          <h1 className="text-3xl font-bold text-white">My shows</h1>
        </div>


        <Savedshows/>

    </div>   
   
   
   
   
   
   
   
   
   
   
   
   
   </>









 )








}
export default Account;
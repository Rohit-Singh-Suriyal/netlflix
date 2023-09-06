import { Link } from "react-router-dom";
import { UserAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login=()=>{
  const navigate=useNavigate();
  const [error,seterror]=useState("");
  const [email,setemail]=useState("");
  const[password,setpassword]=useState("")
  const{user, logIn}=UserAuth();
  const handlesubmit=async(e)=>{
      e.preventDefault();
      seterror('')
      try{
      await logIn(email,password)
      navigate('/');

      }catch(error){
          seterror(error.message)
       
      }


  }
 return(
   <>
    <div className="w-full h-screen">
        <img
          className=" sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        ></img>

        <div className="bg-black/60 fixed  top-0 left-0 w-full h-screen p-2">
          <div className="fixed w-[800px] ml-[400px]  px-4 py-24 z-50">
            <div className="max-width-[550px ] h-[600px] mx-auto bg-black/75 text-white">
              <div className="max-w-[320px] mx-auto py-16">
                <h1 className="text-3xl font-bold">Sign In</h1>
                {error? <p className= "text-white p-3 mt-4 bg-red-400">{error}</p>:""}
                <form onSubmit={handlesubmit} className="w-full flex flex-col py-4">
                  <input
                  onChange={(e)=>
                    setemail(e.target.value)
                  }
                    className="p-3 my-3 bg-gray-700 rounded "
                    type="email"
                    placeholder="E-mail"
                    autoComplete="email"
                  ></input>
                  <input
                   onChange={(e)=>
                    setpassword(e.target.value)
                  }
                    className="p-3 my-3 bg-gray-700 rounded "
                    type="password"
                    placeholder="Password"
                  ></input>
                  <button className="bg-red-600 py-3 rounded my-6 font-bold">
                    Sign In
                  </button>
                  <div className="flex justify-between">
                    <p>
                      <input className="mr-2 ml-4" type="checkbox"></input>
                      Remember Me?
                    </p>
                    <p>Need Help?</p>
                  </div>
                  <p className="py-4 "><span className="text-gray-600 font-bold mr-2">New to Netflix?</span><Link to="/signup"><span className="text-[20px] hover:bg-gray-500 px-1 py-1 rounded">Sign Up</span></Link></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
   
   
   
   
   
   
   
   
   </>









 )






}
export default Login;
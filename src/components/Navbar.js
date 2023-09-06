import { Link } from "react-router-dom";
import { AuthContextProvider } from "../context/Authcontext";
import { UserAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate=useNavigate();
  const { user, logOut } = UserAuth();
  //basically its a  object having email key
  console.log(user);
  const logouthandler=async()=>{
     try{
          await logOut();
          navigate('/')
     }catch(error){
       console.log(error);
     }
     

  }

  return (
    <>
      <div className="flex items-center justify-between p-4 z-[100] absolute w-full ">
        <Link to="/">
          <h1 className="text-red-600 font-bold text-4xl cursor-pointer">
            NETFLIX
          </h1>
        </Link>
        {user?.email ? (
          <div>
            <div>
              <Link to="/account">
                {" "}
                <button className="text-white pr-4">Account</button>
              </Link>
              
                <button onClick={logouthandler} className="bg-red-600  text-white px-6 py-2 rounded cursor-pointer">
                  Logout
                </button>
              
            </div>
          </div>
        ) : (
          <div>
           

            <div>
              <Link to="/login">
                {" "}
                <button className="text-white pr-4">Sign In</button>
              </Link>
              <Link to="/signup">
                <button className="bg-red-600  text-white px-6 py-2 rounded cursor-pointer">
                  sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Navbar;

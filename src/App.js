import {Route} from "react-router-dom"
import {Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/Authcontext";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Protected from "./components/Protected";

function App(){
 return(
   <>
  <AuthContextProvider>
    <Navbar/>
    <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/signup" element={<Signup/>}></Route>
     <Route path="/login" element={<Login/>}/>
     <Route path="/account" element={<Protected><Account/></Protected>}></Route>
       
    </Routes>
   
   
   
   
   
   
   
    </AuthContextProvider>
   </>



 )







}
export default App;
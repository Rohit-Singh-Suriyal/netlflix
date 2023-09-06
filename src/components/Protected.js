import {Navigate} from "react-router-dom";
import { UserAuth } from "../context/Authcontext";
//this page is for if we are not loggged in then will not be able to get into the log in page and will jump to the home page directly
function Protected({ children }) {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/"></Navigate>;
  } else {
    return children;
  }
}
export default Protected;

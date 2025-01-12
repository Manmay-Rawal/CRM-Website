import { createBrowserRouter} from "react-router-dom"
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";


export let router = createBrowserRouter([
  {
    path: "/",
    element:(<>
      <Navbar />
      <Home />
      <Footer/>
    </>) 
  },
  {
    path: "/login",
    element:(<>
      <Navbar />
      <Login />
      <Footer/>
    </>) 
  },
  {
    path: "/register",
    element:(<>
      <Navbar />
      <Register />
      <Footer/>
    </>) 
  }
])

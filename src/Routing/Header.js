import { NavLink } from "react-router-dom";

let Header=()=>{
    return(
        <ul>
       <li><NavLink to={"/"}></NavLink></li>
        <li><NavLink to={"/home/"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/xxx"}>Error</NavLink></li>
      </ul>
    )
}
export default Header;
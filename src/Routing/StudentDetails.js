import { useParams } from "react-router-dom";

let StudentDetails=()=>{
    let UserId=useParams().id;
    return(
        <div>
           <h1> Hello Student Number:  {UserId} </h1>
        </div>
    )
}
export default StudentDetails;
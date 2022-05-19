import { NavLink } from "react-router-dom";

let Students=({StudentsList})=>{
    let renderStudents=()=>{
        if(StudentsList.length>0){

            return(
            <div className="students">
                <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
            {
                StudentsList.map((std, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{std.name}</td>
                            <td>{std.age}</td>
                            <td>{std.email}</td>
                            <td >
                                <NavLink className="details" to={"/students/"+std.id}>Details</NavLink>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
            </div>
        )}
        
        
    }
    return (
        <div className="stds">
            <h2>All Students</h2>
            {renderStudents()}
        </div>
    );
}
export default Students;
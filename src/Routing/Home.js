import { Component } from "react";
import Register from "../Component/Register";
import Students from "../Component/Students";
import StudentsList from '../Component/students.json';

class Home extends Component{
    constructor(){
        super();
        this.state={
            AllStudents:StudentsList.students, //original array
            newStd:StudentsList.students
        }
    } 
    addStudent=(std)=>{
        this.setState({AllStudents:[...this.state.AllStudents,std]});
        this.setState({newStd:[...this.state.newStd,std]}); 
    } 
    render(){
        return(
            <div>
                <Register onKey={this.addStudent}/>
                <br/>
                <Students StudentsList={this.state.newStd}/>
            </div>
        )
    }
 
    
}

export default Home;
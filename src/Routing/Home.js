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
        const data=this.state.AllStudents.push(std);
       this.setState({newStd:data});
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
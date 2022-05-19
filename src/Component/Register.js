import { Component } from "react";
import StudentsList from "../Component/students.json";
class Register extends Component{

    constructor(props){
        super(props);
        this.state={
            stdname:"",
            age:"",
            item:[],
            students:StudentsList.students
        }
    }
    add=(e)=>{
        const name=this.state.stdname;
        const age=this.state.age;
        const email=name+"@gmail.com";
        const id=this.state.students.length +1;
        let student={"id":id,"name":name,"age":age,"email":email};
        this.state.students.push(student);
       console.log(student);
       this.setState({item:student});
       this.props.onKey(this.state.students);
    }
    stdName=(e)=>{
        this.setState({stdname:e.target.value});
    }
    stdAge=(e)=>{
        this.setState({age:e.target.value});
    }
    render(){
        return(
            <div className="register">
                <h2>Register</h2>
               <input className="txt"
                type="text"
                value={this.state.stdname}
                name="stdName"
                placeholder="Enter your name"
                onChange={this.stdName}
               />
               <input className="txt"
                type="text"
                value={this.state.age}
                name="age"
                placeholder="Enter your age"
                onChange={this.stdAge}
               />
            <input className="btn-add"
                type="button"
                value="Add"
                onClick={this.add}
               />
              
            </div>
        )
    }
}
export default Register;
import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Search from './Component/Search';
import Students from './Component/Students';
import StudentsList from './Component/students.json';
import Users from './Routing/Users';
import UserDetails from './Routing/StudentDetails';
import About from './Routing/About';
import Error from './Routing/Error';
import Header from './Routing/Header';
import Home from './Routing/Home';
import StudentDetails from './Routing/StudentDetails';

// class App extends Component{

//   constructor(){
//     super();
//     this.state={
//       AllStudents:StudentsList.students, //original array
//       Filterd:StudentsList.students
//     }
//   }


//   ReciveTextChange = (text) => {
//     let FilterdList=this.state.AllStudents.filter((std)=>std.name.toLowerCase().includes(text.toLowerCase()));
//     this.setState({Filterd:FilterdList});
//   }
//   render(){
//   return (
    
//     <div className="App">
//       <Search onKeyChange={this.ReciveTextChange}/>
//       <Students StudentsList={this.state.Filterd}/>
//     </div>
//   );
//   }
// }


let App=()=>{
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        {/* <Route path='/users' element={<Users/>}/> */}
        <Route path='/students/:id' element={<StudentDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;

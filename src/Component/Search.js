import { Component } from "react";

class Search extends Component{

    constructor(props){
        super(props);
        this.state={
            text:"",
        }
    }
    changeTxt=(e)=>{
        this.setState({text:e.target.value});
        this.props.onKeyChange(e.target.value);
    }
    render(){
        return(
            <div>
                <input  className="btn"
                type="text"
                value={this.state.text}
                placeholder="Search.."
                onChange={this.changeTxt}
                 />
            </div>
        );
    }
}
export default Search;
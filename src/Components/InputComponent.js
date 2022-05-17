const { Component } = require("react");

class InputComponent extends Component{

    constructor (){
        super();
        this.state={
            data:"Hi i'm asmaa",
        };
    }
    Reset=()=>{
        this.setState({data:""});
    }
  
    render(){
        return (

            <div>
                <h1>Input Component</h1>
                <input className="textStyle"
                    type="text"
                    value={this.state.data}
                    placeholder="Write anything"
                    onChange={(e)=>{
                        this.setState({data:e.target.value});
                    }}
                />
               <p> Text  : 
                {  this.state.data}
                </p>

                <input className="btn-reset"
                    type="button"
                    value="Reset"
                    onClick={this.Reset}
                />
               
            </div>
        );
    }

}


export default InputComponent;
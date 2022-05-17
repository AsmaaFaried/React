import { Component } from "react";

class ImageComponent extends Component{

   
    constructor(){
        super();
        
        this.state={
            AllImgs:[
                "../images/img1.jpg",
                "../images/img2.jpg",
               "../images/img3.jpg",
                "../images/img4.jpg",
                "../images/img5.jpg",
               "../images/img6.jpg",
               '../images/img7.jpg'
            ],
            index:0
        }
    }

    Prev=()=>{
       
       let currIndex=this.state.index;
       let prevIndex=currIndex === 0? 0 : currIndex - 1;
       this.setState({ImgSrc:this.state.AllImgs[prevIndex],index:prevIndex});
    }

    Next=()=>{
      
       let currIndex=this.state.index;
       let nxtIndex=currIndex === this.state.AllImgs.length -1? this.state.AllImgs.length -1 :currIndex + 1;
       this.setState({ImgSrc:this.state.AllImgs[nxtIndex],index:nxtIndex});
    }

    startSlide=()=>{
        this.countdown = setInterval(this.Slide, 1000);
    }
    Slide=()=>{
        let currIndex=this.state.index;
        let nxtIndex=currIndex === this.state.AllImgs.length -1? 0 :currIndex + 1;
        this.setState({ImgSrc:this.state.AllImgs[nxtIndex],index:nxtIndex});
    }
    
    stopSlide=()=>{
        clearInterval(this.countdown);
    }
   
  

    render(){
        return (
            <div>
                <h2>Image Component</h2>
                <img
                    src={this.state.AllImgs[this.state.index]}
                    alt="Image here"
                />
                 <div>
                
                 <input className="btn prev"
                    type="button"
                    value="<<< Previous"
                    onClick={this.Prev}
                    
                />
                 <input className="btn nxt"
                    type="button"
                    value="Next >>>"
                    onClick={this.Next}
                    
                />
                 <input className="btn sld"
                    type="button"
                    value="Slide"
                    onClick={this.startSlide}
                />
                 <input className="btn stp"
                    type="button"
                    value="Stop"
                    onClick={this.stopSlide}
                />
                 </div>
            </div>


        );
    }

    
}

export default ImageComponent;
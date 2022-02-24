import React,{Component} from 'react';
import InsideClassBox from './InsideClassBox';

class ClassBox extends Component { 
    state={
        displayProp:"box-none",
    }
    clickHandler(){
       let property=(this.state.displayProp ==='box') ? "box-none" : "box";
       this.setState(
            {displayProp:property},
       );
    }

    render() {  
        if(this.state.displayProp==='box'){
            return(
                <div class="class-compoent">
                    <button className="button" onClick={()=>{this.clickHandler()}}>To see styling in class componet</button>
                    <InsideClassBox />
                </div>
            )
        }
        else{
            return(
                <div class="class-compoent">
                    <button className="button" onClick={()=>{this.clickHandler()}}>To see styling in class componet</button>
                </div>
            )
        }
    } 
}
export default ClassBox;
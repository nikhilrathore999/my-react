import React, {Component} from 'react';
const para2 = {
    color: "blue",
}
class InsideFuncBox extends Component {
    render(){
        return(
            <div className="box" id="cls_box">
                <h1 className="box_header">This is created using function componet</h1>
                <p className="para1"> This is done using External CSS</p>
                <p  style={para2}> This is done using Inline CSS</p>
            </div>
        )
    }
}

export default InsideFuncBox;
import React from "react";
import InsideFuncBox from "./FunctionBox";
import './Style.css';


class FunctionBox extends React.Component {
    state = {
        displayProp: "box-none",
    }
    clickHandler = () => {
        let property = (this.state.displayProp === "box") ? "box-none" : "box";
        this.setState({ displayProp: property });
    }
    render() {
        if (this.state.displayProp === "box") {
            return (
                <div className="class-compoent">
                    <button className="button" onClick={() => { this.clickHandler() }}>To see styling in function componet</button>
                    <InsideFuncBox />
                </div>
            )
        }
        else {
            return (
                <div className="class-compoent">
                    <button className="button" onClick={() => { this.clickHandler() }}>To see styling in function componet</button>
                </div>
            )
        }
    }
}
export default FunctionBox;
import React from "react";
import ReactDom from "react-dom";

const time = new Date().getHours();
let greetings;

const customStyle = {
    color:""
};

if (time < 12) {
    greetings = "Good morning";
    customStyle.color = "rosybrown";
}else if(time < 18) {
    greetings = "Good Afternoon";
    customStyle.color = "seagreen";
} else {
    greetings = "Good evening";
    customStyle.color = "royalblue";
}

ReactDom.render(<h1 className="heading" style={customStyle}>{greetings}</h1>, document.getElementById("root"));
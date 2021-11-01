//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.

//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

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
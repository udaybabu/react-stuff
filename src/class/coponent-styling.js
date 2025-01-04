import React from "react";
import "./local.css";

const ComponentStyling = () => {
     let localCss = {
        fontSize:"15px",
        background:"yellow"
     }
    return(<>
     <div style={localCss}>Display local styles with in component</div>
     <div className="externale-css-example">Display styles from external file</div>
    </>)
}

export default ComponentStyling;
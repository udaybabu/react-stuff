import React from "react";
import "./local.css";
class Attributes extends React.Component {
    render(){
        return(<>
            <div className="class-attribute-example"> This react attributes </div>
            <div>
             <label name="user" >UserName</label>
             <input type="text" htmlFor="user"/>
            </div>
         </>)
    }
}

const AttributesExpressions = () => {

    const  expressionHandler = () => {
        return(<>
        <h3>This is react expression example</h3>
        </>)
    }
    return(<>
       <Attributes/>
       {
        expressionHandler()
       }
    </>)
}
export default AttributesExpressions
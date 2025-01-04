import React, { useState } from "react";

class ClassComponentApp extends React.Component {
    constructor() {
        super();
        this.changeValue = this.changeValue.bind(this);
    }
    state = {
        count:0
    }
    changeValue(type){
         switch(type){
            case "Increse":
                this.setState({...this.state, count:this.state.count+1},()=>{
                    console.log("state value inside:", this.state.count);
                });
                console.log("state value outside:", this.state.count);
                break;
            case "Decrese":
                this.setState((pre) => {
                    pre.count = pre.count - 1;
                    return pre;
                }, () => {
                    console.log("decrement value :", this.state.count);
                });
                break;
            default: 
                break;       
         }
    }
    render() {
        return (<>
            <div>
               <button onClick={() => this.changeValue("Increse")}>+</button>{this.state.count}<button onClick={() => this.changeValue("Decrese")}>-</button>
            </div>
        </>)
    }
}

const FunctionalComponentApp = () => {
    let [count, setCount]=useState(0);
    const changeValue = (type) => {
        switch(type){
            case "Increse":
                setCount(count+1)
                break;
            case "Decrese":
                setCount(count-1)
                break;
            default: 
                break;       
         }
    }
    return (<>
        <div>
           <button onClick={() => changeValue("Increse")}>+</button>{count}<button onClick={() => changeValue("Decrese")}>-</button>
        </div>
    </>)
}

const CounterApp = () => {

    return (<>
          <ClassComponentApp />
          <FunctionalComponentApp />
    </>)
}
export default CounterApp;
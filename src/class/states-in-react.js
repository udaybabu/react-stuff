import React, { useEffect, useState } from "react";

const FunctionalComponent = () => {
    let [empName, setEmpName] = useState("Praveen");

    return (<><div>change state by using useState:{empName}</div>
        <div>
            <input type="text" placeholder="Please enter name" value={empName} onChange={(e) => setEmpName(e.target.value)} />
        </div></>)
}

class ClassComponent extends React.Component {
    state = {
        place:"piler",
        age:29
    }
    constructor(){
        super();
        this.updateState = this.updateState.bind(this);
    }
     updateState(e){
       this.setState({...this.state, place:e.target.value})
    }
    render() {
        return (<>
        <div>This is class component, set state , place is:{this.state.place}</div>
        <div>
            <input placeholder="Change Place" value={this.state.place} onChange={(e) =>this.updateState(e)}/>
        </div>
        </>)
    }
}

const StatesInReact = () => {

    useEffect(() => {

    }, [])
    return (<>
        <FunctionalComponent />
        <ClassComponent />
    </>)
}
export default StatesInReact;
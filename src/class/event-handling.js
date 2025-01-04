import React from "react";
import ExportImport from "./export-import";

class ClassComponent extends React.Component {
    constructor(){
     super();
     this.classAction = this.classAction.bind();
    }
     classAction(e) {
        console.log(e.target.value);
    }
    render() {
        return (<>
        <button onClick={this.classAction}>ClassComponentAction</button>
        </>)
    }
}

const FunctionalComponent = () => {
    const handleClick = (e) => {
     console.log(e.target.value);
    }
    return (<>
        <button onClick={handleClick} value={"Action"}>FunctionalComponentAction</button>
    </>)
}

const EventHandling = () => {
    return (<>
        <ClassComponent />
        <FunctionalComponent />
    </>)
}
export default EventHandling;
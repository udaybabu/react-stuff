import React from "react";
const FunctionalComponent = ({ name, age }) => {
    return (<>
        <div>name:{name} ---age:{age}</div>
    </>)
}

class ClassComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (<>
        <label>test</label>
            <div>Student name:{this.props.name } --- place:{this.props.place}</div>
        </>)
    }
}

let PropsDestrecturing = () => {
    let employee = {
        name: "mahesh",
        age: 30,
        place: "chittoor",
        company: "CTS"
    }

    let student = {
        name:"ramana",
        age:20,
        college:"sri chitanya",
        place:"piler"
        }

    return (<>
        <FunctionalComponent {...employee} />
        <ClassComponent {...student} />
    </>)
}

export default PropsDestrecturing;
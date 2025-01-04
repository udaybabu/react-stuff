import React from "react";
const FunctionalComponent = ({name}) => {
    return (<>
        <h3>This is functional component username is:{name}</h3>

    </>)
}

class ClassComponent extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (<>
            <h3>This is functionale component employee name is:{this.props.empName}</h3>
        </>)
    }
}

const ComponentTypes = () => {
    const user = {
        name: "jahn",
        place: "bangalore",
    }
    const employee = {
        empName: "pratap",
        company: "hcl"
    }
    return (<>
        <FunctionalComponent {...user} />
        <ClassComponent {...employee} />
    </>)

}
export default ComponentTypes
import React from "react";
const FIrstWayDecleration = () => {
    return (<>
        this is the fragement decleration.
    </>)
}
const SecondWayDecleration =  () => {
    return (<React.Fragment>
        this is another way to declare fragement.
    </React.Fragment>)
}

class Fragements extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (<>
                <FIrstWayDecleration />
                <SecondWayDecleration />
        </>)
    }
}
export default Fragements;
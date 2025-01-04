import React from "react";

function NormalFunctionComponent() {
    return (<div>
        This is normal function component
    </div>)
}
const ArrowFunctionComponent = () => {
    return (<div>
        This is arrow function component
    </div>)
}
const VariabeFunctionComponent = function () {
 return(<div>
    This is variable function component.
 </div>)
}
const WaysToCreateFunctionalComponents = () => {
    return (<>
        <NormalFunctionComponent />
        <ArrowFunctionComponent />
        <VariabeFunctionComponent />
    </>)
}

export default WaysToCreateFunctionalComponents;
import React from "react";

class TestChildProps extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (<>
            <div style={{
                ["margin-left"]:"15px",
                color:"red"
            }}>{this.props.children}</div>
        </>)
    }
}

const ChildProps = () => {
    return (<>
        <TestChildProps>
            <button>Angular</button>
            <button>React</button>
            <button>ViewJS</button>
        </TestChildProps>
    </>)
}
export default ChildProps;
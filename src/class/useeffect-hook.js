import React, { useEffect, useState } from "react"

let WithOutArguments = ({type}) => {
    useEffect(() => {
        withoutAction();
    })
    const withoutAction = () => {
        console.log("WithOutArgumentsAction clicked")
    }

    return (<>
        <div>It will render every time</div>
        <button>WithOutArgumentsAction</button>
    </>)
}

let WithEmptyArguments = ({type}) => {
    useEffect(() => {
        withEmptyAction();
    }, [])

    const withEmptyAction = () => {
        console.log("WithEmptyArgumentsAction clicked")
    }

    return (<>
        <div>It will render only one time</div>
        <button>WithEmptyArgumentsAction</button>
    </>)
}

let WithArgumants = ({ type }) => {
    useEffect(() => {
        withArgumentsAction()
    }, [type])

    const withArgumentsAction = () => {
        console.log("WithArgumentsAction clicked")
    }

    return (<>
        <div>It will render when props got changed</div>
        <button>WithArgumentsAction</button>
    </>)
}

let UseeffectHook = () => {
    const [testValue, updateValue] = useState(null);

    return (<>
        <div>
            <WithOutArguments type={testValue} />
            <WithEmptyArguments type={testValue} />
            <WithArgumants type={testValue} />
        </div>
        <div>
            UserName: <input type="text" value={testValue} onChange={(e) => updateValue(e.target.value)} />
        </div>
    </>)
}
export default UseeffectHook;
import React, { Component } from "react";

class EmployeeComponent extends Component {
    constructor() {
        super()
        console.log("Inside constructor");
        this.state = {
            count: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("get derived state from props");
        return {
            ...state, count: props.data + 10
        }
    }

    static getDerivedStateFromError(error){
      
    }

    getSnapshotBeforeUpdate(preprops,prestate) {
        console.log("inside get snapshot before update");
        return null;
    }
    componentDidUpdate() {
        console.log("inside did update");
    }

    shouldComponentUpdate() {
        console.log("inside should component update.")
        return true;
    }

    render() {
        console.log("Inside render");
        return (<>
            <div>Count is: {this.state.count}</div>
            <button onClick={() => {
                this.setState({ count: this.state.count + 10 })
            }}>Increment</button>
        </>)
    }

    componentDidMount() {
        console.log("component did mount");
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    }

    componentWillUnmount(){
        console.log("Inside component will unmount")
    }


}


class ComponentLifecycle extends Component {
    // Mount
    // Update
    // UnMount
    constructor(){
        super()
        this.state = {
         isActive: true
        }
    }
    render() {
        return (<><div>
            {this.state.isActive && <EmployeeComponent data={20}/>}
        </div>
            
            <button onClick={() => {
                this.setState({isActive:!this.state.isActive})
            }}>ActionClick</button>
        </>)
    }

}
export default ComponentLifecycle;
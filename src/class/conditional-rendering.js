import React from "react";


class ConditionalRendering extends React.Component {

    state = {
        ternaryTest: true,
        shortcircutTest:false
    }
    shortCircutHandler(){
       return(<div>This is true short circut operator</div>)
    }
    render() {
        return (<>
            <label>This is ternary operator</label>
            <div>
                {this.state.ternaryTest ? (<div>This is true</div>) : (<div>This is false</div>)
                }
            </div>
            <label>This is short circut operator</label>
            <div>
               {this.state.shortcircutTest && <div>This is true short circut operator</div>

               }
            </div>
        </>)
    }

}
export default ConditionalRendering;
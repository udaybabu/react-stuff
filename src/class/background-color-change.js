import React from "react";

class BackgroundColorChange extends React.Component {
    constructor() {
        super();
        this.changeColor = this.changeColor.bind(this);
    }
    state = {
        color:null
    }
    changeColor(e){
      document.body.style.background = e.target.value;
    }

    render() {
        return (<>
            <div>
               <input type="color" value={this.state.color} onChange={(e) => this.changeColor(e)}/>
            </div>
        </>)
    }
}

export default BackgroundColorChange;
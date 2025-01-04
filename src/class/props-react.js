import React from "react";

const FunctionalProps = (p) => {
return(<>
<h2>This is functional props name:{p.name} --- palce:{p.place}</h2>
</>)
}
class ClassProps extends React.Component{
    constructor(props){
      super()
    }
  render(){
    return(<>
    <h3>This is class props empname:{this.props.empname} --- age:{this.props.age}</h3>
    </>)
  }
}

const PropsReact = () => {
   
    return(<>
    <ClassProps empname="naveen" age={30} />
    <FunctionalProps   name="uday" place="piler" />
    </>)
}
export default PropsReact;
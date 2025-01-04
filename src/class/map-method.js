import React from "react"; 

class MapMethod extends React.Component {
    state = {
        languages:["html","css","javascript","react"]
    }
  
 render(){
    return(<>
    <ul>
    {  
        this.state.languages.map(language => (
         <li>{language}</li>
        ))   
    }
    </ul>
      
    </>)
 }
}
export default MapMethod
import React, { useEffect } from "react";
import PropTypes from "prop-types";

const User = ({name,age,isActive}) => {
    useEffect(() => {
        console.log("is active:",isActive)
    })
   return(<>
   <div>name:{name} - age:{age} - active:{isActive}</div>
   </>)
}

User.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    isActive:PropTypes.bool
}

User.defaultProps={
   name:"NA",
   age:0,
   isActive: false
}

const DefaultProps = () => {
   return(<>
       <User />
   </>)
}
export default DefaultProps;
import React from "react";
import PropTypes from "prop-types";

const User = ({ name, age, isAdmin }) => {
    return (<>
        <div>User name:{name} - age:{age} - IsAdmin:{isAdmin}</div>
    </>)
}

User.propTypes={
 name:PropTypes.string.isRequired,
 age:PropTypes.number.isRequired,
 isAdmin:PropTypes.bool
}

User.defaultProps={
    name:"NA",
    age:0,
 isAdmin:false
}

const PropsTypes = () => {

    return (<>
        <User name={"Lokesh"} age={32} />
        <User />
    </>)
}
export default PropsTypes;
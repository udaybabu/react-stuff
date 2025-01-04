import React from "react";

function PropsDrilling() {

    return (<>
        <Home name="Lokesh" />
    </>)
}
export default PropsDrilling;

function Home({ name }) {
    return (<>
        <Profile name={name} />
    </>)
}

function Profile({ name }) {
    return (<>
        <Info name={name} />
    </>)
}

function Info({ name }) {
    return (<>
        <div>This is props drilling example:{name}</div>
    </>)
}
import React from "react";
import { Outlet, Link, useParams, useLocation } from "react-router-dom";

export const RouteParameters = ({match}) => {
    const {userId} = useParams();
  return(<>
  <div>
    This is route parameters:{userId}
  </div>
  </>)
}

export const QueryParameters = () => {
    let uselocation = useLocation();
    let queryParames = new URLSearchParams(uselocation.search);
    let name = queryParames.get("name");
    let place = queryParames.get("place")
  return(<>
  <div>Username:{name} --- Place:{place}</div>
  </>)
}

const RouteQueryParameters = () => {

    return (<>
    <div>
        <button><Link to="routeparem/10">Route Parameters</Link></button>
        <button><Link to="queryparam?name=Uday&place=Piler">Query Parameters</Link></button>
        <Outlet />
    </div>
    </>)

}
export default RouteQueryParameters;
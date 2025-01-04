import React from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

export const LinkComponent = () => {
    return (<>
        <div>Link component is loaded</div>
    </>)
}

export const AnchorComponent = () => {
  return (<>
  <div>Anchor component is loaded</div>
  </>)
}

const LinkAndAnchor = () => {
    return (<>
        <div>
            <button><Link to="link">Link tag</Link></button>
            <button><a href="anchor">Anchor tag</a></button>
        </div>
        <Outlet />
    </>)
}
export default LinkAndAnchor;
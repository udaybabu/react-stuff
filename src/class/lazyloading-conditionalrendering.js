import React, { lazy, Suspense } from "react";
// import Profile from "./utilty/profile";

const Profile = lazy(() => import('./utilty/profile'));

const LazyloadingConditional = () => {

    return (<>
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Profile data={"naveen"} />
            </Suspense>
        </div>
    </>)
}

export default LazyloadingConditional;
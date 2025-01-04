import React from "react";

const ListsKeys = () => {
    let users = [{ id: 1, name: "narayana" }, { id: 2, name: "balaji" }, { id: 3, name: "aadhi" }];

    return (<>
        <div>
            <ul>
                {users && users.length > 0 && users.map(user => {
                    return (<li key={user.id}>{user.name}</li>)
                })
                }
            </ul>
        </div>
    </>)
}
export default ListsKeys
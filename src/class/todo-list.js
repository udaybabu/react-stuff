import React, { useState } from "react";

const Todolist = () => {
  const [names, setNames] = useState([]);
  const [name, setName] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const addHandler = () => {
    if(isEdit){
        let items = [...names];
        items[selectedIndex] = name;
        setNames([...items]);
        setName("");
        setIsEdit(false);
    } else{
        setNames([...names,name]);
        setName("");
    }
     
  }

  const onEditAction = (index) => {
     let selectedItem = names.find((item, i, arr) => i === index);
     setName(selectedItem);
     setIsEdit(true);
     setSelectedIndex(index);
  }

  const onDeleteAction = (index) => {
    const deletedItems = names.filter((name, i, arr) => i !== index);
    setNames([...deletedItems]);
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addHandler}>Add</button>
      </div>
      <div>
        { names && names.length>0 && names.map((name,index) => (
            <div key={index}>
                <label>{name}</label>
                <button onClick={() => onEditAction(index)}>Edit</button>
                <button onClick={() => onDeleteAction(index)}>Delete</button>
            </div>
        ))

        }

      </div>
    </>
  );
};
export default Todolist;

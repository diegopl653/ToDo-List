import { useState } from "react";

import "./TaskCard.css";

interface Props {
  value: string;
  id: number;
  onChange(id: number): void;
  onClick(id: number): void;
  checked: boolean;
  Edit(id: number): void;
}

function TaskCard(props: Props) {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    props.onChange(props.id);
  };

  // const handleChecked = () => {
  //   if(props.checked) {
  //     return props.checked;
  //   }
  // }

  const handleRemove = () => {
    props.onClick(props.id);
    setMenu(false);
  };

  const OpenMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="card">
      <div className="content">
        <input
          type="checkbox"
          checked={props.checked}
          id={props.id.toString()}
          onChange={handleChange}
        />
        <label htmlFor={props.id.toString()}>{props.value}</label>
      </div>
      <div className="threedots" onClick={OpenMenu}>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      {menu && (
        <div className="menu">
          {props.checked === false && (
            <>
              <option
                value="Edit"
                onClick={() => {
                  setMenu(false);
                  props.Edit(props.id);
                }}
              >
                Edit
              </option>
              <hr />
            </>
          )}
          <option value="Remove" onClick={handleRemove}>
            Remove
          </option>
        </div>
      )}
    </div>
  );
}

export default TaskCard;

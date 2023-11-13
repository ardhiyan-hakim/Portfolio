import { useState } from "react";
import "./ToggleButtonComp.scss";

const ToggleButtonComp = ({ setOpen }) => {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => {
        setOpen((prev) => !prev);
        setActive((prev) => !prev);
      }}
    >
      <div className={`button-container ${active ? "active" : "closed"}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};

export default ToggleButtonComp;

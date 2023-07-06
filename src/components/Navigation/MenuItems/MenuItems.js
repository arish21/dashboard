import React, { useState } from "react";
import css from "./MenuItems.module.scss";

const MenuItems = (props) => {
  const { icon: Icon, text } = props;

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };
  return (
    <div className={css.wrapper}>
      <div className={css.mitem}>
        <button onClick={handleClick} onBlur={handleBlur} className={isActive ? css.mbuttonclick : css.mbutton}>
          <div className={css.bIcon}>
            <Icon />
          </div>
          <div className={css.bText}>{text}</div>
        </button>
      </div>
    </div>
  );
};

export default MenuItems;

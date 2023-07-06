import React from "react";
import css from "./Navigation.module.scss";
import logo from "../../Images/logo1.png";

const Navigation = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.upperElements}>
        <img src={logo} alt="Logo"></img>
      </div>
      <div className={css.middleElements}>Menu Options</div>
      <div className={css.lowerElements}>Settings</div>
    </div>
  );
};

export default Navigation;

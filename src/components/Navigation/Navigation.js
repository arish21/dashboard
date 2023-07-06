import React from "react";
import css from "./Navigation.module.scss";
import logo from "../../Images/logo1.png";
import MenuItems from "./MenuItems/MenuItems";
import {
  BiHomeAlt2,
  BiWalletAlt,
  BiDiamond,
  BiTargetLock,
  BiDollar,
  BiLayer,
  BiBookOpen,
  BiBrushAlt
} from "react-icons/bi";

const Navigation = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.upperElements}>
        <img src={logo} alt="Logo"></img>
      </div>
      <div className={css.middleElements}>
        <MenuItems icon={BiHomeAlt2} text="Overview" />
        <MenuItems icon={BiWalletAlt} text="Wallet" />
        <MenuItems icon={BiDiamond} text="Premium Posts" />
        <MenuItems icon={BiTargetLock} text="Sales" />
        <MenuItems icon={BiDollar} text="Tips" />
        <MenuItems icon={BiLayer} text="Transcations" />
      </div>
      <div className={css.lowerElements}>
        <MenuItems icon={BiBookOpen} text="Help & Support" />
        <MenuItems icon={BiBrushAlt} text="Dark Mode" />
      </div>
    </div>
  );
};

export default Navigation;

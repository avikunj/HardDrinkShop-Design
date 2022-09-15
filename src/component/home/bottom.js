import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Home from "@mui/icons-material/Home";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GroupAddSharpIcon from "@mui/icons-material/GroupAddSharp";
import "./home.scss";
import { Link } from "react-router-dom";
const Bottom = () => {
  return (
    <div className="bottomMenu">


    <Tabs aria-label="icon label tabs example" centered>
    
      <Tab  label="Add to cart" />
   
    </Tabs>
    </div>
  );
};
export default Bottom
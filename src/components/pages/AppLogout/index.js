import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "../../../middleware/login";
import { Redirect } from "react-router";

const AppLogout = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  if (!isLoggedIn(user)){
    return <Redirect push to="/home" />  
  } else {
    dispatch({ type: "LOGOUT"});
  }
};

export default AppLogout;

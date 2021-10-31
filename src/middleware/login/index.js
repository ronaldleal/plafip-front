const isLoggedIn = (stateUser) => {
  let user;
  if (isValidStateUser(stateUser)) {
    user = stateUser;
  } else {
    const entry = localStorage.getItem("user");
    user = entry ? JSON.parse(entry) : entry;
  }
  if (user) {
    const token = parseJwt(user.token);
    const loggedIn = token.exp * 1000 > Date.now();
    if (!loggedIn) {
      localStorage.removeItem("user");
    }
    return token.exp * 1000 > Date.now();
  } else {
    return false;
  }
};

const isValidStateUser = (user) => {
  if (user &&
    user.correo &&
    user.correo.lenght > 0 &&
    user.token &&
    user.token.lenght > 0) {
     return true;   
  } else {
    return false;
  }
};

const parseJwt = (token) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};

export { isLoggedIn };

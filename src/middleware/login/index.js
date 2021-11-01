const isLoggedIn = (stateUser) => {
  let user;
  if (isValidStateUser(stateUser)) {
    user = stateUser;
  } else {
    const entry = localStorage.getItem("user");
    user = entry ? JSON.parse(entry) : entry;
  }
  if (user && user.token !== undefined) {
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

const getUserId = (stateUser) => {
  let user;
  if (isValidStateUser(stateUser)) {
    user = stateUser;
  } else {
    const entry = localStorage.getItem("user");
    user = entry ? JSON.parse(entry) : entry;
  }

  return user.id;
};

const isValidStateUser = (user) => {
  if (
    isPropertyValid(user, "correo") &&
    isPropertyValid(user, "token") &&
    isPropertyValid(user, "id")
  ) {
    return true;
  } else {
    return false;
  }
};

const isValidUser = (user) => {
  if (
    isPropertyValid(user, "correo") &&
    isPropertyValid(user, "token") &&
    isPropertyValid(user, "usuario") &&
    isPropertyValid(user, "nombre")
  ) {
    return user;
  } else {
    return JSON.parse(localStorage.getItem("user"));
  }
};

const isPropertyValid = (obj, property) => {
  return obj && obj[property] && obj[property].lenght > 0;
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

export { isLoggedIn, isValidUser, getUserId };

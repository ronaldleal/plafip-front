import { createStore } from "redux";

const INITIAL_STATE = {
  user: {
    nombre: "",
    correo: "",
    usuario: "",
    token: "",
  },
  loggedIn: false,
};

function plafip(state, action) {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem("user", JSON.stringify(action.value));
      return {
        ...state,
        user: {
          correo: action.value.correo,
          token: action.value.jwt,
        },
        loggedIn: true,
      };
    }
    case "LOGOUT": {
      localStorage.removeItem("user");
      return {
        ...state,
        user: {
          correo: "",
          token: "",
        },
        loggedIn:false
      }
    }
    default: {
      return { ...state };
    }
  }
}

const store = createStore(plafip, INITIAL_STATE);

export default store;

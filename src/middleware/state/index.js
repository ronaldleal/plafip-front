import { createStore } from 'redux';

const INITIAL_STATE = {
    user: {
        nombre: "",
        correo: "",
        email: "",
        token: "",
    }
};

function plafip(state, action) {
    console.log("action => ", action);
    switch(action.type) {
        case "LOGIN": {
            localStorage.setItem("user", action.response);
            return {
                ...state,
                user: {
                   email: action.response.email,
                   token: action.response.token     
                }
            };
        }
    }
};

const store = createStore(plafip, INITIAL_STATE);

export default store;
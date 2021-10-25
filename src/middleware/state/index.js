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
    switch(action.type) {
        case "LOGIN": {
            localStorage.setItem("user", JSON.stringify(action.value));
            return {
                ...state,
                user: {
                   email: action.value?.correo,
                   token: action.value?.token     
                }
            };
        } 
        default: {
            return { ...state };
        }
    }
};

const store = createStore(plafip, INITIAL_STATE);

export default store;
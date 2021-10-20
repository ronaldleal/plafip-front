import client from "./provider";

function doSignIn(user){   
    const promise = client.post("sign-in", user)
    .then(response => { 
        return response.data;
    }).catch(err => {
        console.error("There was an error with the operation", err);
        return {
          "token": "",
          "email": ""
        };
    }); 
    return Promise.resolve(promise);
}

function doSignUp(user){
    return client.post("sign-up", user)
    .then(response => {
        if(response.status === 200) {
           return {
               "email": user.email,
               "nombre": user.nombre,
               "usuario": user.usuario
           }; 
        } 
    })
    .catch(err => {
        console.log("Hubo un error en la operacion ", err)
    });
}

export { doSignIn, doSignUp };
import client from "./provider";

function doSignIn(user){
    try {
        const response = client.post("sign-in", user)
        return Promise.resolve(response).then(value => {
            return {
                correo: value.data.correo,
                token: value.data.jwt
            }
        });
    } catch (err){
        console.error("There was an error with the operation", err);
        return {
          "token": "",
          "correo": ""
        };
    }   
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
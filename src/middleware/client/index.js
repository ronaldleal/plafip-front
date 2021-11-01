import client from "./provider";

function doSignIn(user) {
  try {
    const response = client.post("sign-in", user);
    return Promise.resolve(response).then((value) => {
      return {
        correo: value.data.correo,
        token: value.data.jwt,
        id: value.data.id,
      };
    });
  } catch (err) {
    console.error("There was an error with the operation", err);
    return {
      token: "",
      correo: "",
    };
  }
}

function doSignUp(user) {
  return client
    .post("sign-up", user)
    .then((response) => {
      if (response.status === 200) {
        return {
          email: user.email,
          nombre: user.nombre,
          usuario: user.usuario,
        };
      }
    })
    .catch((err) => {
      console.log("Hubo un error en la operacion ", err);
    });
}

const getMovements = (userId) => {
  try {
    const response = client.get(`/movements/users/${userId}`);
    return Promise.resolve(response).then((response) => {
      const data = response.data;
      return data.map((movement) => {
        return {
          id: movement.id,
          date: movement.fecha,
          type: movement.tipo,
          amount: movement.monto,
          description: movement.descripcion,
        };
      });
    });
  } catch (err) {
    console.error("There was an error with the operation", err);
    return [];
  }
};

const getBalance = (userId) => {
  try {
    const response = client.get(`/movements/balance/users/${userId}`);
    return Promise.resolve(response).then((response) => {
      return {
        ingresos: response.data.ingresos,
        egresos: response.data.egresos,
      };
    });
  } catch (err) {
    console.error("There was an error with the operation", err);
    return {};
  }
};

const addMovement = (movement) => {
  return client
    .post("/movements", movement)
    .then((response) => {
      if (response.status === 200) {
        return true;
      }
    })
    .catch((err) => {
      console.log("Hubo un error en la operacion ", err);
      return false;
    });
};

const deleteMovement = (movement) => {
  return client
    .post(`/movements/delete/${movement.id}`)
    .then((response) => {
      if (response.status === 200) {
        return true;
      }
    })
    .catch((err) => {
      console.log("Hubo un error en la operacion ", err);
      return false;
    });
};

const updateMovement = (movement) => {
  return client
    .post("/movements/update", movement)
    .then((response) => {
      if (response.status === 200) {
        return true;
      }
    })
    .catch((err) => {
      console.log("Hubo un error en la operacion ", err);
      return false;
    });
};

const createMovement = (movement) => {
  return client
    .post("/movements", movement)
    .then((response) => {
      if (response.status === 200) {
        return true;
      }
    })
    .catch((err) => {
      console.log("Hubo un error en la operacion ", err);
      return false;
    });
};

export {
  doSignIn,
  doSignUp,
  getBalance,
  getMovements,
  addMovement,
  deleteMovement,
  updateMovement,
  createMovement,
};

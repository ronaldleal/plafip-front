import { getUserId } from "../login";

const upsertMovement = (action, user) => {
  const event = action.event;
  const form = action.event.currentTarget;

  event.preventDefault();
  event.stopPropagation();

  const index = action.id === undefined ? 0 : action.id;

  const movement = {
    userId: getUserId(user),
    fecha: form.elements[`input_movement_date_${index}`].value,
    tipo: form.elements[`input_movement_type_${index}`].value,
    monto: form.elements[`input_movement_amount_${index}`].value,
    descripcion: form.elements[`input_movement_description_${index}`].value,
  };

  if (action.type === "Actualizar Movimiento") {
    movement["id"] = action.id;
  }

  return movement;
};

const refreshPage = (innerState) => {
  const state = { ...innerState };
  state["getMovements"] = true;
  state["getBalance"] = true;
  return state;
};

const isValidAttribute = (innerState, property) => {
  return (
    innerState !== undefined &&
    innerState[property] &&
    Object.keys(innerState[property]).length > 0
  );
};

export { upsertMovement, refreshPage, isValidAttribute };

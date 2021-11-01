import React from "react";
import DeleteModal from "../DeleteModal";
import UpsertModal from "../UpsertModal";

const AppMovementItem = ({ movement, updateHandler, deleteHandler }) => {
  return (
    <>
      <tr key={`movement_${movement.id}`}>
        <th
          key={`id_movement_id_${movement.id}`}
          name={`movement_id_${movement.id}`}
        >
          {movement.id}
        </th>
        <th
          key={`id_movement_date_${movement.id}`}
          name={`movement_date_${movement.id}`}
        >
          {movement.date}
        </th>
        <th
          key={`id_movement_type_${movement.id}`}
          name={`movement_type_${movement.id}`}
        >
          {movement.type}
        </th>
        <th
          key={`id_movement_amount_${movement.id}`}
          name={`movement_amount_${movement.id}`}
        >
          {movement.amount}
        </th>
        <th
          key={`id_movement_description_${movement.id}`}
          name={`movement_description_${movement.id}`}
        >
          {movement.description}
        </th>
        <th
          key={`id_movement_update_${movement.id}`}
          name={`movement_update_${movement.id}`}
        >
          <UpsertModal
            movement={movement}
            operation={"Actualizar Movimiento"}
            action={"Actualizar"}
            confirmation={"Guardar cambios"}
            variant={"outline-info"}
            handler={updateHandler}
          />
        </th>
        <th name={`movement_delete_${movement.id}`}>
          <DeleteModal movement={movement} handler={deleteHandler} />
        </th>
      </tr>
    </>
  );
};

export default AppMovementItem;

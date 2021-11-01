import React from "react";
import { Table } from "react-bootstrap";
import AppMovementItem from "../AppMovementItem";

const AppMovementsTable = ({ movements, updateHandler, deleteHandler }) => {
  return (
    <Table>
      <thead key={"table-header"}>
        <tr key={"header-row"}>
          <th key={"movement-id"}>#</th>
          <th key={"movement-date"}>Fecha</th>
          <th key={"movement-type"}>Tipo</th>
          <th key={"movement-amount"}>Monto</th>
          <th key={"movement-description"}>Descripcion</th>
          <th key={"movement-update"}>Actualizar</th>
          <th key={"movement-delete"}>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {movements !== undefined &&
          movements.length > 0 &&
          movements.map((movement) => (
            <AppMovementItem
              key={`movement-item-${movement.id}`}
              movement={movement}
              updateHandler={updateHandler}
              deleteHandler={deleteHandler}
            />
          ))}
      </tbody>
    </Table>
  );
};

export default AppMovementsTable;

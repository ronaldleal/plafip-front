import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  createMovement,
  deleteMovement,
  updateMovement,
  getBalance,
  getMovements,
} from "../../../middleware/client";
import { getUserId } from "../../../middleware/login";
import {
  isValidAttribute,
  refreshPage,
  upsertMovement,
} from "../../../middleware/movement";
import AppBalance from "./AppBalance";
import AppMovementsTable from "./AppMovementsTable";

const AppMovements = () => {
  const user = useSelector((state) => state.user);
  const [innerState, setInnerState] = useState({
    movements: [],
    balance: {},
    toUpdate: {},
    toDelete: {},
    toCreate: {},
    getMovements: true,
    getBalance: true,
  });

  const upsertHandler = useCallback(
    (action) => {
      const movement = upsertMovement(action, user);
      const state = { ...innerState };
      if (movement.id === undefined) {
        state["toCreate"] = movement;
      } else {
        state["toUpdate"] = movement;
      }
      setInnerState(state);
    },
    [innerState, user]
  );

  const deleteHandler = useCallback(
    (action) => {
      const id = action.id;
      const state = { ...innerState };
      state["toDelete"] = { id: id };
      setInnerState(state);
    },
    [innerState]
  );

  useEffect(() => {
    if (
      innerState !== undefined &&
      (innerState.getMovements === undefined ||
        innerState.getMovements === true)
    ) {
      getMovements(getUserId(user)).then((response) => {
        const state = { ...innerState };
        state["movements"] = response;
        state["getMovements"] = false;
        setInnerState(state);
      });
    } else if (
      innerState !== undefined &&
      (innerState.getBalance === undefined || innerState.getBalance === true)
    ) {
      getBalance(getUserId(user)).then((response) => {
        const state = { ...innerState };
        state["balance"] = response;
        state["getBalance"] = false;
        setInnerState(state);
      });
    } else if (isValidAttribute(innerState, "toUpdate")) {
      updateMovement(innerState.toUpdate).then((response) => {
        if (response === true) {
          const state = refreshPage(innerState);
          state["toUpdate"] = {};
          setInnerState(state);
        }
      });
    } else if (isValidAttribute(innerState, "toDelete")) {
      deleteMovement(innerState.toDelete).then((response) => {
        if (response === true) {
          const state = refreshPage(innerState);
          state["toDelete"] = {};
          setInnerState(state);
        }
      });
    } else if (isValidAttribute(innerState, "toCreate")) {
      createMovement(innerState.toCreate).then((response) => {
        if (response === true) {
          const state = refreshPage(innerState);
          state["toCreate"] = {};
          setInnerState(state);
        }
      });
    }
  }, [innerState, setInnerState, user]);

  return (
    <>
      <AppBalance balance={innerState.balance} handler={upsertHandler} />
      <AppMovementsTable
        movements={innerState.movements}
        updateHandler={upsertHandler}
        deleteHandler={deleteHandler}
      />
    </>
  );
};

export default AppMovements;

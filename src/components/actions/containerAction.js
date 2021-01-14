import {
  ADD_CONTAINER,
  REMOVE_CONTAINER,
  SUB_QUANTITY,
  ADD_QUANTITY,
  CHOOSE_VESSEL,
} from "./actionTypes";

export const addContainer = (id, ship) => {
  return {
    type: ADD_CONTAINER,
    id,
    ship,
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_CONTAINER,
    id,
  };
};

export const subtractQuantity = (id, ship) => {
  return {
    type: SUB_QUANTITY,
    id,
    ship,
  };
};

export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};
export const chooseVessel = (event) => {
  return {
    type: CHOOSE_VESSEL,
    event,
  };
};

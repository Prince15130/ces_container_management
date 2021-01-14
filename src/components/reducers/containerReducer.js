import {
  ADD_CONTAINER,
  SUB_QUANTITY,
  CHOOSE_VESSEL,
} from "../actions/actionTypes";

const initState = {
  items: [
    {
      id: 1,
      name: "Basic Container (200 Tons)",
      image: "/images/BasicContainer.png",
      weight: 200,
      isEnabled: true,
    },
    {
      id: 2,
      name: "Heavy Container (300 Tons)",
      image: "/images/HeavyConstainer.png",
      weight: 300,
      isEnabled: true,
    },
    {
      id: 3,
      name: "Explosive Container (400 Tons)",
      image: "/images/ExplosiveIcon.png",
      weight: 400,
      isEnabled: false,
    },
    {
      id: 4,
      name: "Toxic Container (400 Tons)",
      image: "/images/ToxicContainer.jpg",
      weight: 400,
      isEnabled: false,
    },
    {
      id: 5,
      name: "Referigerator Container (500 Tons)",
      image: "/images/CoolContainer1.png",
      weight: 500,
      isEnabled: false,
    },
  ],
  addedContainers: [],
  total: 0,
  vesselTypes: ["Explosive", "Toxic", "Referigerator"],
  checkSelection: [],
  maxReached: false,
};
const containerReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_CONTAINER:
      let addedItem = state.items.find((item) => item.id === action.id);
      let existed_item = state.addedContainers.find(
        (item) => action.id === item.id
      );
      if (state.total + addedItem.weight > action.ship) {
        return {
          ...state,
          maxReached: true,
        };
      } else {
        if (existed_item) {
          addedItem.quantity += 1;
          return {
            ...state,
            total: state.total + addedItem.weight,
          };
        } else {
          addedItem.quantity = 1;

          let newTotal = state.total + addedItem.weight;

          return {
            ...state,
            addedContainers: [...state.addedContainers, addedItem],
            total: newTotal,
          };
        }
      }

    case SUB_QUANTITY:
      let addedItemm = state.items.find((item) => item.id === action.id);

      if (addedItemm.quantity === "1") {
        console.log(addedItemm);
        let new_items = state.addedContainers.filter(
          (item) => item.id !== action.id
        );
        console.log(new_items);
        let newTotal = state.total - addedItemm.weight;
        let newMax = state.maxReached;
        if (newTotal < action.ship) {
          newMax = false;
        }
        return {
          ...state,
          addedContainers: new_items,
          total: newTotal,
          maxReached: newMax,
        };
      } else {
        if (addedItemm.quantity > 0) {
          addedItemm.quantity -= 1;
          let newTotal = state.total - addedItemm.weight;
          let newMax = state.maxReached;
          if (newTotal < action.ship) {
            newMax = false;
          }
          return {
            ...state,
            total: newTotal,
            maxReached: newMax,
          };
        }
      }
      break;
    case CHOOSE_VESSEL:
      let newState = { ...state };
      if (action.event.currentTarget.checked) {
        newState.checkSelection = [
          ...newState.checkSelection,
          action.event.target.value,
        ];
      } else {
        const newArr = newState.checkSelection.filter(
          (item) => item !== action.event.target.value
        );
        newState.checkSelection = newArr;
      }
      if (newState.checkSelection.length === 0) {
        newState.items[2].isEnabled = false;
        newState.items[3].isEnabled = false;
        newState.items[4].isEnabled = false;
      } else {
        if (newState.checkSelection.includes("Explosive")) {
          newState.items[2].isEnabled = true;
        } else {
          newState.items[2].isEnabled = false;
        }
        if (newState.checkSelection.includes("Toxic")) {
          newState.items[3].isEnabled = true;
        } else {
          newState.items[3].isEnabled = false;
        }
        if (newState.checkSelection.includes("Referigerator")) {
          newState.items[4].isEnabled = true;
        } else {
          newState.items[4].isEnabled = false;
        }
      }

      return newState;
    default:
      return state;
  }
};
export default containerReducer;

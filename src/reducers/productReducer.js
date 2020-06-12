
const initState = {
    selectedProduct: JSON.parse(localStorage.getItem("selectedProduct")) || [],
};

function reducer(state = initState, action) {
    switch (action.type) {
        case "SET_SELECTED_PRODUCT":
            return {
                ...state,
                selectedProduct: action.payload
            };

        default:
            return state;

    }
};

export default reducer;
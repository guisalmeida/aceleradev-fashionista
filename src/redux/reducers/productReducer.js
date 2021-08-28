
const initialState = {
    selectedProduct: JSON.parse(localStorage.getItem("selectedProduct")) || [],
};

function productReducer(state = initialState, action) {
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

export default productReducer;
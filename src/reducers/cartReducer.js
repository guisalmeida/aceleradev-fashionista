
const initState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
};

function reducer(state = initState, action) {
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };

        default:
            return state;

    }
};

export default reducer;

const initialState = {
    search: [],
    showSearch: false
};

function searchReducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_SEARCH":
            return {
                ...state,
                search: action.payload
            };

        case "SHOW_SEARCH":
            return {
                ...state,
                showSearch: action.payload
            };

        default:
            return state;

    }
};

export default searchReducer;
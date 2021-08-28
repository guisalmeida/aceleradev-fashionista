export function updateSearchAction(data) {
    return {
        type: "UPDATE_SEARCH",
        payload: data
    }
}

export function showSearchAction(data) {
    return {
        type: "SHOW_SEARCH",
        payload: data
    }
}

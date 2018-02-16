export default function (state = null, action) {
    switch (action.type) {
        case "bikes_SELECTED":
            return action.payload;
        default:
    }
    return state;
}
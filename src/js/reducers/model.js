export default function (state = null, action) {
    switch (action.type) {
        case "Model_SELECTED":
            return action.payload;
        default :
    }
    return state;
}
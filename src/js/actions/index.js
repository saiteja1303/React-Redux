export const selectModel = (bikes) => {
    return {
        type: 'Model_SELECTED',
        payload: bikes
    }
};
export const selectBike = (bikes) => {
    return {
        type: 'bikes_SELECTED',
        payload: bikes
    }
};
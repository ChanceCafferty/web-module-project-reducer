export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const MEMORY_ADD = 'MEMORY_ADD';
export const APPLY_MEMORY = 'APPLY_MEMORY';
export const CLEAR_MEMORY = 'CLEAR_MEMORY';

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}


export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation})
}

export const memoryAdd = () => {
    return({type:MEMORY_ADD})
}

export const applyMemory = () => {
    return({type:APPLY_MEMORY});
}

export const clearMemory = () => {
    return({type:CLEAR_MEMORY});
}
import { category } from "./app/category";
import { ADD_CAT, REM_CAT, UPD_CAT } from "./app/action"
export interface IAppState {
    categoryArr: category[];

}
export const INITIAL_STATE: IAppState = {
    categoryArr: []
}


export function rootReducer(state, action) {
    //ToDo: Try object.assign may be -later
    switch (action.type) {
        case ADD_CAT:
            console.log("Action type:" + action.type);
            console.log("Action value:" + action.value);
            console.log(state);
            state.categoryArr = state.categoryArr || [];
            action.value._catId = state.categoryArr.length === 0 ? 1 : state.categoryArr[state.categoryArr.length - 1]._catId + 1;
            state.categoryArr.push(action.value);
            return state;
        case REM_CAT:
            console.log("Action type:" + action.type);
            console.log("Action value:" + action.value);
            console.log(state);
            state.categoryArr = state.categoryArr || [];
            state.categoryArr.pop(action.value);
            return state;

        case UPD_CAT:
            console.log("Action type:" + action.type);
            console.log("Action value:" + action.value);
            console.log(state);
            state.categoryArr = state.categoryArr || [];
            var index = state.categoryArr.findIndex(cat => cat._catId === action.value._catId);
            state.categoryArr[index] = action.value;
            return state;
        //break;
        default:
            console.log("default of switch");
            break;
    }

    return state;
}
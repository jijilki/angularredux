import { category } from "./app/category";
import { ADD_CAT, SEARCH_CAT } from "./app/action"
export interface IAppState {
    categoryArr: category[];

}
export const INITIAL_STATE: IAppState = {
    categoryArr: null
}


export function rootReducer(state, action) {
    // addCategory: category;
    switch (action.type) {
        case ADD_CAT:
            console.log("Action type:" + action.type);
            console.log("Action value:" + action.value);
            console.log(state);
            action.categoryArr.push(action.value);
            return Object.assign({}, state, {
                todos: state.categoryArr.concat(Object.assign({}, action.categoryArr))
            })

        case SEARCH_CAT:
            console.log("Search Category action");
            break;
        default:
            console.log("default of switch");
            break;
    }

    return state;
}
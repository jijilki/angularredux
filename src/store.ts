import { category } from "./app/category";
import {ADD_CAT,SEARCH_CAT} from "./app/action"
export interface IAppState{
searchCategory: category;
 
}
export const INITIAL_STATE: IAppState = {
   searchCategory:null
}

export function rootReducer(state,action){
    switch(action.type){
        case ADD_CAT:
            console.log("Add Category action");
            break;
        case SEARCH_CAT:
            console.log("Search Category action");
            break;
        default:
            console.log("default of switch");
            break;
    }

    return state;
}
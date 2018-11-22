import { category } from "./app/category";
import { workout } from "./app/workout";
import { ADD_CAT, REM_CAT, UPD_CAT, CRE_WO, GET_ONE_WO, DEL_WO } from "./app/action";


export interface IAppState {
    categoryArr: category[],
    workoutArr: workout[]

}
export const INITIAL_STATE: IAppState = {
    categoryArr: null,
    workoutArr: null
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
            // state.categoryArr.push(action.value);
            state = Object.assign({}, state,
                {
                    categoryArr: state.categoryArr.concat(Object.assign({}, action.value)),
                    workoutArr: state.workoutArr
                })
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

        case CRE_WO:
            console.log("Action type:" + action.type);
            console.log("Action value:" + action.value);
            console.log(state);
            state.workoutArr = state.workoutArr || [];
            action.value.workout_id = state.workoutArr.length === 0 ? 1 : state.workoutArr[state.workoutArr.length - 1].workout_id + 1;
           // state.workoutArr.push(action.value);
           state = Object.assign({} ,state , {
               categoryArr: state.categoryArr,
               workoutArr : state.workoutArr.concat(Object.assign({},action.value))
           })

            return state

        case DEL_WO:
            console.log("Action type:" + action.type);
            console.log("Action value:" + action.value);
            console.log(state);
            var index = state.workoutArr.findIndex(wo => wo.workout_id === action.value);
            state.workoutArr.splice(index, 1);
            return state;


        default:
            console.log("default of switch of catReducer");
            break;
    }



    return state;
}


/*
 Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
                lastUpdate: new Date()
            })
    */
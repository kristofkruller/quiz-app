import { combineReducers } from "@reduxjs/toolkit";
import questionsApiSlice from "./slices/questionsApiSlice";
import answersSlice from "./slices/answerSlice";
import currentIndexSlice from "./slices/indexSlice";

const rootReducer = combineReducers({
    [questionsApiSlice.reducerPath]: questionsApiSlice.reducer,
    [answersSlice.name]: answersSlice.reducer,
    [currentIndexSlice.name]: currentIndexSlice.reducer
})

//let useselector know what store holds
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
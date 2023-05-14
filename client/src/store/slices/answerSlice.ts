//REDUX
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//IF
import { AnswerState } from "../../../app";

const initialState: AnswerState = {
    answers: Array(10).fill(''), // represent the 10 answ.
};

const answersSlice = createSlice({
    name: "answers",
    initialState,
    reducers: {
        setAnswer(state, action: PayloadAction<{ index: number; answer: string }>) {
            const { index, answer } = action.payload;
            state.answers[index] = answer;
        },
        clearAllAnswers(state) {
            state.answers = initialState.answers;
        }
    }
})

export const { setAnswer, clearAllAnswers } = answersSlice.actions;
export default answersSlice;
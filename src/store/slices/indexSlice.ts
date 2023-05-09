import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentIndexState {
  currentIndex: number;
}

const initialState: CurrentIndexState = {
  currentIndex: 0
};

const currentIndexSlice = createSlice({
  name: 'currentIndex',
  initialState,
  reducers: {
    setCurrentIndex(state, action: PayloadAction<number>) {
        state.currentIndex = action.payload;
    },
    clearIndex(state) {
        state.currentIndex = initialState.currentIndex
    }
  }
});

export const { setCurrentIndex, clearIndex } = currentIndexSlice.actions;
export default currentIndexSlice;
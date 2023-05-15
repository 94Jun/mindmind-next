import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ActiveModalState = "signUp" | null;

interface ModalState {
  activeModal: ActiveModalState;
}

const initialState: ModalState = {
  activeModal: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    CLOSE_MODAL: (state) => {
      state.activeModal = null;
    },
    OPEN_MODAL: (state, action: PayloadAction<ActiveModalState>) => {
      state.activeModal = action.payload;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;

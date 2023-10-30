import { createSlice } from "@reduxjs/toolkit";
export interface AvatarListTypes {
  downloadCount: number;
  fullDesc: string;
  picture: string;
  source: string;
  id: string;
}

export interface AvatarStateTypes {
  list: AvatarListTypes[];
}

const initialState: AvatarStateTypes = {
  list: [],
};

const AvatarListSlice = createSlice({
  name: "avatarList",
  initialState,
  reducers: {
    getList(state, { payload }) {
      state.list = payload;
    },
    deleteList(state, { payload }) {
      state.list = state.list.filter((item) => item.id !== payload);
    },
  },
});

export const AvatarReducer = AvatarListSlice.reducer;
export const AvatarActions = AvatarListSlice.actions;

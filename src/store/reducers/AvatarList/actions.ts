import axios from "axios";
import { AppDispatch } from "../../store";
import { AvatarListTypes, AvatarActions } from "./AvatarListSlice";

export const getAvatarList = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get<AvatarListTypes[]>(
      "https://60b7749817d1dc0017b8a069.mockapi.io/category_news",
    );
    dispatch(AvatarActions.getList(response?.data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteListItem = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(AvatarActions.deleteList(id));
  } catch (error) {
    console.log(error);
  }
};

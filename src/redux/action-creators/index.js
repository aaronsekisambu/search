import axios from "axios";
import {
  GET_PLACE_HOLDERS,
  FAILED_TO_GET_PLACE_HOLDERS
} from "../action-types/index";

export const getPlaceholders = () => async dispatch => {
  const URL = "https://jsonplaceholder.typicode.com/posts?q=";
  try {
    const placeHolders = await axios.get(URL, { header: {} });
    const { data } = placeHolders;
    return dispatch({ type: GET_PLACE_HOLDERS, payload: data });
  } catch (error) {
    const { message } = error;
    return dispatch({ type: FAILED_TO_GET_PLACE_HOLDERS, payload: message });
  }
};

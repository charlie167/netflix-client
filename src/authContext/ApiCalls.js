import axios from "axios";
import { loginStart, loginSuccess, loginFailure } from "./AuthAction";

export const login = async (user, dispatch) => {
  dispatch(loginStart());

  await axios
    .post("auth/login", user)
    .then((res) => {
      dispatch(loginSuccess(res.data));
    })
    .catch((err) => {
      dispatch(loginFailure());
    });
};

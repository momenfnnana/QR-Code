import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/Api";
import { navigate } from "../component/navigationRef";
const authReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "clear_Error_Message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = dispatch =>async()=>{
const token = await AsyncStorage.getItem('token');
if(token){
  dispatch({type:'signin',payload:token})
  navigate('third');
}else{
  navigate('first')
}
}

const clearErrorMessage = dispatch => () => {
  dispatch({
    type: "clear_Error_Message"
  });
};
const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signIn", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    navigate("third");
  } catch (err) {
    console.log(err);
    dispatch({
      type: "add_error",
      payload: "Someting went wrong with sign in"
    });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, clearErrorMessage, tryLocalSignin},
  { token: null, errorMessage: "" }
);

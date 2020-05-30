import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import Api from "../api/Api";
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
  navigate('scanner');
}else{
  navigate('login')
}
}

const clearErrorMessage = dispatch => () => {
  dispatch({
    type: "clear_Error_Message"
  });
};

const signin = dispatch => async ({ name, pass }) => {
  try {
    const response = await Api.post("/login",{
      "grant_type": "password", 
      username: name,
      password: pass 
    });
    console.log('user name: ',name);
    console.log('pass: ',pass);
    console.log('token', response.data.access_token);
    
    await AsyncStorage.setItem("token", response.data.access_token);
    dispatch({ type: "login", payload: response.data.access_token });
    navigate("scanner");
  } catch (err) {
    console.log(err);
    dispatch({
      type: "add_error",
      payload: "Wrong usename or password"
    });
  }
};


export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, clearErrorMessage, tryLocalSignin},
  { token: null, errorMessage: "" }
);

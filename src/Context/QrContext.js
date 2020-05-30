import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import Api from "../api/Api";
const QrContext = (state, action) => {
  // *************added response data to Context to share with whole application*************
  switch (action.type) {
    case "add_QRCode":
      return { AllData: action.payload };
    default:
      return state;
  }
};
const add_QrCode = dispatch => async (data) => {
  try {
    if (data.qr_code == undefined) {
      throw { message: "qr_code is required" }
    }
    var response = (await Api.post('/scan', data)).data;
    dispatch({ type: 'add_QRCode', payload: response.items })
    // console.log(response.items);
    return response
  } catch (err) {
    // console.error(err);
    throw { message: 'Api Calling Error', error: err };
  }
}
export const { Provider, Context } = createDataContext(
  QrContext,
  { add_QrCode },
  { AllData: {} }
);
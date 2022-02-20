import { combineReducers } from "redux";
import locationReducer from "./locationReducer";
import weatherReducer from "./weatherReducer";

// const locationReducerMock = () => {
//   return {
//     coords: {
//       accuracy: 4087.8109591296598,
//       altitude: null,
//       altitudeAccuracy: null,
//       heading: null,
//       latitude: -34.029568,
//       longitude: 23.0555648,
//       speed: null,
//     },
//     timestamp: 1640328710178,
//   };
// };

export default combineReducers({
  // userLocationMock: locationReducerMock,
  userLocation: locationReducer,
  userWeather: weatherReducer,
});

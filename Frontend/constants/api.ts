import Constants from "expo-constants";

export const uri = Constants?.expoConfig?.hostUri
  ? Constants.expoConfig.hostUri.split(`:`).shift().concat(`:5000`)
  : `https://api-uiconnext.vercel.app`;

export const api = process.env.EXPO_PUBLIC_SERVER_URI
  ? process.env.EXPO_PUBLIC_SERVER_URI
  : Constants.expoConfig.hostUri.split(`:`).shift().concat(`:5000`);

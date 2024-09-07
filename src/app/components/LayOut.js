"use client"
import { Provider } from "react-redux";
import { store } from "./redux/store";


const LayOut = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default LayOut;

// store

// import { configureStore } from "@reduxjs/toolkit";
// import { getProductsSlice } from "./reducer";

// export const store = configureStore({
//   reducer: getProductsSlice.reducer,
// });

//reducer

// import { createSlice } from "@reduxjs/toolkit";

// interface initialStateType {
//   products: Array<any>;
// }

// const initialState = {
//   products: [],
// };

// export const getProductsSlice = createSlice({
//   name: "Products",
//   initialState,
//   reducers: {
//     getProducts: (
//       _state: initialStateType,
//       action: { payload: Array<any> }
//     ) => {
//       return {
//         products: action.payload,
//       };
//     },
//   },
// });

// export const { getProducts } = getProductsSlice.actions;

//App

// import { useEffect } from "react";
// import "./App.css";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { getProducts } from "./store/reducer";
// import { List } from "./components/List";

// function App() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     try {
//       axios.get("https://restcountries.com/v3.1/all").then((res) => {
//         dispatch(getProducts(res.data));
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);
//   return <List />;
// }

// export default App;

//List

// import { useSelector } from "react-redux";

// interface getType {
//   products: Array<any>;
// }
// export const List = () => {
//   const data = useSelector((state: getType) => state.products);
//   console.log(data);

//   return <h1>List</h1>;
// };

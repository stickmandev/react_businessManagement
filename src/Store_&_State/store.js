import { configureStore } from '@reduxjs/toolkit';
import navSliceReducer from "../features/defualt_Layouts/slices/navSlice"
// import tokenSliceReducer from "../features/login/components/slices/TokenSlice"
// import numOfQuestionsReducer from '../components/slices/numOfQuestions_Slice';

export const store = configureStore({
  reducer: {
    navBar:navSliceReducer,
    // token:tokenSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

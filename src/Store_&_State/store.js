import { configureStore } from '@reduxjs/toolkit';
import navSliceReducer from "../features/defualt_Layouts/slices/navSlice"
import navSliceMobileReducer from "../features/defualt_Layouts/slices/navSliceMobile"
// import tokenSliceReducer from "../features/login/components/slices/TokenSlice"
// import numOfQuestionsReducer from '../components/slices/numOfQuestions_Slice';

export const store = configureStore({
  reducer: {
    navBar:navSliceReducer,
    navBarMobile:navSliceMobileReducer,
    
    // token:tokenSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

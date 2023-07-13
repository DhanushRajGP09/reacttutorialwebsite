import { configureStore } from "@reduxjs/toolkit";

import CourseReducer from "../features/Course/CourseSlice";


export const store = configureStore({
  reducer: {
   
    Course: CourseReducer,
  },
});

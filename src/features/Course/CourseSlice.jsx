import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const CourseSlice = createSlice({
  name: "Course",
  initialState: {
    
    ChapterData:{},
    fillarray:[],
    imagearray:[]
  },
  reducers: {
   
    addChapterData:(state,{payload})=>{
        state.ChapterData = payload;
    },
    addfillArray: (state, { payload }) => {
        let isPresent = false;
        for (let item of state.fillarray) {
          if (item === payload) {
            isPresent = true;
          }
        }
        if (!isPresent) {
          state.fillarray.unshift(payload);
        }
      },
      addImageArray: (state, { payload }) => {
        let isPresent = false;
        for (let item of state.imagearray) {
          if (item === payload) {
            isPresent = true;
          }
        }
        if (!isPresent) {
          state.imagearray.unshift(payload);
        }
      },
   
   
  },
});

export const {

  addChapterData,
  addImageArray,
  addfillArray
  
} = CourseSlice.actions;

export const getChapterData = (state) => state.Course.ChapterData;
export const getFillArray = (state) => state.Course.fillarray;
export const getImageArray = (state) => state.Course.imagearray;


export default CourseSlice.reducer;

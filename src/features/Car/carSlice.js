import {createSlice} from "@reduxjs/toolkit";

const initialState ={
	cars:["model 3","model S","model X","model Y"]
}
const carSlice = createSlice({
	name:"car",
	initialState,
	reducer:{}
})


export const selectCars = state => state.car.cars;

export default carSlice.reducer; 
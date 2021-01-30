import formInputReducer from "./formInputReducer"
import { combineReducers } from "redux"

const allReducers = combineReducers({
	songList: formInputReducer,
})

export default allReducers

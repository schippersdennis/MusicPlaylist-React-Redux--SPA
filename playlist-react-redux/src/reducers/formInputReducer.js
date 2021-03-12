import { sortFunction } from "../functions//sortFunction"
import stateArray from "../components/stateArray"

const formInputReducer = (state = stateArray, action) => {
	switch (action.type) {
		case "ADD_SONG_TO_STATE":
			const newItem = action.payload
			newItem.id = state.songs.length + 1

			return {
				...state,
				songs: [newItem, ...state.songs],
			}

		case "DELETE_SONG_FROM_STATE":
			const indexNumber = state.songs.findIndex(
				(item) => item.id === action.payload
			)
			state.songs.splice(indexNumber, 1)
			state.songs.map((item, index) => {
				return (item.id = index + 1)
			})

			return {
				...state,
				songs: [...state.songs],
			}

		case "SORT_SONGS":
			const arrayToSort = state.songs
			const [key, order] = action.payload.split(" ")
			const sortByOrder = (arrayToSort, key, order) => {
				const sortedArray = state.songs.sort(
					sortFunction(arrayToSort, key)
				)
				if (order === "descending")
					return sortedArray.reverse()

				return sortedArray
			}

			state.songs = sortByOrder(arrayToSort, key, order)

			return {
				...state,
				songs: [...state.songs],
			}

		default:
			return state
	}
}
export default formInputReducer

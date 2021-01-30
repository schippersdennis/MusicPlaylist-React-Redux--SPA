import React from "react"
import { addSongToState } from "../actions"

import { useDispatch } from "react-redux"

const Form = () => {
	const dispatch = useDispatch()
	return (
		<form
			className="form"
			onSubmit={(event) => {
				event.preventDefault()
				const [inputA, inputB] = event.target
				if (
					inputA.value !== "" &&
					inputB.value !== ""
				) {
					dispatch(addSongToState(event))
					inputA.value = ""
					inputB.value = ""
				} else {
					alert("fill in the fields first please")
				}
			}}
		>
			<input type="text" placeholder="song name"></input>
			<input type="text" placeholder="artist"></input>
			<select className="genre">
				<option value="Rock">Rock</option>
				<option value="Reggae">Reggae</option>
				<option value="Klassiek">Klassiek</option>
				<option value="Hiphop">Hip/Hop/Rap</option>
				<option value="Jazz">Jazz</option>
				<option value="Blue's">Blue's</option>
				<option value="Pop">Pop</option>
				<option value="Club">Blue's</option>
				<option value="Country">Country</option>
				<option value="Chill-Out">Blue's</option>
			</select>
			<select className="rating">
				<option value="1">★</option>
				<option value="2">★★</option>
				<option value="3">★★★</option>
				<option value="4">★★★★</option>
				<option value="5">★★★★★</option>
			</select>
			<button>add song</button>
		</form>
	)
}
export default Form

import React from "react"

function Input(props) {
	return (
		<form className="form-specs" onSubmit={props.handleOnSubmit}>
			<input type="text" placeholder=" Enter a Song" />
			<input type="text" placeholder=" Artist" />

			<select name="genre">
				<option value="Rock">Rock</option>
				<option value="Reggae">Reggae</option>
				<option value="Nederlandstalig">
					Nederlandstalig
				</option>
				<option value="Klassiek">Klassiek</option>
				<option value="Hiphop">Hip/Hop/Rap</option>
				<option value="Jazz">Jazz</option>
			</select>

			<select className="form-rating" name="rating">
				<option value="1">★</option>
				<option value="2">★★</option>
				<option value="3">★★★</option>
				<option value="4">★★★★</option>
				<option value="5">★★★★★</option>
			</select>

			<button>Add song</button>
		</form>
	)
}

export default Input

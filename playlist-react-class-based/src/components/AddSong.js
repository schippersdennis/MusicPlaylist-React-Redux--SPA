import React from "react"
import Input from "../components/Input"
function AddSong(props) {
	return <Input handleOnSubmit={props.handleOnSubmit} />
}
export default AddSong

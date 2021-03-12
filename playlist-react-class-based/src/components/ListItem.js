import React from "react"
import { RiGroupLine } from "react-icons/ri"
import { MdAudiotrack } from "react-icons/md"
import { IoReorderFourOutline } from "react-icons/io5"
import { MdDeleteForever } from "react-icons/md"

function ListItem(props) {
	return (
		<li className="song-list-item">
			<div className="li-song-name">
				<MdAudiotrack className="icon-li" />
				<p>{props.details.name}</p>
			</div>
			<div className="li-artist">
				<RiGroupLine className="icon-li" />
				<p>{props.details.artist}</p>
			</div>

			<div className="li-genre">
				<IoReorderFourOutline className="icon-li" />{" "}
				<p>{props.details.genre}</p>
			</div>

			<div className="li-rating">
				{props.details.rating === 1 && "★"}
				{props.details.rating === 2 && "★★"}
				{props.details.rating === 3 && "★★★"}
				{props.details.rating === 4 && "★★★★"}
				{props.details.rating === 5 && "★★★★★"}
			</div>
			<div className="deleteBtn">
				<MdDeleteForever
					onClick={() => {
						props.handleDelete(
							props.details.id
						)
					}}
				/>
			</div>
		</li>
	)
}
export default ListItem

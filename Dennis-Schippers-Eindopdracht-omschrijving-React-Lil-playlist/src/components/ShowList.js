import React from "react"
import ListItem from "./ListItem"
import ToSortFilters from "./ToSortFilters"

function ShowList(props) {
	const updatedArray = props.songs.map((song) => {
		return (
			<ListItem
				key={song.id}
				details={song}
				handleDelete={props.handleDelete}
			/>
		)
	})

	return (
		<div className="songlist-info-wrap">
			<div className="infoBar">
				<ToSortFilters
					handleChangeSort={
						props.handleChangeSort
					}
				/>
			</div>
			<ul className="song-list">{updatedArray}</ul>
		</div>
	)
}
export default ShowList

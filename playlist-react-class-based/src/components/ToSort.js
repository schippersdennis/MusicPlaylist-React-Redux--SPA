import React from "react"
import { MdAudiotrack } from "react-icons/md"
import { IoReorderFourOutline } from "react-icons/io5"
import { RiGroupLine } from "react-icons/ri"

function ToSort(props) {
	return (
		<div className="sort-container">
			{/* for mobile */}
			<select
				className="select-sort-mobile"
				onChange={(event) => {
					props.handleChangeSort(event)
				}}
				name="sort"
			>
				{/* group 1 */}
				<option defaultValue> Sort by: Choose</option>
				<optgroup label="Sort by: Song name">
					<option value="name ascending">
						a - z
					</option>
					<option value="name descending">
						z - a
					</option>
				</optgroup>
				{/* group 2 */}
				<optgroup label="Sort by: Artist name">
					<option value="artist ascending">
						a - z
					</option>
					<option value="artist descending">
						z - a
					</option>
				</optgroup>
				{/* group 3 */}
				<optgroup label="Sort by: Genre">
					<option value="genre ascending">
						a - z
					</option>
					<option value="genre descending">
						z - a
					</option>
				</optgroup>
				{/* group 4 */}
				<optgroup label="Sort by: Rating">
					<option value="rating descending">
						High - Low
					</option>
					<option value="rating ascending ">
						Low - High
					</option>
				</optgroup>
			</select>
			{/* for desktop */}
			<div>
				<p>
					<MdAudiotrack className="icon-li" />
				</p>
				<select
					className="select-sort"
					onChange={(event) => {
						props.handleChangeSort(event)
					}}
					name="sort"
				>
					{/* group 1 */}
					<option defaultValue> Song</option>
					<optgroup label="Sort by: Song name">
						<option value="name ascending">
							a - z
						</option>
						<option value="name descending">
							z - a
						</option>
					</optgroup>
				</select>
			</div>

			<div>
				<p>
					<RiGroupLine className="icon-li" />
				</p>
				<select
					className="select-sort"
					onChange={(event) => {
						props.handleChangeSort(event)
					}}
					name="sort"
				>
					{/* group 2 */}
					<option defaultValue> Artist</option>
					<optgroup label="Sort by: Artist name">
						<option value="artist ascending">
							a - z
						</option>
						<option value="artist descending">
							z - a
						</option>
					</optgroup>
				</select>
			</div>
			<div>
				<p>
					<IoReorderFourOutline className="icon-li" />
				</p>
				<select
					className="select-sort"
					onChange={(event) => {
						props.handleChangeSort(event)
					}}
					name="sort"
				>
					{/* group 3 */}
					<option defaultValue> Genre</option>
					<optgroup label="Sort by: Genre">
						<option value="genre ascending">
							a - z
						</option>
						<option value="genre descending">
							z - a
						</option>
					</optgroup>
				</select>
			</div>
			<div>
				<p> ★ </p>
				<select
					className="select-sort"
					onChange={(event) => {
						props.handleChangeSort(event)
					}}
					name="sort"
				>
					{/* group 4 */}
					<option defaultValue> Rating</option>
					<optgroup label="Sort by: Rating">
						<option value="rating descending">
							High - Low
						</option>
						<option value="rating ascending ">
							Low - High
						</option>
					</optgroup>
				</select>
			</div>
		</div>
	)
}
export default ToSort

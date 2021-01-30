import React from "react"
import AddSong from "./AddSong"
import ShowList from "./ShowList"
import stateArray from "./stateArray"

class SongOverview extends React.Component {
	constructor() {
		super()
		this.state = stateArray
		this.handleOnSubmit = this.handleOnSubmit.bind(this)
		this.handleChangeSort = this.handleChangeSort.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}

	handleOnSubmit(event) {
		event.preventDefault()

		const [name, artist, genre, rating] = event.target
		if (name.value !== "" && artist.value !== "") {
			this.setState((prevState) => {
				const newArray = [...prevState.songs]
				const newSong = {
					id: this.state.songs.length + 1,
					name: name.value,
					artist: artist.value,
					genre: genre.value,
					rating: parseInt(rating.value),
				}
				newArray.unshift(newSong)
				const newState = {
					...prevState,
					songs: newArray,
				}
				name.value = ""
				artist.value = ""

				return newState
			})
		} else {
			alert("Feed me good music first")
		}
	}

	handleChangeSort(event) {
		const stringCompare = (str1, str2) => {
			str1 = str1.toLowerCase()
			str2 = str2.toLowerCase()

			if (str1 > str2) return 1
			if (str2 > str1) return -1
			return 0
		}
		const numCompare = (num1, num2) => num1 - num2

		this.setState((prevState) => {
			const sortObjects = (newArray, key) => {
				const dataType = typeof newArray[0][key]
				const sortArray = (a, b) => {
					a = a[key]
					b = b[key]
					if (dataType === "string")
						return stringCompare(a, b)
					if (dataType === "number")
						return numCompare(a, b)
				}
				return sortArray
			}

			const [key, order] = event.target.value.split(" ")
			const newArray = [...prevState.songs]

			const test = () => {
				const sortedArr = newArray.sort(
					sortObjects(newArray, key)
				)
				if (order === "descending")
					return sortedArr.reverse()
				return sortedArr
			}

			const newState = { ...prevState, songs: test() }
			return newState
		})
	}

	handleDelete(id) {
		this.setState((prevState) => {
			const newArray = [...prevState.songs]
			// get index of song to delete
			const indexNumber = newArray.findIndex(
				(item) => item.id === id
			)
			// remove song
			newArray.splice(indexNumber, 1)
			//update id-key
			newArray.map((item, index) => {
				return (item.id = index + 1)
			})
			const newState = { ...prevState, songs: newArray }
			return newState
		})
	}

	render() {
		return (
			<main>
				<AddSong handleOnSubmit={this.handleOnSubmit} />
				<ShowList
					songs={this.state.songs}
					handleDelete={this.handleDelete}
					handleChangeSort={this.handleChangeSort}
				/>
			</main>
		)
	}
}
export default SongOverview

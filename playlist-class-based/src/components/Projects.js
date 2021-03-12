import React from "react"
import { FaGithubSquare } from "react-icons/fa"
import { SiNetlify, SiRedux } from "react-icons/si"
import redux from "./redux.jpg"
function Projects() {
	return (
		<div className="project-container">
			<h1>
				{" "}
				<SiRedux className="project-icon" />
				Redux Project
			</h1>
			<h3>
				Check-out this links! It is the same project
				only then used Redux and Functional Components.
			</h3>
			<img src={redux}></img>

			<div className="project-wrap">
				<FaGithubSquare className="project-icon" />
				<a
					target="blanc"
					href="https://github.com/schippersdennis/Dennis-Schippers-React-Lil-playlist-With-Redux"
				>
					{" "}
					React-Lil-playlist-With-Redux
				</a>
			</div>
			<div className="project-wrap">
				<SiNetlify className="project-icon" />
				<a
					target="blanc"
					href="https://redux-playlist-52de5b.netlify.app/"
				>
					{" "}
					Check out this project on Netlify
				</a>
			</div>
		</div>
	)
}

export default Projects

import React from "react"
import { FaReact } from "react-icons/fa"
import { SiRedux } from "react-icons/si"
import { NavLink } from "react-router-dom"
import { IoPersonCircleOutline } from "react-icons/io5"

function Nav() {
	return (
		<nav>
			<ul className="nav-links">
				<NavLink
					exact
					to="/"
					activeClassName="is-active"
				>
					<li>
						<FaReact className="menu-icon" />
						Playlist DB
					</li>
				</NavLink>
				<NavLink
					to="/projects"
					activeClassName="is-active"
				>
					<li>
						<SiRedux className="menu-icon" />
						Redux Project
					</li>
				</NavLink>
				<NavLink
					to="/about"
					activeClassName="is-active"
				>
					<li>
						<IoPersonCircleOutline className="menu-icon" />
						About
					</li>
				</NavLink>
			</ul>
		</nav>
	)
}
export default Nav

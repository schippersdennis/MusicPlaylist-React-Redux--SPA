import React from "react"
import Form from "./components/From"
import Logo from "./components/Logo"
import List from "./components/List"
import Footer from "./components/Footer"

function App() {
	return (
		<div className="appContainer">
			<Logo />
			<Form />
			<List />
			<Footer />
		</div>
	)
}

export default App

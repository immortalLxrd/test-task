import React from 'react';
import './styles/App.scss';
import FormComponent from "./components/FormComponent";
import addUser from "./api/post";


function App() {
	return (
		<div className="App">
			<FormComponent action={addUser}/>
			<div className="ellipse"/>
		</div>
	);
}


export default App;

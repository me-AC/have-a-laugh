import React, { useState } from 'react';
import './App.css';
import Para from './components/Para';
import GetBtn from './components/GetBtn';

function App() {
	const [Jk, setJk] = useState('Click the Button to Get a Joke!');

	function FetchJk() {
		fetch(
			'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'
		)
			.then((response) => response.json())
			.then((data) => setJk(data.joke));
	}

	return (
		<div className=" bg-yellow-500 flex items-center h-screen w-screen justify-center align-middle">
			<div className="bg-black h-fit w-2/5 align-middle items-center justify-center p-3 rounded-md text-center relative shadow-slate-700 shadow-lg">
				<h1 className=" w-full text-center text-7xl p-1">😂</h1>
				<Para message={Jk} />
				<GetBtn handleClick={FetchJk} />
			</div>
		</div>
	);
}

export default App;

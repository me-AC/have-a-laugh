import React from 'react';

function GetBtn({ handleClick }) {
	return (
		<button
			type="button"
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
			onClick={handleClick}
		>
			Get New Joke
		</button>
	);
}

export default GetBtn;

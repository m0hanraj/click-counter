import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);
	return (
		<div data-test="app">
			<h1 data-test="counter-text">
				The counter is <span data-test="count">{count}</span>
			</h1>
			<button data-test="inc-button" onClick={() => setCount(count + 1)}>
				Increment counter
			</button>
		</div>
	);
}

export default App;

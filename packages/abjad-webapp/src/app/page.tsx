'use client'

import { useState } from 'react';

export default function Home() {
	const [textBoxValue, setTextBoxValue] = useState('');
	const [copiedText, setCopiedText] = useState('');

	const handleCopyText = () => {
		// Copy the text from the text box to the label
		setCopiedText(textBoxValue);
	};

	return (
		<main>
			<h1>Abjad</h1>
			<div>
				<label htmlFor="fromDropdown">From:</label>
				<select id="fromDropdown">
					<option value="0">Arabic</option>
					<option value="1">Imperial Aramaic</option>
					<option value="2">Phoenician</option>
					<option value="3">Syriac</option>
					<option value="4">Ugaritic</option>
				</select>
			</div>
			<div>
				<label htmlFor="toDropdown">To:</label>
				<select id="toDropdown">
					<option value="0">Arabic</option>
					<option value="1">Imperial Aramaic</option>
					<option value="2">Phoenician</option>
					<option value="3">Syriac</option>
					<option value="4">Ugaritic</option>
				</select>
			</div>
			<div>
				<label htmlFor="editTextBox">Enter Text:</label>
				<input
					type="text"
					id="editTextBox"
					placeholder="Type here"
					value={textBoxValue}
					onChange={(e) => setTextBoxValue(e.target.value)}
				/>
			</div>
			<div>
				<button onClick={handleCopyText}>Copy Text</button>
			</div>
			<div>
				<label htmlFor="copiedLabel">Copied Text:</label>
				<span id="copiedLabel">{copiedText}</span>
			</div>
		</main>
	)
}

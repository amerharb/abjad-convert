'use client'

import { useState } from 'react'
import { Abjad, convert } from 'abjad-convert'

export default function Home() {
	const [textBoxValue, setTextBoxValue] = useState('')
	const [resultText, setResultText] = useState('')

	const handleConvert = () => {
		const fromDropdown = document.getElementById('fromDropdown') as HTMLSelectElement
		const from = fromDropdown.selectedIndex as Abjad
		const toDropdown = document.getElementById('toDropdown') as HTMLSelectElement
		const toValue = toDropdown.selectedIndex as Abjad
		const result = convert(textBoxValue, from, toValue)
		setResultText(result)
	}

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
				<button onClick={handleConvert}>Convert</button>
			</div>
			<div>
				<label htmlFor="resultLabel">Result:</label>
				<span id="resultLabel">{resultText}</span>
			</div>
		</main>
	)
}

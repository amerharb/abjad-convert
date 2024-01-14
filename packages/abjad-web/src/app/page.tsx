'use client'

import { useState } from 'react'
import { Abjad, convert } from 'abjad-convert'

export default function Home() {
	const [textBoxValue, setTextBoxValue] = useState('')
	const [resultText, setResultText] = useState('')

	const handleConvert = () => {
		const fromDropdown = document.getElementById('fromDropdown') as HTMLSelectElement
		const fromValue = fromDropdown.value as Abjad
		const toDropdown = document.getElementById('toDropdown') as HTMLSelectElement
		const toValue = toDropdown.value as Abjad
		const result = convert(textBoxValue, fromValue, toValue)
		setResultText(result)
	}

	return (
		<main style={{ textAlign: 'center', padding: '20px' }}>
			<h1>Abjad Converter</h1>

			<div style={{ marginBottom: '10px' }}>
				<label htmlFor="fromDropdown" style={{ marginRight: '10px' }}>
					From:
				</label>
				<select id="fromDropdown">
					<option value={Abjad.Arabic}>Arabic</option>
					<option value={Abjad.ImperialAramaic}>Imperial Aramaic</option>
					<option value={Abjad.Phoenician}>Phoenician</option>
					<option value={Abjad.Syriac}>Syriac</option>
					<option value={Abjad.Tifinagh}>Tifinagh</option>
					<option value={Abjad.Ugaritic}>Ugaritic</option>
				</select>
			</div>

			<div style={{ marginBottom: '10px' }}>
				<label htmlFor="toDropdown" style={{ marginRight: '10px' }}>
					To:
				</label>
				<select id="toDropdown">
					<option value={Abjad.Arabic}>Arabic</option>
					<option value={Abjad.ImperialAramaic}>Imperial Aramaic</option>
					<option value={Abjad.Phoenician}>Phoenician</option>
					<option value={Abjad.Syriac}>Syriac</option>
					<option value={Abjad.Tifinagh}>Tifinagh</option>
					<option value={Abjad.Ugaritic}>Ugaritic</option>
				</select>
			</div>

			<div style={{ marginBottom: '10px' }}>
				<label htmlFor="editTextBox" style={{ marginRight: '10px' }}>
					Enter Text:
				</label>
				<textarea
					id="editTextBox"
					placeholder="Type here"
					value={textBoxValue}
					onChange={(e) => setTextBoxValue(e.target.value)}
					style={{ padding: '10px', width: '100%', minHeight: '100px' }}
				/>
			</div>

			<div style={{ marginBottom: '10px' }}>
				<button onClick={handleConvert} style={{
					padding: '10px',
					backgroundColor: '#4CAF50',
					color: 'white',
					border: 'none',
					borderRadius: '5px'
				}}>
					Convert
				</button>
			</div>

			<div>
				<label htmlFor="resultLabel" style={{ marginRight: '10px' }}>
					Result:
				</label>
				<span id="resultLabel" style={{ fontWeight: 'bold' }}>{resultText}</span>
			</div>
		</main>
	)
}

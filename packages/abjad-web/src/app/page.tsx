'use client'

import { useState } from 'react'
import Select from 'react-select'
import { Abjad, convert } from 'abjad-convert'

export default function Home() {
	const [textBoxValue, setTextBoxValue] = useState('')
	const [resultText, setResultText] = useState('')
	const [fromValue, setFromValue] = useState<Abjad | undefined>(Abjad.Arabic)
	const [toValue, setToValue] = useState<Abjad | undefined>(Abjad.ImperialAramaic)

	const options = [
		{ value: Abjad.Arabic, label: 'Arabic' },
		{ value: Abjad.ImperialAramaic, label: 'Imperial Aramaic' },
		{ value: Abjad.Phoenician, label: 'Phoenician' },
		{ value: Abjad.Syriac, label: 'Syriac' },
		{ value: Abjad.Tifinagh, label: 'Tifinagh' },
		{ value: Abjad.Ugaritic, label: 'Ugaritic' },
	];
	const FromSelect = () => <div style={{ marginBottom: '10px' }}>
		<label htmlFor="fromDropdown" style={{ marginRight: '10px' }}>
			From:
		</label>
		<Select
			id="fromDropdown"
			options={options}
			defaultValue={options[0]}
			onChange={(selectedOption) => {
				setFromValue(selectedOption?.value)
			}}
		/>
	</div>
	const ToSelect = () => <div style={{ marginBottom: '10px' }}>
		<label htmlFor="toDropdown" style={{ marginRight: '10px' }}>
			To:
		</label>
		<Select
			id="toDropdown"
			options={options}
			defaultValue={options[1]}
			onChange={(selectedOption) => {
				setToValue(selectedOption?.value)
				if (!fromValue || !selectedOption?.value) {
					return
				}
				const result = convert(textBoxValue, fromValue, selectedOption?.value)
				setResultText(result)
			}}
		/>
	</div>
	const handleConvert = () => {
		if (!fromValue || !toValue) {
			return
		}
		const result = convert(textBoxValue, fromValue, toValue)
		setResultText(result)
	}

	return (
		<main style={{ textAlign: 'center', padding: '20px' }}>
			<h1>Abjad Converter</h1>
			{FromSelect()}
			{ToSelect()}
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
			<div style={{ marginBottom: '10px' }}>
				<button onClick={() => handleConvert()} style={{
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

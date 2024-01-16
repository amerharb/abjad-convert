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
		{ value: Abjad.Arabic, label: 'Arabic ابجد' },
		{ value: Abjad.ImperialAramaic, label: 'Imperial Aramaic 𐡀𐡁𐡂𐡃' },
		{ value: Abjad.Phoenician, label: 'Phoenician 𐤀𐤁𐤂𐤃' },
		{ value: Abjad.Syriac, label: 'Syriac ܐܒܓܕ' },
		{ value: Abjad.Tifinagh, label: 'Tifinagh ⴰⴱⵊⴷ' },
		{ value: Abjad.Ugaritic, label: 'Ugaritic 𐎀𐎁𐎂𐎄' },
	];
	const FromSelect = () => <div style={{ marginBottom: '10px' }}>
		<label htmlFor="fromDropdown" style={{ marginRight: '10px' }}>
			From:
		</label>
		<Select
			id="fromDropdown"
			isSearchable={false}
			options={options}
			defaultValue={options[0]}
			onChange={(selectedOption) => {
				setFromValue(selectedOption?.value)
				if (!selectedOption?.value || !toValue) {
					return
				}
				const result = convert(textBoxValue, selectedOption?.value, toValue)
				setResultText(result)
			}}
		/>
	</div>
	const ToSelect = () => <div style={{ marginBottom: '10px' }}>
		<label htmlFor="toDropdown" style={{ marginRight: '10px' }}>
			To:
		</label>
		<Select
			id="toDropdown"
			isSearchable={false}
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
				onChange={(e) => {
					setTextBoxValue(e.target.value)
					if (!fromValue || !toValue) {
						return
					}
					const result = convert(e.target.value, fromValue, toValue)
					setResultText(result)
				}}
				style={{ padding: '10px', width: '100%', minHeight: '100px', fontSize: '25px' }}
			/>
			<div>
				<label htmlFor="resultLabel" style={{ marginRight: '10px' }}>
					Result:
				</label>
				<br/>
				<span
					id="resultLabel"
					style={{ padding: '10px', width: '100%', minHeight: '100px', fontSize: '25px' }}
				>
					{resultText}
				</span>
			</div>
		</main>
	)
}

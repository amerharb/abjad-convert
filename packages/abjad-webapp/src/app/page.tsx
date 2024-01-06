'use client'

export default function Home() {
	return (
		<main>
			<h1>Abjad</h1>
			<label htmlFor="fromDropdown">From:</label>
			<select id="fromDropdown">
				<option value="0">Arabic</option>
				<option value="1">Imperial Aramaic</option>
				<option value="2">Phoenician</option>
				<option value="3">Syriac</option>
				<option value="4">Ugaritic</option>
			</select>

			<label htmlFor="tiDropdown">To:</label>
			<select id="toDropdown">
				<option value="0">Arabic</option>
				<option value="1">Imperial Aramaic</option>
				<option value="2">Phoenician</option>
				<option value="3">Syriac</option>
				<option value="4">Ugaritic</option>
			</select>

		</main>
	)
}

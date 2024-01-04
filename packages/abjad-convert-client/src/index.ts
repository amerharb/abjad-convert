import { Abjad, convert } from 'abjad-convert'

console.log('Abjad Convert')

const arabic = 'ا ب ت ج د خ'
console.log(`convert Arabic text ${arabic} to Ugaritic`)
console.log(calmConvert(arabic, Abjad.Arabic, Abjad.Ugaritic))
console.log(`convert Arabic text ${arabic} to Phoenician`)
console.log(calmConvert(arabic, Abjad.Arabic, Abjad.Phoenician))

const ugaritic = '𐎀 𐎁 𐎚 𐎂 𐎄 𐎃'
console.log(`convert Ugaritic text ${ugaritic} to Arabic`)
console.log(calmConvert(ugaritic, Abjad.Ugaritic, Abjad.Arabic))
console.log(`convert Ugaritic text ${ugaritic} to Phoenician`)
console.log(calmConvert(ugaritic, Abjad.Ugaritic, Abjad.Phoenician))

const phoenician = '𐤀 𐤁 𐤂 𐤃 𐤄 𐤅'
console.log(`convert Phoenician text ${phoenician} to Arabic`)
console.log(calmConvert(phoenician, Abjad.Phoenician, Abjad.Arabic))
console.log(`convert Phoenician text ${phoenician} to Ugaritic`)
console.log(calmConvert(phoenician, Abjad.Phoenician, Abjad.Ugaritic))

console.log(calmConvert('مرحبا', Abjad.Arabic, Abjad.Phoenician))
console.log(calmConvert('مرحبا', Abjad.Arabic, Abjad.Ugaritic))

function calmConvert(source: string, from: Abjad, to: Abjad): string {
	try {
		return convert(source, from, to)
	} catch (e: any) {
		return e.message
	}
}

import { Abjad, convert } from '../../abjad-convert/src'

log('Abjad Convert')

const arabic = 'ا ب ت ج د خ'
log(`convert Arabic text ${arabic} to Ugaritic`)
log(calmConvert(arabic, Abjad.Arabic, Abjad.Ugaritic))
log(`convert Arabic text ${arabic} to Phoenician`)
log(calmConvert(arabic, Abjad.Arabic, Abjad.Phoenician))

const ugaritic = '𐎀 𐎁 𐎚 𐎂 𐎄 𐎃'
log(`convert Ugaritic text ${ugaritic} to Arabic`)
log(calmConvert(ugaritic, Abjad.Ugaritic, Abjad.Arabic))
log(`convert Ugaritic text ${ugaritic} to Phoenician`)
log(calmConvert(ugaritic, Abjad.Ugaritic, Abjad.Phoenician))

const phoenician = '𐤀 𐤁 𐤂 𐤃 𐤄 𐤅'
log(`convert Phoenician text ${phoenician} to Arabic`)
log(calmConvert(phoenician, Abjad.Phoenician, Abjad.Arabic))
log(`convert Phoenician text ${phoenician} to Ugaritic`)
log(calmConvert(phoenician, Abjad.Phoenician, Abjad.Ugaritic))

log(calmConvert('مرحبا', Abjad.Arabic, Abjad.Phoenician))
log(calmConvert('مرحبا', Abjad.Arabic, Abjad.ImperialAramaic))
log(calmConvert('مرحبا', Abjad.Arabic, Abjad.Syriac))
log(calmConvert('مرحبا', Abjad.Arabic, Abjad.Ugaritic))

function calmConvert(source: string, from: Abjad, to: Abjad): string {
	try {
		return convert(source, from, to)
	} catch (e: any) {
		return e.message
	}
}

function log(message: string): void {
	// eslint-disable-next-line no-console
	console.log(message)
}

import { Abjad } from './types'
import { IConvert } from './IConvert'
import { ArabicToImperialAramaicConverter } from './arabic/toImperialAramaic'
import { ArabicToPhoenicianConverter } from './arabic/toPhoenician'
import { ArabicToUgariticConverter } from './arabic/toUgaritic'
import { ImperialAramaicToArabicConverter } from './imperialAramaic/toArabic'
import { ImperialAramaicToPhoenicianConverter } from './imperialAramaic/toPhoenician'
import { ImperialAramaicToUgariticConverter } from './imperialAramaic/toUgaritic'
import { PhoenicianToArabicConverter } from './phoenician/toArabic'
import { PhoenicianToImperialAramaicConverter } from './phoenician/toImperialAramaic'
import { PhoenicianToUgariticConverter } from './phoenician/toUgaritic'
import { UgariticToArabicConverter } from './ugaritic/toArabic'
import { UgariticToImperialAramaicConverter } from './ugaritic/toImperialAramaic'
import { UgariticToPhoenicianConverter } from './ugaritic/toPhoenician'

export function getConverter(from: Abjad, to: Abjad): IConvert {
	switch (from) {
	case Abjad.Arabic:
		switch (to) {
		case Abjad.ImperialAramaic:
			return new ArabicToImperialAramaicConverter()
		case Abjad.Phoenician:
			return new ArabicToPhoenicianConverter()
		case Abjad.Ugaritic:
			return new ArabicToUgariticConverter()
		default:
			throw new Error(`No converter exists from ${Abjad[from]} to ${Abjad[to]}`)
		}
	case Abjad.Ugaritic:
		switch (to) {
		case Abjad.Arabic:
			return new UgariticToArabicConverter()
		case Abjad.ImperialAramaic:
			return new UgariticToImperialAramaicConverter()
		case Abjad.Phoenician:
			return new UgariticToPhoenicianConverter()
		default:
			throw new Error(`No converter exists from ${Abjad[from]} to ${Abjad[to]}`)
		}
	case Abjad.Phoenician:
		switch (to) {
		case Abjad.Arabic:
			return new PhoenicianToArabicConverter()
		case Abjad.ImperialAramaic:
			return new PhoenicianToImperialAramaicConverter()
		case Abjad.Ugaritic:
			return new PhoenicianToUgariticConverter()
		default:
			throw new Error(`No converter exists from ${Abjad[from]} to ${Abjad[to]}`)
		}
	case Abjad.ImperialAramaic: {
		switch (to) {
		case Abjad.Arabic:
			return new ImperialAramaicToArabicConverter()
		case Abjad.Phoenician:
			return new ImperialAramaicToPhoenicianConverter()
		case Abjad.Ugaritic:
			return new ImperialAramaicToUgariticConverter()
		default:
			throw new Error(`No converter exists from ${Abjad[from]} to ${Abjad[to]}`)
		}
	}
	default:
		throw new Error(`No converter exists from ${Abjad[from]} to ${Abjad[to]}`)
	}
}

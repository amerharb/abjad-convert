import { Abjad } from './types'
import { IConvert } from './IConvert'
import { ArabicToUgariticConverter } from './arabic/toUgaritic'
import { ArabicToPhoenicianConverter } from './arabic/toPhoenician'
import { ImperialAramaicToArabicConverter } from "./imperialAramaic/toArabic";
import { ImperialAramaicToPhoenicianConverter } from "./imperialAramaic/toPhoenician";
import { ImperialAramaicToUgariticConverter } from "./imperialAramaic/toUgaritic";
import { PhoenicianToUgariticConverter } from './phoenician/toUgaritic'
import { PhoenicianToArabicConverter } from './phoenician/toArabic'
import { UgariticToArabicConverter } from './ugaritic/toArabic'
import { UgariticToPhoenicianConverter } from './ugaritic/toPhoenician'

export function getConverter(from: Abjad, to: Abjad): IConvert {
	switch (from) {
		case Abjad.Arabic:
			switch (to) {
				case Abjad.Ugaritic:
					return new ArabicToUgariticConverter()
				case Abjad.Phoenician:
					return new ArabicToPhoenicianConverter()
				default:
					throw new Error(`No converter exists from ${Abjad[from]} to ${Abjad[to]}`)
			}
		case Abjad.Ugaritic:
			switch (to) {
				case Abjad.Arabic:
					return new UgariticToArabicConverter()
				case Abjad.Phoenician:
					return new UgariticToPhoenicianConverter()
				default:
					throw new Error(`No converter exists from ${Abjad[from]} to ${Abjad[to]}`)
			}
		case Abjad.Phoenician:
			switch (to) {
				case Abjad.Arabic:
					return new PhoenicianToArabicConverter()
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

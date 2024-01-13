import { Abjad } from './types'
import { IConverter } from './IConverter'
import { ArabicToImperialAramaicConverter } from './arabic/toImperialAramaic'
import { ArabicToPhoenicianConverter } from './arabic/toPhoenician'
import { ArabicToSyriacConverter } from './arabic/toSyriac'
import { ArabicToTifinaghConverter } from './arabic/toTifinagh'
import { ArabicToUgariticConverter } from './arabic/toUgaritic'
import { ImperialAramaicToArabicConverter } from './imperialAramaic/toArabic'
import { PhoenicianToArabicConverter } from './phoenician/toArabic'
import { SyriacToArabicConverter } from './syriac/toArabic'
import { TifinaghToArabicConverter } from './tifinagh/toArabic'
import { UgariticToArabicConverter } from './ugaritic/toArabic'

const converters: IConverter[] = [
	new ArabicToImperialAramaicConverter(),
	new ArabicToPhoenicianConverter(),
	new ArabicToSyriacConverter(),
	new ArabicToTifinaghConverter(),
	new ArabicToUgariticConverter(),
	new ImperialAramaicToArabicConverter(),
	new PhoenicianToArabicConverter(),
	new SyriacToArabicConverter(),
	new TifinaghToArabicConverter(),
	new UgariticToArabicConverter(),
]

export function getConverter(from: Abjad, to: Abjad): IConverter {
	// try to find a direct converter
	const converter = converters.find(c => c.from === from && c.to === to)
	if (converter) {
		return converter
	}

	// try to find two converters and create a composite converter from them
	const fromConverters = converters.filter(c => c.from === from)
	const toConverters = converters.filter(c => c.to === to)
	for (const fromConverter of fromConverters) {
		for (const toConverter of toConverters) {
			if (fromConverter.to === toConverter.from) {
				return {
					from,
					to,
					convert(text: string): string {
						return toConverter.convert(fromConverter.convert(text))
					},
				}
			}
		}
	}

	throw new Error(`No converter exists from ${from} to ${to}`)
}

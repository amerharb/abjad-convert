import { IConvert } from '../IConvert'
import { Abjad } from '../types'
import { UgariticToArabicConverter } from './toArabic'
import { ArabicToImperialAramaicConverter } from '../arabic/toImperialAramaic'

export class UgariticToImperialAramaicConverter implements IConvert {
	public readonly from = Abjad.Ugaritic
	public readonly to = Abjad.Phoenician

	public convert(text: string): string {
		const UgToAr = new UgariticToArabicConverter()
		const ar = UgToAr.convert(text)
		const ArToIa = new ArabicToImperialAramaicConverter()
		return ArToIa.convert(ar)
	}
}

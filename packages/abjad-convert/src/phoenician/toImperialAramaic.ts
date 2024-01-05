import { IConvert } from '../IConvert'
import { Abjad } from '../types'
import { PhoenicianToArabicConverter } from './toArabic'
import { ArabicToImperialAramaicConverter } from '../arabic/toImperialAramaic'

export class PhoenicianToImperialAramaicConverter implements IConvert {
	public readonly from = Abjad.Phoenician
	public readonly to = Abjad.Ugaritic

	public convert(text: string): string {
		const PhToAr = new PhoenicianToArabicConverter()
		const ar = PhToAr.convert(text)
		const ArToIa = new ArabicToImperialAramaicConverter()
		return ArToIa.convert(ar)
	}
}

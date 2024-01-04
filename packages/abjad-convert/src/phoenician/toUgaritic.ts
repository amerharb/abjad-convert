import { IConvert } from '../IConvert'
import { Abjad } from '../types'
import { PhoenicianToArabicConverter } from './toArabic'
import { ArabicToUgariticConverter } from '../arabic/toUgaritic'

export class PhoenicianToUgariticConverter implements IConvert {
	public readonly from = Abjad.Phoenician
	public readonly to = Abjad.Ugaritic

	public convert(text: string): string {
		const PhToAr = new PhoenicianToArabicConverter()
		const ArToUg = new ArabicToUgariticConverter()
		let result = ''
		for (const letter of text) {
			const ar = PhToAr.convert(letter)
			result += ArToUg.convert(ar)
		}
		return result
	}
}

import { IConverter } from '../IConverter'
import { Abjad } from '../types'
import { PhoenicianToArabicConverter } from './toArabic'
import { ArabicToUgariticConverter } from '../arabic/toUgaritic'

export class PhoenicianToUgariticConverter implements IConverter {
	public readonly from = Abjad.Phoenician
	public readonly to = Abjad.Ugaritic

	public convert(text: string): string {
		const PhToAr = new PhoenicianToArabicConverter()
		const ar = PhToAr.convert(text)
		const ArToUg = new ArabicToUgariticConverter()
		return ArToUg.convert(ar)
	}
}

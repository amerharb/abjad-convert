import { IConverter } from '../IConverter'
import { Abjad } from '../types'
import { UgariticToArabicConverter } from './toArabic'
import { ArabicToPhoenicianConverter } from '../arabic/toPhoenician'

export class UgariticToPhoenicianConverter implements IConverter {
	public readonly from = Abjad.Ugaritic
	public readonly to = Abjad.Phoenician

	public convert(text: string): string {
		const UgToAr = new UgariticToArabicConverter()
		const ar = UgToAr.convert(text)
		const ArToPh = new ArabicToPhoenicianConverter()
		return ArToPh.convert(ar)
	}
}

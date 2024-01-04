import { IConvert } from '../IConvert';
import { Abjad } from '../types';
import { UgariticToArabicConverter } from './toArabic';
import { ArabicToPhoenicianConverter } from '../arabic/toPhoenician';

export class UgariticToPhoenicianConverter implements IConvert {
	public readonly from = Abjad.Ugaritic;
	public readonly to = Abjad.Phoenician;

	public convert(text: string): string {
		const UgToAr = new UgariticToArabicConverter()
		const ArToPh = new ArabicToPhoenicianConverter()
		let result = '';
		for (const letter of text) {
			const ar = UgToAr.convert(letter);
			result += ArToPh.convert(ar);
		}
		return result;
	}
}

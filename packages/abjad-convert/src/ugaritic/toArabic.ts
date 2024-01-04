import { Ug } from "./letters"
import { Ar } from "../arabic/letters"
import { IConvert } from "../IConvert";
import { Ug } from './letters'
import { Ar } from '../arabic/letters'
import { IConvert } from '../IConvert';

export class UgariticToArabicConverter implements IConvert {

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Ug.Alpa, Ar.Alef],
			[Ug.Beta, Ar.Ba],
			[Ug.Gamla, Ar.Jeem],
			[Ug.Kha, Ar.Khaa],
			[Ug.Delta, Ar.Dal],
			[Ug.Ho, Ar.Ha],
			[Ug.Wo, Ar.Waw],
			[Ug.Zeta, Ar.Zay],

			[Ug.Hota, Ar.H7aa],
			[Ug.Tet, Ar.TTa],
			[Ug.Yod, Ar.Yaa],
			[Ug.Kaf, Ar.Kaf],
			[Ug.Shin, Ar.Sheen],
			[Ug.Lamda, Ar.Lam],
			[Ug.Mem, Ar.Meem],
			[Ug.Dhal, Ar.Dad],

			[Ug.Nun, Ar.Noon],
			[Ug.Zu, Ar.Zay],
			[Ug.Samka, Ar.Seen],
			[Ug.Ain, Ar.Ayn],
			[Ug.Pu, Ar.Fa],
			[Ug.Sade, Ar.Sad],
			[Ug.Qopa, Ar.Qaf],
			[Ug.Rasha, Ar.Ra],

			[Ug.Thanna, Ar.THa],
			[Ug.Ghain, Ar.Ghayn],
			[Ug.To, Ar.Ta],
			[Ug.I, Ar.AlefMaksura],
			[Ug.U, Ar.Waw],
			[Ug.Ssu, Ar.Sad],
		]
	);

	public convert(text: string): string {
		let result = '';
		for (const letter of text) {
			result += this.map.get(letter) ?? '';
		}
		return result;
	}
}

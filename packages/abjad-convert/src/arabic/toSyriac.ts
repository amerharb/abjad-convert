import { Ar } from './letters'
import { Sy } from '../syriac/letters'
import { IConvert } from '../IConvert'
import { Abjad } from '../types'

export class ArabicToSyriacConverter implements IConvert {
	public readonly from = Abjad.Arabic
	public readonly to = Abjad.Syriac

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Ar.Hamza, Sy.SuperaAlaph], // ء -> ܐ TODO: check
			[Ar.AlefMadda, Sy.Alaph], // آ -> ܐ
			[Ar.AlefHamza, Sy.Alaph], // أ -> ܐ
			[Ar.WawHamza, Sy.Waw], // ؤ -> ܘ
			[Ar.AlefHamzaMaksura, Sy.YudhHe], // ى -> ܞ
			[Ar.Alef, Sy.Alaph], // ا -> ܐ
			[Ar.Ba, Sy.Beth], // ب -> ܒ
			[Ar.TaMarbuta, Sy.Taw], // ة -> ܬ
			[Ar.Ta, Sy.Taw], // ت -> ܬ
			[Ar.Tha, Sy.Taw], // ث -> ܬ
			[Ar.Jeem, Sy.Gamal], // ج -> ܓ
			[Ar.H7aa, Sy.Heth], // ح -> ܚ
			[Ar.Khaa, Sy.Heth], // خ -> ܚ
			[Ar.Dal, Sy.Dalath], // د -> ܕ
			[Ar.Thal, Sy.Dalath], // ذ -> ܕ
			[Ar.Ra, Sy.Rish], // ر -> ܪ
			[Ar.Zay, Sy.Zain], // ز -> ܙ
			[Ar.Seen, Sy.Semkath], // س -> ܣ
			[Ar.Sheen, Sy.Shin], // ش -> ܫ
			[Ar.Sad, Sy.Sadhe], // ص -> ܨ
			[Ar.Dad, Sy.Dalath], // ض -> ܕ
			[Ar.TTa, Sy.Teth], // ط -> ܛ
			[Ar.THa, Sy.Taw], // ظ -> ܬ
			[Ar.Ayn, Sy.E], // ع -> ܥ
			[Ar.Ghayn, Sy.E], // غ -> ܥ
			[Ar.Fa, Sy.Pe], // ف -> ܦ
			[Ar.Qaf, Sy.Qaph], // ق -> ܩ
			[Ar.Kaf, Sy.Kaph], // ك -> ܟ
			[Ar.Lam, Sy.Lamadh], // ل -> ܠ
			[Ar.Meem, Sy.Mim], // م -> ܡ
			[Ar.Noon, Sy.Nun], // ن -> ܢ
			[Ar.Ha, Sy.He], // ه -> ܗ
			[Ar.Waw, Sy.Waw], // و -> ܘ
			[Ar.Yaa, Sy.Yudh], // ي -> ܝ
			[Ar.AlefMaksura, Sy.Alaph], // ى -> ܐ
		]
	)

	public convert(text: string): string {
		let result = ''
		for (const letter of text) {
			const u = this.map.get(letter) ?? ''
			result += u
		}
		return result
	}
}

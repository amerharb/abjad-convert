import { arabic } from './letters'
import { Sy } from '../syriac/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class ArabicToSyriacConverter implements IConverter {
	public readonly from = Abjad.Arabic
	public readonly to = Abjad.Syriac

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[arabic.L.Hamza, Sy.SuperaAlaph], // ء -> ܐ TODO: check
			[arabic.L.AlefMadda, Sy.Alaph], // آ -> ܐ
			[arabic.L.AlefHamza, Sy.Alaph], // أ -> ܐ
			[arabic.L.WawHamza, Sy.Waw], // ؤ -> ܘ
			[arabic.L.AlefHamzaMaksura, Sy.YudhHe], // ى -> ܞ
			[arabic.L.Alef, Sy.Alaph], // ا -> ܐ
			[arabic.L.Ba, Sy.Beth], // ب -> ܒ
			[arabic.L.TaMarbuta, Sy.Taw], // ة -> ܬ
			[arabic.L.Ta, Sy.Taw], // ت -> ܬ
			[arabic.L.Tha, Sy.Taw], // ث -> ܬ
			[arabic.L.Jeem, Sy.Gamal], // ج -> ܓ
			[arabic.L.H7aa, Sy.Heth], // ح -> ܚ
			[arabic.L.Khaa, Sy.Heth], // خ -> ܚ
			[arabic.L.Dal, Sy.Dalath], // د -> ܕ
			[arabic.L.Thal, Sy.Dalath], // ذ -> ܕ
			[arabic.L.Ra, Sy.Rish], // ر -> ܪ
			[arabic.L.Zay, Sy.Zain], // ز -> ܙ
			[arabic.L.Seen, Sy.Semkath], // س -> ܣ
			[arabic.L.Sheen, Sy.Shin], // ش -> ܫ
			[arabic.L.Sad, Sy.Sadhe], // ص -> ܨ
			[arabic.L.Dad, Sy.Dalath], // ض -> ܕ
			[arabic.L.TTa, Sy.Teth], // ط -> ܛ
			[arabic.L.THa, Sy.Taw], // ظ -> ܬ
			[arabic.L.Ayn, Sy.E], // ع -> ܥ
			[arabic.L.Ghayn, Sy.E], // غ -> ܥ
			[arabic.L.Fa, Sy.Pe], // ف -> ܦ
			[arabic.L.Qaf, Sy.Qaph], // ق -> ܩ
			[arabic.L.Kaf, Sy.Kaph], // ك -> ܟ
			[arabic.L.Lam, Sy.Lamadh], // ل -> ܠ
			[arabic.L.Meem, Sy.Mim], // م -> ܡ
			[arabic.L.Noon, Sy.Nun], // ن -> ܢ
			[arabic.L.Ha, Sy.He], // ه -> ܗ
			[arabic.L.Waw, Sy.Waw], // و -> ܘ
			[arabic.L.Yaa, Sy.Yudh], // ي -> ܝ
			[arabic.L.AlefMaksura, Sy.Alaph], // ى -> ܐ
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

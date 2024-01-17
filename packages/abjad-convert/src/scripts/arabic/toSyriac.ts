import { arabic } from './letters'
import { syriac } from '../syriac/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class ArabicToSyriacConverter implements IConverter {
	public readonly from = Abjad.Arabic
	public readonly to = Abjad.Syriac

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[arabic.L.Hamza, syriac.L.SuperaAlaph], // ء -> ܐ TODO: check
			[arabic.L.AlefMadda, syriac.L.Alaph], // آ -> ܐ
			[arabic.L.AlefHamza, syriac.L.Alaph], // أ -> ܐ
			[arabic.L.WawHamza, syriac.L.Waw], // ؤ -> ܘ
			[arabic.L.AlefHamzaMaksura, syriac.L.YudhHe], // ى -> ܞ
			[arabic.L.Alef, syriac.L.Alaph], // ا -> ܐ
			[arabic.L.Ba, syriac.L.Beth], // ب -> ܒ
			[arabic.L.TaMarbuta, syriac.L.Taw], // ة -> ܬ
			[arabic.L.Ta, syriac.L.Taw], // ت -> ܬ
			[arabic.L.Tha, syriac.L.Taw], // ث -> ܬ
			[arabic.L.Jeem, syriac.L.Gamal], // ج -> ܓ
			[arabic.L.H7aa, syriac.L.Heth], // ح -> ܚ
			[arabic.L.Khaa, syriac.L.Heth], // خ -> ܚ
			[arabic.L.Dal, syriac.L.Dalath], // د -> ܕ
			[arabic.L.Thal, syriac.L.Dalath], // ذ -> ܕ
			[arabic.L.Ra, syriac.L.Rish], // ر -> ܪ
			[arabic.L.Zay, syriac.L.Zain], // ز -> ܙ
			[arabic.L.Seen, syriac.L.Semkath], // س -> ܣ
			[arabic.L.Sheen, syriac.L.Shin], // ش -> ܫ
			[arabic.L.Sad, syriac.L.Sadhe], // ص -> ܨ
			[arabic.L.Dad, syriac.L.Dalath], // ض -> ܕ
			[arabic.L.TTa, syriac.L.Teth], // ط -> ܛ
			[arabic.L.THa, syriac.L.Taw], // ظ -> ܬ
			[arabic.L.Ayn, syriac.L.E], // ع -> ܥ
			[arabic.L.Ghayn, syriac.L.E], // غ -> ܥ
			[arabic.L.Fa, syriac.L.Pe], // ف -> ܦ
			[arabic.L.Qaf, syriac.L.Qaph], // ق -> ܩ
			[arabic.L.Kaf, syriac.L.Kaph], // ك -> ܟ
			[arabic.L.Lam, syriac.L.Lamadh], // ل -> ܠ
			[arabic.L.Meem, syriac.L.Mim], // م -> ܡ
			[arabic.L.Noon, syriac.L.Nun], // ن -> ܢ
			[arabic.L.Ha, syriac.L.He], // ه -> ܗ
			[arabic.L.Waw, syriac.L.Waw], // و -> ܘ
			[arabic.L.Yaa, syriac.L.Yudh], // ي -> ܝ
			[arabic.L.AlefMaksura, syriac.L.Alaph], // ى -> ܐ
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

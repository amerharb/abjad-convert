import { arabic } from './letters'
import { tifinagh } from '../tifinagh/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class ArabicToTifinaghConverter implements IConverter {
	public readonly from = Abjad.Arabic
	public readonly to = Abjad.Tifinagh

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[arabic.L.Hamza, tifinagh.L.Ya], /** ء -> ⴰ */
			[arabic.L.AlefMadda, tifinagh.L.Ya], /** ا -> ⴰ */
			[arabic.L.AlefHamza, tifinagh.L.Ya], /** أ -> ⴰ*/
			[arabic.L.WawHamza, tifinagh.L.Yu], /** ؤ -> ⵓ */
			[arabic.L.AlefHamzaMaksura, tifinagh.L.Ya], /** ى -> ⴰ */
			[arabic.L.Alef, tifinagh.L.Ya], /** ا -> ⴰ */
			[arabic.L.Ba, tifinagh.L.Yab], /** ب -> ⴱ */
			[arabic.L.TaMarbuta, tifinagh.L.Ya], /** ة -> ⴰ */
			[arabic.L.Ta, tifinagh.L.Yat], /** ت -> ⵜ */
			[arabic.L.Tha, tifinagh.L.Yath], /** ث -> ⵝ */
			[arabic.L.Jeem, tifinagh.L.Yazh], /** ج -> ⵊ */
			[arabic.L.H7aa, tifinagh.L.Yahh], /** ح -> ⵃ */
			[arabic.L.Khaa, tifinagh.L.Yakh], /** خ -> ⵅ */
			[arabic.L.Dal, tifinagh.L.Yad], /** د -> ⴷ */
			[arabic.L.Thal, tifinagh.L.Yadh], /** ذ -> ⴸ */
			[arabic.L.Ra, tifinagh.L.Yar], /** ر -> ⵔ */
			[arabic.L.Zay, tifinagh.L.Ya], /** ز -> ⴰ */
			[arabic.L.Seen, tifinagh.L.Yas], /** س -> ⵙ */
			[arabic.L.Sheen, tifinagh.L.Yash], /** ش -> ⵛ */
			[arabic.L.Sad, tifinagh.L.Yat], /** ص -> ⵜ */
			[arabic.L.Dad, tifinagh.L.Yadd], /** ض -> ⴹ */
			[arabic.L.TTa, tifinagh.L.Yatt], /** ط -> ⵟ */
			[arabic.L.THa, tifinagh.L.Yaddh], /** ظ -> ⴺ */
			[arabic.L.Ayn, tifinagh.L.Yaa], /** ع -> ⵄ */
			[arabic.L.Ghayn, tifinagh.L.Yagh], /** غ -> ⵖ */
			[arabic.L.Fa, tifinagh.L.Yaf], /** ف -> ⴼ */
			[arabic.L.Qaf, tifinagh.L.Yaq], /** ق -> ⵇ */
			[arabic.L.Kaf, tifinagh.L.Yak], /** ك -> ⴽ */
			[arabic.L.Lam, tifinagh.L.Yal], /** ل -> ⵍ */
			[arabic.L.Meem, tifinagh.L.Yam], /** م -> ⵎ */
			[arabic.L.Noon, tifinagh.L.Yan], /** ن -> ⵏ */
			[arabic.L.Ha, tifinagh.L.Yey], /** ه -> ⴻ */
			[arabic.L.Waw, tifinagh.L.Yu], /** و -> ⵓ */
			[arabic.L.AlefMaksura, tifinagh.L.Ya], /** ى -> ⴰ */
			[arabic.L.Yaa, tifinagh.L.Yi], /** ي -> ⵉ */
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

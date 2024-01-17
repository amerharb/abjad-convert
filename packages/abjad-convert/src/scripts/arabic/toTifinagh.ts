import { arabic } from './letters'
import { Ti } from '../tifinagh/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class ArabicToTifinaghConverter implements IConverter {
	public readonly from = Abjad.Arabic
	public readonly to = Abjad.Tifinagh

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[arabic.L.Hamza, Ti.Ya], /** ء -> ⴰ */
			[arabic.L.AlefMadda, Ti.Ya], /** ا -> ⴰ */
			[arabic.L.AlefHamza, Ti.Ya], /** أ -> ⴰ*/
			[arabic.L.WawHamza, Ti.Yu], /** ؤ -> ⵓ */
			[arabic.L.AlefHamzaMaksura, Ti.Ya], /** ى -> ⴰ */
			[arabic.L.Alef, Ti.Ya], /** ا -> ⴰ */
			[arabic.L.Ba, Ti.Yab], /** ب -> ⴱ */
			[arabic.L.TaMarbuta, Ti.Ya], /** ة -> ⴰ */
			[arabic.L.Ta, Ti.Yat], /** ت -> ⵜ */
			[arabic.L.Tha, Ti.Yath], /** ث -> ⵝ */
			[arabic.L.Jeem, Ti.Yazh], /** ج -> ⵊ */
			[arabic.L.H7aa, Ti.Yahh], /** ح -> ⵃ */
			[arabic.L.Khaa, Ti.Yakh], /** خ -> ⵅ */
			[arabic.L.Dal, Ti.Yad], /** د -> ⴷ */
			[arabic.L.Thal, Ti.Yadh], /** ذ -> ⴸ */
			[arabic.L.Ra, Ti.Yar], /** ر -> ⵔ */
			[arabic.L.Zay, Ti.Ya], /** ز -> ⴰ */
			[arabic.L.Seen, Ti.Yas], /** س -> ⵙ */
			[arabic.L.Sheen, Ti.Yash], /** ش -> ⵛ */
			[arabic.L.Sad, Ti.Yat], /** ص -> ⵜ */
			[arabic.L.Dad, Ti.Yadd], /** ض -> ⴹ */
			[arabic.L.TTa, Ti.Yatt], /** ط -> ⵟ */
			[arabic.L.THa, Ti.Yaddh], /** ظ -> ⴺ */
			[arabic.L.Ayn, Ti.Yaa], /** ع -> ⵄ */
			[arabic.L.Ghayn, Ti.Yagh], /** غ -> ⵖ */
			[arabic.L.Fa, Ti.Yaf], /** ف -> ⴼ */
			[arabic.L.Qaf, Ti.Yaq], /** ق -> ⵇ */
			[arabic.L.Kaf, Ti.Yak], /** ك -> ⴽ */
			[arabic.L.Lam, Ti.Yal], /** ل -> ⵍ */
			[arabic.L.Meem, Ti.Yam], /** م -> ⵎ */
			[arabic.L.Noon, Ti.Yan], /** ن -> ⵏ */
			[arabic.L.Ha, Ti.Yey], /** ه -> ⴻ */
			[arabic.L.Waw, Ti.Yu], /** و -> ⵓ */
			[arabic.L.AlefMaksura, Ti.Ya], /** ى -> ⴰ */
			[arabic.L.Yaa, Ti.Yi], /** ي -> ⵉ */
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

import { Ar } from './letters'
import { Ti } from '../tifinagh/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class ArabicToTifinaghConverter implements IConverter {
	public readonly from = Abjad.Arabic
	public readonly to = Abjad.Tifinagh

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Ar.Hamza, Ti.Ya], /** ء -> ⴰ */
			[Ar.AlefMadda, Ti.Ya], /** ا -> ⴰ */
			[Ar.AlefHamza, Ti.Ya], /** أ -> ⴰ*/
			[Ar.WawHamza, Ti.Yu], /** ؤ -> ⵓ */
			[Ar.AlefHamzaMaksura, Ti.Ya], /** ى -> ⴰ */
			[Ar.Alef, Ti.Ya], /** ا -> ⴰ */
			[Ar.Ba, Ti.Yab], /** ب -> ⴱ */
			[Ar.TaMarbuta, Ti.Ya], /** ة -> ⴰ */
			[Ar.Ta, Ti.Yat], /** ت -> ⵜ */
			[Ar.Tha, Ti.Yath], /** ث -> ⵝ */
			[Ar.Jeem, Ti.Yazh], /** ج -> ⵊ */
			[Ar.H7aa, Ti.Yahh], /** ح -> ⵃ */
			[Ar.Khaa, Ti.Yakh], /** خ -> ⵅ */
			[Ar.Dal, Ti.Yad], /** د -> ⴷ */
			[Ar.Thal, Ti.Yadh], /** ذ -> ⴸ */
			[Ar.Ra, Ti.Yar], /** ر -> ⵔ */
			[Ar.Zay, Ti.Ya], /** ز -> ⴰ */
			[Ar.Seen, Ti.Yas], /** س -> ⵙ */
			[Ar.Sheen, Ti.Yash], /** ش -> ⵛ */
			[Ar.Sad, Ti.Yat], /** ص -> ⵜ */
			[Ar.Dad, Ti.Yadd], /** ض -> ⴹ */
			[Ar.TTa, Ti.Yatt], /** ط -> ⵟ */
			[Ar.THa, Ti.Yaddh], /** ظ -> ⴺ */
			[Ar.Ayn, Ti.Yaa], /** ع -> ⵄ */
			[Ar.Ghayn, Ti.Yagh], /** غ -> ⵖ */
			[Ar.Fa, Ti.Yaf], /** ف -> ⴼ */
			[Ar.Qaf, Ti.Yaq], /** ق -> ⵇ */
			[Ar.Kaf, Ti.Yak], /** ك -> ⴽ */
			[Ar.Lam, Ti.Yal], /** ل -> ⵍ */
			[Ar.Meem, Ti.Yam], /** م -> ⵎ */
			[Ar.Noon, Ti.Yan], /** ن -> ⵏ */
			[Ar.Ha, Ti.Yey], /** ه -> ⴻ */
			[Ar.Waw, Ti.Yu], /** و -> ⵓ */
			[Ar.AlefMaksura, Ti.Ya], /** ى -> ⴰ */
			[Ar.Yaa, Ti.Yi], /** ي -> ⵉ */
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

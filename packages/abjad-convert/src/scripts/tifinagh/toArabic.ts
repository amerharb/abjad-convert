import { tifinagh } from './letters'
import { arabic } from '../arabic/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class TifinaghToArabicConverter implements IConverter {
	public readonly from = Abjad.Tifinagh
	public readonly to = Abjad.Arabic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[tifinagh.L.Ya, arabic.L.Alef], // ⴰ -> ا
			[tifinagh.L.Yab, arabic.L.Ba], // ⴱ -> ب
			[tifinagh.L.Yabh, arabic.L.Ba], // ⴲ -> ب P
			[tifinagh.L.Yag, arabic.L.Jeem], // ⴳ -> ج G
			[tifinagh.L.Yaghh, arabic.L.Jeem], // ⴴ -> ج G
			[tifinagh.L.BerberAcademyYaj, arabic.L.Jeem], // ⴵ -> ج
			[tifinagh.L.Yaj, arabic.L.Jeem], // ⴶ -> ج
			[tifinagh.L.Yad, arabic.L.Dal], // ⴷ -> د
			[tifinagh.L.Yadh, arabic.L.Thal], // ⴸ -> ذ
			[tifinagh.L.Yadd, arabic.L.Dad], // ⴹ -> ض
			[tifinagh.L.Yaddh, arabic.L.THa], // ⴺ -> ظ
			[tifinagh.L.Yey, arabic.L.Ha], // ⴻ -> ه
			[tifinagh.L.Yaf, arabic.L.Fa], // ⴼ -> ف
			[tifinagh.L.Yak, arabic.L.Kaf], // ⴽ -> ك
			[tifinagh.L.TuaregYak, arabic.L.Kaf], // ⴾ -> ك
			[tifinagh.L.Yakhh, arabic.L.Kaf], // ⴿ -> ك
			[tifinagh.L.Yah, arabic.L.Ha], // ⵀ -> هـ , TODO: also it can be B ب
			[tifinagh.L.BerberAcademyYah, arabic.L.Ha], // ⵁ -> هـ
			[tifinagh.L.TuaregYah, arabic.L.Ha], // ⵂ -> هـ
			[tifinagh.L.Yahh, arabic.L.H7aa], // ⵃ -> ح
			[tifinagh.L.Yaa, arabic.L.Ayn], // ⵄ -> ع
			[tifinagh.L.Yakh, arabic.L.Khaa], // ⵅ -> خ
			[tifinagh.L.TuaregYakh, arabic.L.Khaa], // ⵆ -> خ
			[tifinagh.L.Yaq, arabic.L.Qaf], // ⵇ -> ق
			[tifinagh.L.TuaregYaq, arabic.L.Qaf], // ⵈ -> ق
			[tifinagh.L.Yi, arabic.L.Yaa], // ⵉ -> ي
			[tifinagh.L.Yazh, arabic.L.Jeem], // ⵊ -> ج
			[tifinagh.L.AhaggarYazh, arabic.L.Jeem], // ⵋ -> ج
			[tifinagh.L.TuaregYazh, arabic.L.Jeem], // ⵌ -> ج
			[tifinagh.L.Yal, arabic.L.Lam], // ⵍ -> ل
			[tifinagh.L.Yam, arabic.L.Meem], // ⵎ -> م
			[tifinagh.L.Yan, arabic.L.Noon], // ⵏ -> ن
			[tifinagh.L.TuaregYagn, arabic.L.Noon], // ⵐ -> ن IPA: ɲ TODO: this is 2 letters of ني
			[tifinagh.L.TuaregYang, arabic.L.Noon], // ⵑ -> ن IPA: ŋ
			[tifinagh.L.Yap, arabic.L.Ba], // ⵒ -> ب
			[tifinagh.L.Yu, arabic.L.Waw], // ⵓ -> و
			[tifinagh.L.Yar, arabic.L.Ra], // ⵔ -> ر
			[tifinagh.L.Yarr, arabic.L.Ra], // ⵕ -> ر
			[tifinagh.L.Yagh, arabic.L.Ghayn], // ⵖ -> غ
			[tifinagh.L.TuaregYagh, arabic.L.Ghayn], // ⵗ -> غ
			[tifinagh.L.AyerYagh, arabic.L.Ghayn], // ⵘ -> غ TODO: this can be ج
			[tifinagh.L.Yas, arabic.L.Seen], // ⵙ -> س
			[tifinagh.L.Yass, arabic.L.Seen], // ⵚ -> ص
			[tifinagh.L.Yash, arabic.L.Sheen], // ⵛ -> ش
			[tifinagh.L.Yat, arabic.L.Ta], // ⵜ -> ت
			[tifinagh.L.Yath, arabic.L.Tha], // ⵝ -> ث
			[tifinagh.L.Yach, arabic.L.Jeem], // ⵞ -> ج
			[tifinagh.L.Yatt, arabic.L.Ta], // ⵟ -> ت
			[tifinagh.L.Yav, arabic.L.Fa], // ⵠ -> ف
			[tifinagh.L.Yaw, arabic.L.Waw], // ⵡ -> و
			[tifinagh.L.Yay, arabic.L.Yaa], // ⵢ -> ي
			[tifinagh.L.Yaz, arabic.L.Zay], // ⵣ -> ز
			[tifinagh.L.TawellemetYaz, arabic.L.Zay], // ⵤ -> ز
			[tifinagh.L.Yazz, arabic.L.Zay], // ⵥ -> ز
			[tifinagh.L.Ye, arabic.L.Yaa], // ⵦ -> ي
			[tifinagh.L.Yo, arabic.L.Waw], // ⵧ -> و
			[tifinagh.L.ModifierLetterLabializationMark, ''], // ⵯ -> nothing
			[tifinagh.L.SeparatorMark, ''], // ⵰ -> nothing
			[tifinagh.L.ConsonantJoiner, ''], // ⵿ -> nothing
		]
	)

	public convert(text: string): string {
		let result = ''
		for (const letter of text) {
			result += this.map.get(letter) ?? ''
		}
		return result
	}
}

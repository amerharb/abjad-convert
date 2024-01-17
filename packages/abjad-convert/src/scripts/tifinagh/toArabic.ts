import { Ti } from './letters'
import { arabic } from '../arabic/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class TifinaghToArabicConverter implements IConverter {
	public readonly from = Abjad.Tifinagh
	public readonly to = Abjad.Arabic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Ti.Ya, arabic.L.Alef], // ⴰ -> ا
			[Ti.Yab, arabic.L.Ba], // ⴱ -> ب
			[Ti.Yabh, arabic.L.Ba], // ⴲ -> ب P
			[Ti.Yag, arabic.L.Jeem], // ⴳ -> ج G
			[Ti.Yagh, arabic.L.Jeem], // ⴴ -> ج G
			[Ti.Yad, arabic.L.Dal], // ⴷ -> د
			[Ti.Yadh, arabic.L.Thal], // ⴸ -> ذ
			[Ti.Yadd, arabic.L.Dad], // ⴹ -> ض
			[Ti.Yaddh, arabic.L.THa], // ⴺ -> ظ
			[Ti.Yey, arabic.L.Ha], // ⴻ -> ه
			[Ti.Yaf, arabic.L.Fa], // ⴼ -> ف
			[Ti.Yak, arabic.L.Kaf], // ⴽ -> ك
			[Ti.TuaregYak, arabic.L.Kaf], // ⴾ -> ك
			[Ti.Yakhh, arabic.L.Kaf], // ⴿ -> ك
			[Ti.Yah, arabic.L.Ha], // ⵀ -> هـ , TODO: also it can be B ب
			[Ti.BerberAcademyYah, arabic.L.Ha], // ⵁ -> هـ
			[Ti.TuaregYah, arabic.L.Ha], // ⵂ -> هـ
			[Ti.Yahh, arabic.L.H7aa], // ⵃ -> ح
			[Ti.Yaa, arabic.L.Ayn], // ⵄ -> ع
			[Ti.Yakh, arabic.L.Khaa], // ⵅ -> خ
			[Ti.TuaregYakh, arabic.L.Khaa], // ⵆ -> خ
			[Ti.Yaq, arabic.L.Qaf], // ⵇ -> ق
			[Ti.TuaregYaq, arabic.L.Qaf], // ⵈ -> ق
			[Ti.Yi, arabic.L.Yaa], // ⵉ -> ي
			[Ti.Yazh, arabic.L.Jeem], // ⵊ -> ج
			[Ti.AhaggarYazh, arabic.L.Jeem], // ⵋ -> ج
			[Ti.TuaregYazh, arabic.L.Jeem], // ⵌ -> ج
			[Ti.Yal, arabic.L.Lam], // ⵍ -> ل
			[Ti.Yam, arabic.L.Meem], // ⵎ -> م
			[Ti.Yan, arabic.L.Noon], // ⵏ -> ن
			[Ti.TuaregYagn, arabic.L.Noon], // ⵐ -> ن IPA: ɲ TODO: this is 2 letters of ني
			[Ti.TuaregYang, arabic.L.Noon], // ⵑ -> ن IPA: ŋ
			[Ti.Yap, arabic.L.Ba], // ⵒ -> ب
			[Ti.Yu, arabic.L.Waw], // ⵓ -> و
			[Ti.Yar, arabic.L.Ra], // ⵔ -> ر
			[Ti.Yarr, arabic.L.Ra], // ⵕ -> ر
			[Ti.Yagh, arabic.L.Ghayn], // ⵖ -> غ
			[Ti.TuaregYagh, arabic.L.Ghayn], // ⵗ -> غ
			[Ti.AyerYagh, arabic.L.Ghayn], // ⵘ -> غ TODO: this can be ج
			[Ti.Yas, arabic.L.Seen], // ⵙ -> س
			[Ti.Yass, arabic.L.Seen], // ⵚ -> ص
			[Ti.Yash, arabic.L.Sheen], // ⵛ -> ش
			[Ti.Yat, arabic.L.Ta], // ⵜ -> ت
			[Ti.Yath, arabic.L.Tha], // ⵝ -> ث
			[Ti.Yach, arabic.L.Jeem], // ⵞ -> ج
			[Ti.Yatt, arabic.L.Ta], // ⵟ -> ت
			[Ti.Yav, arabic.L.Fa], // ⵠ -> ف
			[Ti.Yaw, arabic.L.Waw], // ⵡ -> و
			[Ti.Yay, arabic.L.Yaa], // ⵢ -> ي
			[Ti.Yaz, arabic.L.Zay], // ⵣ -> ز
			[Ti.TawellemetYaz, arabic.L.Zay], // ⵤ -> ز
			[Ti.Yazz, arabic.L.Zay], // ⵥ -> ز
			[Ti.Ye, arabic.L.Yaa], // ⵦ -> ي
			[Ti.Yo, arabic.L.Waw], // ⵧ -> و
			[Ti.ModifierLetterLabializationMark, ''], // ⵯ -> nothing
			[Ti.SeparatorMark, ''], // ⵯ -> nothing
			[Ti.ConsonantJoiner, ''], // ⵯ -> nothing
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

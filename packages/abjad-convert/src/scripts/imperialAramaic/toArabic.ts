import { Ia } from './letters'
import { arabic } from '../arabic/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class ImperialAramaicToArabicConverter implements IConverter {
	public readonly from = Abjad.ImperialAramaic
	public readonly to = Abjad.Arabic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Ia.Aleph, arabic.L.Alef], // 𐡀 -> ا
			[Ia.Bet, arabic.L.Ba], // 𐡁 -> ب
			[Ia.Gimel, arabic.L.Jeem], // 𐡂 -> ج
			[Ia.Daleth, arabic.L.Dal], // 𐡃 -> د
			[Ia.He, arabic.L.Ha], // 𐡄 -> ه
			[Ia.Waw, arabic.L.Waw], // 𐡅 -> و
			[Ia.Zayin, arabic.L.Zay], // 𐡆 -> ز
			[Ia.Heth, arabic.L.Ha], // 𐡇 -> ح
			[Ia.Teth, arabic.L.Ta], // 𐡈 -> ط
			[Ia.Yod, arabic.L.Yaa], // 𐡉 -> ي
			[Ia.Kaph, arabic.L.Kaf], // 𐡊 -> ك
			[Ia.Lamedh, arabic.L.Lam], // 𐡋 -> ل
			[Ia.Mem, arabic.L.Meem], // 𐡌 -> م
			[Ia.Nun, arabic.L.Noon], // 𐡍 -> ن
			[Ia.Samekh, arabic.L.Seen], // 𐡎 -> س
			[Ia.Ayin, arabic.L.Ayn], // 𐡏 -> ع
			[Ia.Pe, arabic.L.Fa], // 𐡐 -> ف
			[Ia.Sadhe, arabic.L.Sad], // 𐡑 -> ص
			[Ia.Qoph, arabic.L.Qaf], // 𐡒 -> ق
			[Ia.Resh, arabic.L.Ra], // 𐡓 -> ر
			[Ia.Shin, arabic.L.Sheen], // 𐡔 -> ش
			[Ia.Taw, arabic.L.Ta], // 𐡕 -> ت
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

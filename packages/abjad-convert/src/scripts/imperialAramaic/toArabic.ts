import { Ia } from './letters'
import { Ar } from '../arabic/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class ImperialAramaicToArabicConverter implements IConverter {
	public readonly from = Abjad.ImperialAramaic
	public readonly to = Abjad.Arabic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Ia.Aleph, Ar.Alef], // 𐡀 -> ا
			[Ia.Bet, Ar.Ba], // 𐡁 -> ب
			[Ia.Gimel, Ar.Jeem], // 𐡂 -> ج
			[Ia.Daleth, Ar.Dal], // 𐡃 -> د
			[Ia.He, Ar.Ha], // 𐡄 -> ه
			[Ia.Waw, Ar.Waw], // 𐡅 -> و
			[Ia.Zayin, Ar.Zay], // 𐡆 -> ز
			[Ia.Heth, Ar.H7aa], // 𐡇 -> ح
			[Ia.Teth, Ar.TTa], // 𐡈 -> ط
			[Ia.Yod, Ar.Yaa], // 𐡉 -> ي
			[Ia.Kaph, Ar.Kaf], // 𐡊 -> ك
			[Ia.Lamedh, Ar.Lam], // 𐡋 -> ل
			[Ia.Mem, Ar.Meem], // 𐡌 -> م
			[Ia.Nun, Ar.Noon], // 𐡍 -> ن
			[Ia.Samekh, Ar.Seen], // 𐡎 -> س
			[Ia.Ayin, Ar.Ayn], // 𐡏 -> ع
			[Ia.Pe, Ar.Fa], // 𐡐 -> ف
			[Ia.Sadhe, Ar.Sad], // 𐡑 -> ص
			[Ia.Qoph, Ar.Qaf], // 𐡒 -> ق
			[Ia.Resh, Ar.Ra], // 𐡓 -> ر
			[Ia.Shin, Ar.Sheen], // 𐡔 -> ش
			[Ia.Taw, Ar.Ta], // 𐡕 -> ت
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

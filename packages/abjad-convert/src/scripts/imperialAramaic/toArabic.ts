import { imperialAramaic } from './letters'
import { arabic } from '../arabic/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class ImperialAramaicToArabicConverter implements IConverter {
	public readonly from = Abjad.ImperialAramaic
	public readonly to = Abjad.Arabic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[imperialAramaic.L.Aleph, arabic.L.Alef], // 𐡀 -> ا
			[imperialAramaic.L.Bet, arabic.L.Ba], // 𐡁 -> ب
			[imperialAramaic.L.Gimel, arabic.L.Jeem], // 𐡂 -> ج
			[imperialAramaic.L.Daleth, arabic.L.Dal], // 𐡃 -> د
			[imperialAramaic.L.He, arabic.L.Ha], // 𐡄 -> ه
			[imperialAramaic.L.Waw, arabic.L.Waw], // 𐡅 -> و
			[imperialAramaic.L.Zayin, arabic.L.Zay], // 𐡆 -> ز
			[imperialAramaic.L.Heth, arabic.L.Ha], // 𐡇 -> ح
			[imperialAramaic.L.Teth, arabic.L.Ta], // 𐡈 -> ط
			[imperialAramaic.L.Yod, arabic.L.Yaa], // 𐡉 -> ي
			[imperialAramaic.L.Kaph, arabic.L.Kaf], // 𐡊 -> ك
			[imperialAramaic.L.Lamedh, arabic.L.Lam], // 𐡋 -> ل
			[imperialAramaic.L.Mem, arabic.L.Meem], // 𐡌 -> م
			[imperialAramaic.L.Nun, arabic.L.Noon], // 𐡍 -> ن
			[imperialAramaic.L.Samekh, arabic.L.Seen], // 𐡎 -> س
			[imperialAramaic.L.Ayin, arabic.L.Ayn], // 𐡏 -> ع
			[imperialAramaic.L.Pe, arabic.L.Fa], // 𐡐 -> ف
			[imperialAramaic.L.Sadhe, arabic.L.Sad], // 𐡑 -> ص
			[imperialAramaic.L.Qoph, arabic.L.Qaf], // 𐡒 -> ق
			[imperialAramaic.L.Resh, arabic.L.Ra], // 𐡓 -> ر
			[imperialAramaic.L.Shin, arabic.L.Sheen], // 𐡔 -> ش
			[imperialAramaic.L.Taw, arabic.L.Ta], // 𐡕 -> ت
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

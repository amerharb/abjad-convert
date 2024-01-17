import { phoenician } from './letters'
import { arabic } from '../arabic/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class PhoenicianToArabicConverter implements IConverter {
	public readonly from = Abjad.Phoenician
	public readonly to = Abjad.Arabic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[phoenician.L.WordSeparator, ' '],
			[phoenician.L.Alep, arabic.L.Alef], // 𐤀 -> ا
			[phoenician.L.Bet, arabic.L.Ba], // 𐤁 -> ب
			[phoenician.L.Gimi, arabic.L.Jeem], // 𐤂 -> ج
			[phoenician.L.Dalet, arabic.L.Dal], // 𐤃 -> د
			[phoenician.L.He, arabic.L.Ha], // 𐤄 ->  ه
			[phoenician.L.Waw, arabic.L.Waw], // 𐤅 ->  و
			[phoenician.L.Zayin, arabic.L.Zay], // 𐤆 ->  ز
			[phoenician.L.Het, arabic.L.H7aa], // 𐤇 ->  ح
			[phoenician.L.Tet, arabic.L.TTa], // 𐤈 -> ط
			[phoenician.L.Yod, arabic.L.Yaa], // 𐤉 -> ي
			[phoenician.L.Kap, arabic.L.Kaf], // 𐤊 -> ك
			[phoenician.L.Lam, arabic.L.Lam], // 𐤋 -> ل
			[phoenician.L.Mem, arabic.L.Meem], // 𐤌 -> م
			[phoenician.L.Nun, arabic.L.Noon], // 𐤍 -> ن
			[phoenician.L.Semk, arabic.L.Seen], // 𐤎 -> س
			[phoenician.L.Ain, arabic.L.Ayn], // 𐤏 -> ع
			[phoenician.L.Pe, arabic.L.Fa], // 𐤐 -> ف
			[phoenician.L.Sade, arabic.L.Sad], // 𐤑 -> ض
			[phoenician.L.Qof, arabic.L.Qaf], // 𐤒 -> ق
			[phoenician.L.Ros, arabic.L.Ra], // 𐤓 -> ر
			[phoenician.L.Shin, arabic.L.Sheen], // 𐤔 -> ش
			[phoenician.L.Tau, arabic.L.Ta], // 𐤕 -> ث
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

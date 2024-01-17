import { Ph } from './letters'
import { arabic } from '../arabic/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class PhoenicianToArabicConverter implements IConverter {
	public readonly from = Abjad.Phoenician
	public readonly to = Abjad.Arabic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Ph.WordSeparator, ' '],
			[Ph.Alep, arabic.L.Alef], // 𐤀 -> ا
			[Ph.Bet, arabic.L.Ba], // 𐤁 -> ب
			[Ph.Gimi, arabic.L.Jeem], // 𐤂 -> ج
			[Ph.Dalet, arabic.L.Dal], // 𐤃 -> د
			[Ph.He, arabic.L.Ha], // 𐤄 ->  ه
			[Ph.Waw, arabic.L.Waw], // 𐤅 ->  و
			[Ph.Zayin, arabic.L.Zay], // 𐤆 ->  ز
			[Ph.Het, arabic.L.H7aa], // 𐤇 ->  ح
			[Ph.Tet, arabic.L.TTa], // 𐤈 -> ط
			[Ph.Yod, arabic.L.Yaa], // 𐤉 -> ي
			[Ph.Kap, arabic.L.Kaf], // 𐤊 -> ك
			[Ph.Lam, arabic.L.Lam], // 𐤋 -> ل
			[Ph.Mem, arabic.L.Meem], // 𐤌 -> م
			[Ph.Nun, arabic.L.Noon], // 𐤍 -> ن
			[Ph.Semk, arabic.L.Seen], // 𐤎 -> س
			[Ph.Ain, arabic.L.Ayn], // 𐤏 -> ع
			[Ph.Pe, arabic.L.Fa], // 𐤐 -> ف
			[Ph.Sade, arabic.L.Sad], // 𐤑 -> ض
			[Ph.Qof, arabic.L.Qaf], // 𐤒 -> ق
			[Ph.Ros, arabic.L.Ra], // 𐤓 -> ر
			[Ph.Shin, arabic.L.Sheen], // 𐤔 -> ش
			[Ph.Tau, arabic.L.Ta], // 𐤕 -> ث
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

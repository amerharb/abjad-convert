import { Ph } from './letters'
import { Ar } from '../arabic/letters'
import { IConvert } from '../IConvert'
import { Abjad } from '../types'

export class PhoenicianToArabicConverter implements IConvert {
	public readonly from = Abjad.Phoenician
	public readonly to = Abjad.Arabic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Ph.WordSeparator, ' '],
			[Ph.Alep, Ar.Alef], // 𐤀 -> ا
			[Ph.Bet, Ar.Ba], // 𐤁 -> ب
			[Ph.Gimi, Ar.Jeem], // 𐤂 -> ج
			[Ph.Dalet, Ar.Dal], // 𐤃 -> د
			[Ph.He, Ar.Ha], // 𐤄 ->  ه
			[Ph.Waw, Ar.Waw], // 𐤅 ->  و
			[Ph.Zayin, Ar.Zay], // 𐤆 ->  ز
			[Ph.Het, Ar.H7aa], // 𐤇 ->  ح
			[Ph.Tet, Ar.TTa], // 𐤈 -> ط
			[Ph.Yod, Ar.Yaa], // 𐤉 -> ي
			[Ph.Kap, Ar.Kaf], // 𐤊 -> ك
			[Ph.Lam, Ar.Lam], // 𐤋 -> ل
			[Ph.Mem, Ar.Meem], // 𐤌 -> م
			[Ph.Nun, Ar.Noon], // 𐤍 -> ن
			[Ph.Semk, Ar.Seen], // 𐤎 -> س
			[Ph.Ain, Ar.Ayn], // 𐤏 -> ع
			[Ph.Pe, Ar.Fa], // 𐤐 -> ف
			[Ph.Sade, Ar.Sad], // 𐤑 -> ض
			[Ph.Qof, Ar.Qaf], // 𐤒 -> ق
			[Ph.Ros, Ar.Ra], // 𐤓 -> ر
			[Ph.Shin, Ar.Sheen], // 𐤔 -> ش
			[Ph.Tau, Ar.Ta], // 𐤕 -> ث
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

import { arabic } from './letters'
import { Ph } from '../phoenician/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class ArabicToPhoenicianConverter implements IConverter {
	public readonly from = Abjad.Arabic
	public readonly to = Abjad.Phoenician

	private map = new Map<string, string>(
		[
			[' ', Ph.WordSeparator],
			[arabic.L.Hamza, ''],
			[arabic.L.AlefMadda, Ph.Alep], // 𐤀 <- آ
			[arabic.L.AlefHamza, Ph.Alep], // 𐤀 <- ا
			[arabic.L.WawHamza, Ph.Waw], // 𐤅 <- ؤ
			[arabic.L.AlefHamzaMaksura, Ph.Alep], // 𐤀 <- ى
			[arabic.L.Alef, Ph.Alep], // 𐤀 <- ا
			[arabic.L.Ba, Ph.Bet], // 𐤁 <- ب
			[arabic.L.TaMarbuta, Ph.Tau], // 𐤕 <- ة
			[arabic.L.Ta, Ph.Tau], // 𐤕 <- ت
			[arabic.L.Tha, Ph.Tau], // 𐤕 <- ث
			[arabic.L.Jeem, Ph.Gimi], // 𐤂 <- ج
			[arabic.L.H7aa, Ph.Het], // 𐤇 <- ح
			[arabic.L.Khaa, Ph.Het], // 𐤇 <- خ
			[arabic.L.Dal, Ph.Dalet], // 𐤃 <- د
			[arabic.L.Thal, Ph.Dalet], // 𐤃 <- ذ
			[arabic.L.Ra, Ph.Ros], // 𐤓 <- ر
			[arabic.L.Zay, Ph.Zayin], // 𐤆 <- ز
			[arabic.L.Seen, Ph.Semk], // 𐤎 <- س
			[arabic.L.Sheen, Ph.Shin], // 𐤔 <- ش
			[arabic.L.Sad, Ph.Sade], // 𐤑 <- ص
			[arabic.L.Dad, Ph.Dalet], // 𐤃 <- ض
			[arabic.L.TTa, Ph.Tet], // 𐤈 <- ط
			[arabic.L.THa, Ph.Tau], // 𐤕 <- ظ
			[arabic.L.Ayn, Ph.Ain], // 𐤏 <- ع
			[arabic.L.Ghayn, Ph.Ain], // 𐤏 <- غ
			[arabic.L.Fa, Ph.Pe], // 𐤐 <- ف
			[arabic.L.Qaf, Ph.Qof], // 𐤒 <- ق
			[arabic.L.Kaf, Ph.Kap], // 𐤊 <- ك
			[arabic.L.Lam, Ph.Lam], // 𐤋 <	- ل
			[arabic.L.Meem, Ph.Mem], // 𐤌 <- م
			[arabic.L.Noon, Ph.Nun], // 𐤍 <- ن
			[arabic.L.Ha, Ph.He], // 𐤄 <- ه
			[arabic.L.Waw, Ph.Waw], // 𐤅 <- و
			[arabic.L.Yaa, Ph.Yod], // 𐤉 <- ي
			[arabic.L.AlefMaksura, Ph.Alep], // 𐤀 <- ى
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

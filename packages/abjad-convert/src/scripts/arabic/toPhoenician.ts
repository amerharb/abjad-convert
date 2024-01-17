import { arabic } from './letters'
import { phoenician } from '../phoenician/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class ArabicToPhoenicianConverter implements IConverter {
	public readonly from = Abjad.Arabic
	public readonly to = Abjad.Phoenician

	private map = new Map<string, string>(
		[
			[' ', phoenician.L.WordSeparator],
			[arabic.L.Hamza, ''],
			[arabic.L.AlefMadda, phoenician.L.Alep], // 𐤀 <- آ
			[arabic.L.AlefHamza, phoenician.L.Alep], // 𐤀 <- ا
			[arabic.L.WawHamza, phoenician.L.Waw], // 𐤅 <- ؤ
			[arabic.L.AlefHamzaMaksura, phoenician.L.Alep], // 𐤀 <- ى
			[arabic.L.Alef, phoenician.L.Alep], // 𐤀 <- ا
			[arabic.L.Ba, phoenician.L.Bet], // 𐤁 <- ب
			[arabic.L.TaMarbuta, phoenician.L.Tau], // 𐤕 <- ة
			[arabic.L.Ta, phoenician.L.Tau], // 𐤕 <- ت
			[arabic.L.Tha, phoenician.L.Tau], // 𐤕 <- ث
			[arabic.L.Jeem, phoenician.L.Gimi], // 𐤂 <- ج
			[arabic.L.H7aa, phoenician.L.Het], // 𐤇 <- ح
			[arabic.L.Khaa, phoenician.L.Het], // 𐤇 <- خ
			[arabic.L.Dal, phoenician.L.Dalet], // 𐤃 <- د
			[arabic.L.Thal, phoenician.L.Dalet], // 𐤃 <- ذ
			[arabic.L.Ra, phoenician.L.Ros], // 𐤓 <- ر
			[arabic.L.Zay, phoenician.L.Zayin], // 𐤆 <- ز
			[arabic.L.Seen, phoenician.L.Semk], // 𐤎 <- س
			[arabic.L.Sheen, phoenician.L.Shin], // 𐤔 <- ش
			[arabic.L.Sad, phoenician.L.Sade], // 𐤑 <- ص
			[arabic.L.Dad, phoenician.L.Dalet], // 𐤃 <- ض
			[arabic.L.TTa, phoenician.L.Tet], // 𐤈 <- ط
			[arabic.L.THa, phoenician.L.Tau], // 𐤕 <- ظ
			[arabic.L.Ayn, phoenician.L.Ain], // 𐤏 <- ع
			[arabic.L.Ghayn, phoenician.L.Ain], // 𐤏 <- غ
			[arabic.L.Fa, phoenician.L.Pe], // 𐤐 <- ف
			[arabic.L.Qaf, phoenician.L.Qof], // 𐤒 <- ق
			[arabic.L.Kaf, phoenician.L.Kap], // 𐤊 <- ك
			[arabic.L.Lam, phoenician.L.Lam], // 𐤋 <	- ل
			[arabic.L.Meem, phoenician.L.Mem], // 𐤌 <- م
			[arabic.L.Noon, phoenician.L.Nun], // 𐤍 <- ن
			[arabic.L.Ha, phoenician.L.He], // 𐤄 <- ه
			[arabic.L.Waw, phoenician.L.Waw], // 𐤅 <- و
			[arabic.L.Yaa, phoenician.L.Yod], // 𐤉 <- ي
			[arabic.L.AlefMaksura, phoenician.L.Alep], // 𐤀 <- ى
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

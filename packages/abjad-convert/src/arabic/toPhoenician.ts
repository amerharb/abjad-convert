import { Ar } from './letters'
import { Ph } from '../phoenician/letters'
import { IConvert } from '../IConvert';
import { Abjad } from '../types';

export class ArabicToPhoenicianConverter implements IConvert {
	public readonly from = Abjad.Arabic;
	public readonly to = Abjad.Phoenician;

	private map = new Map<string, string>(
		[
			[' ', Ph.WordSeparator],
			[Ar.Hamza, ''],
			[Ar.AlefMadda, Ph.Alep], // 𐤀 <- آ
			[Ar.AlefHamza, Ph.Alep], // 𐤀 <- ا
			[Ar.WawHamza, Ph.Waw], // 𐤅 <- ؤ
			[Ar.AlefHamzaMaksura, Ph.Alep], // 𐤀 <- ى
			[Ar.Alef, Ph.Alep], // 𐤀 <- ا
			[Ar.Ba, Ph.Bet], // 𐤁 <- ب
			[Ar.TaMarbuta, Ph.Tau], // 𐤕 <- ة
			[Ar.Ta, Ph.Tau], // 𐤕 <- ت
			[Ar.Tha, Ph.Tau], // 𐤕 <- ث
			[Ar.Jeem, Ph.Gimi], // 𐤂 <- ج
			[Ar.H7aa, Ph.Het], // 𐤇 <- ح
			[Ar.Khaa, Ph.Het], // 𐤇 <- خ
			[Ar.Dal, Ph.Dalet], // 𐤃 <- د
			[Ar.Thal, Ph.Dalet], // 𐤃 <- ذ
			[Ar.Ra, Ph.Ros], // 𐤓 <- ر
			[Ar.Zay, Ph.Zayin], // 𐤆 <- ز
			[Ar.Seen, Ph.Semk], // 𐤎 <- س
			[Ar.Sheen, Ph.Shin], // 𐤔 <- ش
			[Ar.Sad, Ph.Sade], // 𐤑 <- ص
			[Ar.Dad, Ph.Dalet], // 𐤃 <- ض
			[Ar.TTa, Ph.Tet], // 𐤈 <- ط
			[Ar.THa, Ph.Tau], // 𐤕 <- ظ
			[Ar.Ayn, Ph.Ain], // 𐤏 <- ع
			[Ar.Ghayn, Ph.Ain], // 𐤏 <- غ
			[Ar.Fa, Ph.Pe], // 𐤐 <- ف
			[Ar.Qaf, Ph.Qof], // 𐤒 <- ق
			[Ar.Kaf, Ph.Kap], // 𐤊 <- ك
			[Ar.Lam, Ph.Lam], // 𐤋 <	- ل
			[Ar.Meem, Ph.Mem], // 𐤌 <- م
			[Ar.Noon, Ph.Nun], // 𐤍 <- ن
			[Ar.Ha, Ph.He], // 𐤄 <- ه
			[Ar.Waw, Ph.Waw], // 𐤅 <- و
			[Ar.Yaa, Ph.Yod], // 𐤉 <- ي
			[Ar.AlefMaksura, Ph.Alep], // 𐤀 <- ى
		]
	);

	public convert(text: string): string {
		let result = '';
		for (const letter of text) {
			const u = this.map.get(letter) ?? ''
			result += u
		}
		return result
	}
}

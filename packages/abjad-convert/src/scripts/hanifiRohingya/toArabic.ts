import { HR } from './letters'
import { Ar } from '../arabic/letters'
import { DirectConverter } from '../../DirectConverter'
import { Abjad } from '../../types'

export class HanifiRohingyaToArabicConverter extends DirectConverter {
	public readonly from = Abjad.HanifiRohingya
	public readonly to = Abjad.Arabic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[HR.A, Ar.Hamza], // 𐴀 -> ا
			[HR.Ba, Ar.Ba], // 𐴁 -> ب
			[HR.Pa, Ar.Pe], // 𐴂 -> پ
			[HR.Ta, Ar.Ta], // 𐴃 -> ت
			[HR.Tta, Ar.Tha], // 𐴄 -> ث
			[HR.Ja, Ar.Jeem], // 𐴅 -> ج
			[HR.Ca, Ar.Che], // 𐴆 -> چ
			[HR.Ha, Ar.Ha], // 𐴇 -> ه
			[HR.Kha, Ar.Khaa], // 𐴈 -> خ
			[HR.Fa, Ar.Fa], // 𐴉 -> ف
			[HR.Da, Ar.Dal], // 𐴊 -> د
			[HR.Dda, Ar.Dal], // 𐴋 -> د
			[HR.Ra, Ar.Ra], // 𐴌 -> ر
			[HR.Rra, Ar.Ra], // 𐴍 -> ر
			[HR.Za, Ar.Zay], // 𐴎 -> ز
			[HR.Sa, Ar.Seen], // 𐴏 -> س
			[HR.Sha, Ar.Sheen], // 𐴐 -> ش
			[HR.Ka, Ar.Kaf], // 𐴑 -> ك
			[HR.Ga, Ar.Gaf], // 𐴒 -> گ
			[HR.La, Ar.Lam], // 𐴓 -> ل
			[HR.Ma, Ar.Meem], // 𐴔 -> م
			[HR.Na, Ar.Noon], // 𐴕 -> ن
			[HR.Wa, Ar.Waw], // 𐴖 -> و
			[HR.KinnaWa, Ar.Waw], // 𐴗 -> و
			[HR.Ya, Ar.Yaa], // 𐴘 -> ي
			[HR.KinnaYa, Ar.Yaa], // 𐴙 -> ي
			[HR.Nga, Ar.Nga], // 𐴚 -> ڠ
			[HR.Nya, Ar.Noon + Ar.Yaa], // 𐴛 -> ني
			[HR.Va, Ar.Ve], // 𐴜 -> ڤ
			// [HR.VowelA, Ar], //
			// [HR.VowelI, Ar], //
			// [HR.VowelU, Ar], //
			// [HR.VowelE, Ar], //
			// [HR.VowelO, Ar], //
			// [HR.MarkSakin, Ar], //
			// [HR.MarkNaKhonna, Ar], //
			// [HR.SignHarbahay, Ar], //
			// [HR.SignTahala, Ar], //
			// [HR.SignTana, Ar], //
			[HR.SignTassi, Ar.Shadda], // 𐴢 -> ّ
			// [HR.DigitZero, Ar], //
			// [HR.DigitOne, Ar], //
			// [HR.DigitTwo, Ar], //
			// [HR.DigitThree, Ar], //
			// [HR.DigitFour, Ar], //
			// [HR.DigitFive, Ar], //
			// [HR.DigitSix, Ar], //
			// [HR.DigitSeven, Ar], //
			// [HR.DigitEight, Ar], //
			// [HR.DigitNine, Ar], //
			// TODO: Add the rest of the letters
		],
	)

	public convert(text: string): string {
		let result = ''
		for (const letter of text) {
			result += this.map.get(letter) ?? ''
		}
		return result
	}
}

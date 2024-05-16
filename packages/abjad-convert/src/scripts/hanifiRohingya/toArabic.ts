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
			// [HR.Dda, Ar], //
			// [HR.Ra, Ar], //
			// [HR.Rra, Ar], //
			// [HR.Za, Ar], //
			// [HR.Sa, Ar], //
			// [HR.Sha, Ar], //
			// [HR.Ka, Ar], //
			// [HR.Ga, Ar], //
			// [HR.La, Ar], //
			// [HR.Ma, Ar], //
			// [HR.Na, Ar], //
			// [HR.Wa, Ar], //
			// [HR.KinnaWa, Ar], //
			// [HR.Ya, Ar], //
			// [HR.KinnaYa, Ar], //
			// [HR.Nga, Ar], //
			// [HR.Nya, Ar], //
			// [HR.Va, Ar], //
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
			// [HR.SignTassi, Ar], //
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

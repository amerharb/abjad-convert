import { Ar } from './letters'
import { HR } from '../hanifiRohingya/letters'
import { DirectConverter } from '../../DirectConverter'
import { Abjad } from '../../types'

export class ArabicToHanifiRohingyaConverter extends DirectConverter {
	public readonly from = Abjad.Arabic
	public readonly to = Abjad.HanifiRohingya

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Ar.Hamza, HR.A], //
			[Ar.AlefMadda, HR.A], // آ -> 𐴀
			[Ar.AlefHamza, HR.A], // أ -> 𐴀
			[Ar.WawHamza, HR.Wa], // ؤ -> 𐴖
			[Ar.AlefHamzaMaksura, HR.Ya], // ى -> 𐴘
			[Ar.Alef, HR.A], // ا -> 𐴀
			[Ar.Ba, HR.Ba], // ب -> 𐴁
			[Ar.TaMarbuta, HR.Ta], // ة -> 𐴃
			[Ar.Ta, HR.Ta], // ت -> 𐴃
			[Ar.Tha, HR.Tta], // ث -> 𐴄
			[Ar.Jeem, HR.Ja], // ج -> 𐴅
			[Ar.H7aa, HR.Ha], // ح -> 𐴇
			[Ar.Khaa, HR.Kha], // خ -> 𐴈
			[Ar.Dal, HR.Da], // د -> 𐴊
			[Ar.Thal, HR.Za], // ذ -> 𐴎
			[Ar.Ra, HR.Ra], // ر -> 𐴌
			[Ar.Zay, HR.Za], // ز -> 𐴎
			[Ar.Seen, HR.Sa], // س -> 𐴏
			[Ar.Sheen, HR.Sha], // ش -> 𐴐
			[Ar.Sad, HR.Sa], // ص -> 𐴏
			[Ar.Dad, HR.Da], // ض -> 𐴊
			[Ar.TTa, HR.Tta], // ط -> 𐴃
			[Ar.THa, HR.Za], // ظ -> 𐴎
			[Ar.Ayn, HR.A], // ع -> 𐴀
			[Ar.Ghayn, HR.Ga], // غ -> 𐴒
			[Ar.Fa, HR.Fa], // ف -> 𐴉
			[Ar.Qaf, HR.Ka], // ق -> 𐴑
			[Ar.Kaf, HR.Ka], // ك -> 𐴑
			[Ar.Lam, HR.La], // ل -> 𐴓
			[Ar.Meem, HR.Ma], // م -> 𐴔
			[Ar.Noon, HR.Na], // ن -> 𐴕
			[Ar.Ha, HR.Ha], // ه -> 𐴇
			[Ar.Waw, HR.Wa], // و -> 𐴖
			[Ar.Yaa, HR.Ya], // ي -> 𐴘
			[Ar.AlefMaksura, HR.Ya], // ى -> 𐴘

			['0', HR.DigitZero], // 0 -> 𐴰
			['1', HR.DigitOne], // 1 -> 𐴱
			['2', HR.DigitTwo], // 2 -> 𐴲
			['3', HR.DigitThree], // 3 -> 𐴳
			['4', HR.DigitFour], // 4 -> 𐴴
			['5', HR.DigitFive], // 5 -> 𐴵
			['6', HR.DigitSix], // 6 -> 𐴶
			['7', HR.DigitSeven], // 7 -> 𐴷
			['8', HR.DigitEight], // 8 -> 𐴸
			['9', HR.DigitNine], // 9 -> 𐴹
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

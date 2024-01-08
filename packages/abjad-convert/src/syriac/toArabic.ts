import { Sy } from './letters'
import { Ar } from '../arabic/letters'
import { IConverter } from '../IConverter'
import { Abjad } from '../types'

export class SyriacToArabicConverter implements IConverter {
	public readonly from = Abjad.Syriac
	public readonly to = Abjad.Arabic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Sy.Alaph, Ar.Alef], // ܐ -> ا
			[Sy.SuperaAlaph, ''], // TODO: check if this logic is correct
			[Sy.Beth, Ar.Ba], // ܒ -> ب
			[Sy.Gamal, Ar.Jeem], // ܓ -> ج
			[Sy.GamalGarshuni, Ar.Jeem], // ܔ -> ج
			[Sy.Dalath, Ar.Dal], // ܕ -> د
			[Sy.DalathRish, Ar.Dal], // ܖ -> د
			[Sy.He, Ar.Ha], // ܗ ->  ه
			[Sy.Waw, Ar.Waw], // ܘ ->  و
			[Sy.Zain, Ar.Zay], // ܙ ->  ز
			[Sy.Heth, Ar.H7aa], // ܚ ->  ح
			[Sy.Teth, Ar.TTa], // ܛ -> ط
			[Sy.TethGarshuni, Ar.TTa], // ܜ -> ط
			[Sy.Yudh, Ar.Yaa], // ܝ -> ي
			[Sy.YudhHe, Ar.Yaa], // ܞ -> ي
			[Sy.Kaph, Ar.Kaf], // ܟ -> ك
			[Sy.Lamadh, Ar.Lam], // ܠ -> ل
			[Sy.Mim, Ar.Meem], // ܡ -> م
			[Sy.Nun, Ar.Noon], // ܢ -> ن
			[Sy.Semkath, Ar.Seen], // ܣ -> س
			[Sy.FinalSemkath, Ar.Seen], // ܤ -> س
			[Sy.E, Ar.Ayn], // ܥ -> ع
			[Sy.Pe, Ar.Fa], // ܦ -> ف
			[Sy.ReversedPe, Ar.Fa], // ܧ -> ف
			[Sy.Sadhe, Ar.Sad], // ܨ -> ص
			[Sy.Qaph, Ar.Qaf], // ܩ -> ق
			[Sy.Rish, Ar.Ra], // ܪ -> ر
			[Sy.Shin, Ar.Sheen], // ܫ -> ش
			[Sy.Taw, Ar.Ta], // ܬ -> ت
			[Sy.PersianBheth, Ar.Ba], // ܭ -> ب
			[Sy.PersianGhamal, Ar.Jeem],  // ܮ -> ج
			[Sy.PersianDhalath, Ar.Dal],  // ܯ -> د
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

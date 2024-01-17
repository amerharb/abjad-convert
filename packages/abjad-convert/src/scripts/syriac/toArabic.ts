import { Sy } from './letters'
import { arabic } from '../arabic/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class SyriacToArabicConverter implements IConverter {
	public readonly from = Abjad.Syriac
	public readonly to = Abjad.Arabic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Sy.Alaph, arabic.L.Alef], // ܐ -> ا
			[Sy.SuperaAlaph, ''], // TODO: check if this logic is correct
			[Sy.Beth, arabic.L.Ba], // ܒ -> ب
			[Sy.Gamal, arabic.L.Jeem], // ܓ -> ج
			[Sy.GamalGarshuni, arabic.L.Jeem], // ܔ -> ج
			[Sy.Dalath, arabic.L.Dal], // ܕ -> د
			[Sy.DalathRish, arabic.L.Dal], // ܖ -> د
			[Sy.He, arabic.L.Ha], // ܗ ->  ه
			[Sy.Waw, arabic.L.Waw], // ܘ ->  و
			[Sy.Zain, arabic.L.Zay], // ܙ ->  ز
			[Sy.Heth, arabic.L.H7aa], // ܚ ->  ح
			[Sy.Teth, arabic.L.TTa], // ܛ -> ط
			[Sy.TethGarshuni, arabic.L.TTa], // ܜ -> ط
			[Sy.Yudh, arabic.L.Yaa], // ܝ -> ي
			[Sy.YudhHe, arabic.L.Yaa], // ܞ -> ي
			[Sy.Kaph, arabic.L.Kaf], // ܟ -> ك
			[Sy.Lamadh, arabic.L.Lam], // ܠ -> ل
			[Sy.Mim, arabic.L.Meem], // ܡ -> م
			[Sy.Nun, arabic.L.Noon], // ܢ -> ن
			[Sy.Semkath, arabic.L.Seen], // ܣ -> س
			[Sy.FinalSemkath, arabic.L.Seen], // ܤ -> س
			[Sy.E, arabic.L.Ayn], // ܥ -> ع
			[Sy.Pe, arabic.L.Fa], // ܦ -> ف
			[Sy.ReversedPe, arabic.L.Fa], // ܧ -> ف
			[Sy.Sadhe, arabic.L.Sad], // ܨ -> ص
			[Sy.Qaph, arabic.L.Qaf], // ܩ -> ق
			[Sy.Rish, arabic.L.Ra], // ܪ -> ر
			[Sy.Shin, arabic.L.Sheen], // ܫ -> ش
			[Sy.Taw, arabic.L.Ta], // ܬ -> ت
			[Sy.PersianBheth, arabic.L.Ba], // ܭ -> ب
			[Sy.PersianGhamal, arabic.L.Jeem],  // ܮ -> ج
			[Sy.PersianDhalath, arabic.L.Dal],  // ܯ -> د
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

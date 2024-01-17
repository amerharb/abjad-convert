import { syriac } from './letters'
import { arabic } from '../arabic/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class SyriacToArabicConverter implements IConverter {
	public readonly from = Abjad.Syriac
	public readonly to = Abjad.Arabic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[syriac.L.Alaph, arabic.L.Alef], // ܐ -> ا
			[syriac.L.SuperaAlaph, ''], // TODO: check if this logic is correct
			[syriac.L.Beth, arabic.L.Ba], // ܒ -> ب
			[syriac.L.Gamal, arabic.L.Jeem], // ܓ -> ج
			[syriac.L.GamalGarshuni, arabic.L.Jeem], // ܔ -> ج
			[syriac.L.Dalath, arabic.L.Dal], // ܕ -> د
			[syriac.L.DalathRish, arabic.L.Dal], // ܖ -> د
			[syriac.L.He, arabic.L.Ha], // ܗ ->  ه
			[syriac.L.Waw, arabic.L.Waw], // ܘ ->  و
			[syriac.L.Zain, arabic.L.Zay], // ܙ ->  ز
			[syriac.L.Heth, arabic.L.H7aa], // ܚ ->  ح
			[syriac.L.Teth, arabic.L.TTa], // ܛ -> ط
			[syriac.L.TethGarshuni, arabic.L.TTa], // ܜ -> ط
			[syriac.L.Yudh, arabic.L.Yaa], // ܝ -> ي
			[syriac.L.YudhHe, arabic.L.Yaa], // ܞ -> ي
			[syriac.L.Kaph, arabic.L.Kaf], // ܟ -> ك
			[syriac.L.Lamadh, arabic.L.Lam], // ܠ -> ل
			[syriac.L.Mim, arabic.L.Meem], // ܡ -> م
			[syriac.L.Nun, arabic.L.Noon], // ܢ -> ن
			[syriac.L.Semkath, arabic.L.Seen], // ܣ -> س
			[syriac.L.FinalSemkath, arabic.L.Seen], // ܤ -> س
			[syriac.L.E, arabic.L.Ayn], // ܥ -> ع
			[syriac.L.Pe, arabic.L.Fa], // ܦ -> ف
			[syriac.L.ReversedPe, arabic.L.Fa], // ܧ -> ف
			[syriac.L.Sadhe, arabic.L.Sad], // ܨ -> ص
			[syriac.L.Qaph, arabic.L.Qaf], // ܩ -> ق
			[syriac.L.Rish, arabic.L.Ra], // ܪ -> ر
			[syriac.L.Shin, arabic.L.Sheen], // ܫ -> ش
			[syriac.L.Taw, arabic.L.Ta], // ܬ -> ت
			[syriac.L.PersianBheth, arabic.L.Ba], // ܭ -> ب
			[syriac.L.PersianGhamal, arabic.L.Jeem],  // ܮ -> ج
			[syriac.L.PersianDhalath, arabic.L.Dal],  // ܯ -> د
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

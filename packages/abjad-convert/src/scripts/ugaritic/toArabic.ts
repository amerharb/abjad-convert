import { ugaritic } from './letters'
import { arabic } from '../arabic/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class UgariticToArabicConverter implements IConverter {
	public readonly from = Abjad.Ugaritic
	public readonly to = Abjad.Arabic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[ugaritic.L.Alpa, arabic.L.Alef],
			[ugaritic.L.Beta, arabic.L.Ba],
			[ugaritic.L.Gamla, arabic.L.Jeem],
			[ugaritic.L.Kha, arabic.L.Khaa],
			[ugaritic.L.Delta, arabic.L.Dal],
			[ugaritic.L.Ho, arabic.L.Ha],
			[ugaritic.L.Wo, arabic.L.Waw],
			[ugaritic.L.Zeta, arabic.L.Zay],
			[ugaritic.L.Hota, arabic.L.H7aa],
			[ugaritic.L.Tet, arabic.L.TTa],
			[ugaritic.L.Yod, arabic.L.Yaa],
			[ugaritic.L.Kaf, arabic.L.Kaf],
			[ugaritic.L.Shin, arabic.L.Sheen],
			[ugaritic.L.Lamda, arabic.L.Lam],
			[ugaritic.L.Mem, arabic.L.Meem],
			[ugaritic.L.Dhal, arabic.L.Dad],
			[ugaritic.L.Nun, arabic.L.Noon],
			[ugaritic.L.Zu, arabic.L.Zay],
			[ugaritic.L.Samka, arabic.L.Seen],
			[ugaritic.L.Ain, arabic.L.Ayn],
			[ugaritic.L.Pu, arabic.L.Fa],
			[ugaritic.L.Sade, arabic.L.Sad],
			[ugaritic.L.Qopa, arabic.L.Qaf],
			[ugaritic.L.Rasha, arabic.L.Ra],
			[ugaritic.L.Thanna, arabic.L.THa],
			[ugaritic.L.Ghain, arabic.L.Ghayn],
			[ugaritic.L.To, arabic.L.Ta],
			[ugaritic.L.I, arabic.L.AlefMaksura],
			[ugaritic.L.U, arabic.L.Waw],
			[ugaritic.L.Ssu, arabic.L.Sad],
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

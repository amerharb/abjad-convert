import { arabic } from './letters'
import { ugaritic } from '../ugaritic/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class ArabicToUgariticConverter implements IConverter {
	public readonly from = Abjad.Arabic
	public readonly to = Abjad.Ugaritic
	private map = new Map<string, string>(
		[
			[' ', ' '],
			[arabic.L.Hamza, ''],
			[arabic.L.AlefMadda, ugaritic.L.Alpa],
			[arabic.L.AlefHamza, ugaritic.L.Alpa],
			[arabic.L.WawHamza, ugaritic.L.Alpa],
			[arabic.L.AlefHamzaMaksura, ugaritic.L.Alpa],
			[arabic.L.Alef, ugaritic.L.Alpa],
			[arabic.L.Ba, ugaritic.L.Beta],
			[arabic.L.TaMarbuta, ugaritic.L.To],
			[arabic.L.Ta, ugaritic.L.To],
			[arabic.L.Tha, ugaritic.L.Thanna],
			[arabic.L.Jeem, ugaritic.L.Gamla],
			[arabic.L.H7aa, ugaritic.L.Hota],
			[arabic.L.Khaa, ugaritic.L.Kha],
			[arabic.L.Dal, ugaritic.L.Delta],
			[arabic.L.Thal, ugaritic.L.Delta],
			[arabic.L.Ra, ugaritic.L.Rasha],
			[arabic.L.Zay, ugaritic.L.Zu],
			[arabic.L.Seen, ugaritic.L.Samka],
			[arabic.L.Sheen, ugaritic.L.Shin],
			[arabic.L.Sad, ugaritic.L.Sade],
			[arabic.L.Dad, ugaritic.L.Dhal],
			[arabic.L.TTa, ugaritic.L.Tet],
			[arabic.L.THa, ugaritic.L.Thanna],
			[arabic.L.Ayn, ugaritic.L.Ain],
			[arabic.L.Ghayn, ugaritic.L.Ghain],
			[arabic.L.Fa, ugaritic.L.Pu],
			[arabic.L.Qaf, ugaritic.L.Qopa],
			[arabic.L.Kaf, ugaritic.L.Kaf],
			[arabic.L.Lam, ugaritic.L.Lamda],
			[arabic.L.Meem, ugaritic.L.Mem],
			[arabic.L.Noon, ugaritic.L.Nun],
			[arabic.L.Ha, ugaritic.L.Ho],
			[arabic.L.Waw, ugaritic.L.Wo],
			[arabic.L.Yaa, ugaritic.L.Yod],
			[arabic.L.AlefMaksura, ugaritic.L.Alpa],
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

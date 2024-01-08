import { Ar } from './letters'
import { Ug } from '../ugaritic/letters'
import { IConverter } from '../IConverter'
import { Abjad } from '../types'

export class ArabicToUgariticConverter implements IConverter {
	public readonly from = Abjad.Arabic
	public readonly to = Abjad.Ugaritic
	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Ar.Hamza, ''],
			[Ar.AlefMadda, Ug.Alpa],
			[Ar.AlefHamza, Ug.Alpa],
			[Ar.WawHamza, Ug.Alpa],
			[Ar.AlefHamzaMaksura, Ug.Alpa],
			[Ar.Alef, Ug.Alpa],
			[Ar.Ba, Ug.Beta],
			[Ar.TaMarbuta, Ug.To],
			[Ar.Ta, Ug.To],
			[Ar.Tha, Ug.Thanna],
			[Ar.Jeem, Ug.Gamla],
			[Ar.H7aa, Ug.Hota],
			[Ar.Khaa, Ug.Kha],
			[Ar.Dal, Ug.Delta],
			[Ar.Thal, Ug.Delta],
			[Ar.Ra, Ug.Rasha],
			[Ar.Zay, Ug.Zu],
			[Ar.Seen, Ug.Samka],
			[Ar.Sheen, Ug.Shin],
			[Ar.Sad, Ug.Sade],
			[Ar.Dad, Ug.Dhal],
			[Ar.TTa, Ug.Tet],
			[Ar.THa, Ug.Thanna],
			[Ar.Ayn, Ug.Ain],
			[Ar.Ghayn, Ug.Ghain],
			[Ar.Fa, Ug.Pu],
			[Ar.Qaf, Ug.Qopa],
			[Ar.Kaf, Ug.Kaf],
			[Ar.Lam, Ug.Lamda],
			[Ar.Meem, Ug.Mem],
			[Ar.Noon, Ug.Nun],
			[Ar.Ha, Ug.Ho],
			[Ar.Waw, Ug.Wo],
			[Ar.Yaa, Ug.Yod],
			[Ar.AlefMaksura, Ug.Alpa],
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

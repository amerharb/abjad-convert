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
			[HR.A, Ar.Alef], // 𐴀 -> ا
			// TODO: Add the rest of the letters
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

import { arabic } from './letters'
import { Ia } from '../imperialAramaic/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class ArabicToImperialAramaicConverter implements IConverter {
	public readonly from = Abjad.Arabic
	public readonly to = Abjad.ImperialAramaic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[arabic.L.Hamza, ''],
			[arabic.L.AlefMadda, Ia.Aleph],
			[arabic.L.AlefHamza, Ia.Aleph],
			[arabic.L.WawHamza, Ia.Waw],
			[arabic.L.AlefHamzaMaksura, Ia.Yod],
			[arabic.L.Alef, Ia.Aleph],
			[arabic.L.Ba, Ia.Bet],
			[arabic.L.TaMarbuta, Ia.Taw],
			[arabic.L.Ta, Ia.Taw],
			[arabic.L.Tha, Ia.Taw],
			[arabic.L.Jeem, Ia.Gimel],
			[arabic.L.H7aa, Ia.Heth],
			[arabic.L.Khaa, Ia.Heth],
			[arabic.L.Dal, Ia.Daleth],
			[arabic.L.Thal, Ia.Daleth],
			[arabic.L.Ra, Ia.Resh],
			[arabic.L.Zay, Ia.Zayin],
			[arabic.L.Seen, Ia.Samekh],
			[arabic.L.Sheen, Ia.Shin],
			[arabic.L.Sad, Ia.Sadhe],
			[arabic.L.Dad, Ia.Daleth],
			[arabic.L.TTa, Ia.Teth],
			[arabic.L.THa, Ia.Taw],
			[arabic.L.Ayn, Ia.Ayin],
			[arabic.L.Ghayn, Ia.Ayin],
			[arabic.L.Fa, Ia.Pe],
			[arabic.L.Qaf, Ia.Qoph],
			[arabic.L.Kaf, Ia.Kaph],
			[arabic.L.Lam, Ia.Lamedh],
			[arabic.L.Meem, Ia.Mem],
			[arabic.L.Noon, Ia.Nun],
			[arabic.L.Ha, Ia.He],
			[arabic.L.Waw, Ia.Waw],
			[arabic.L.Yaa, Ia.Yod],
			[arabic.L.AlefMaksura, Ia.Aleph],
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

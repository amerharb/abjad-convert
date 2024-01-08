import { Ar } from './letters'
import { Ia } from '../imperialAramaic/letters'
import { IConverter } from '../IConverter'
import { Abjad } from '../types'

export class ArabicToImperialAramaicConverter implements IConverter {
	public readonly from = Abjad.Arabic
	public readonly to = Abjad.ImperialAramaic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Ar.Hamza, ''],
			[Ar.AlefMadda, Ia.Aleph],
			[Ar.AlefHamza, Ia.Aleph],
			[Ar.WawHamza, Ia.Waw],
			[Ar.AlefHamzaMaksura, Ia.Yod],
			[Ar.Alef, Ia.Aleph],
			[Ar.Ba, Ia.Bet],
			[Ar.TaMarbuta, Ia.Taw],
			[Ar.Ta, Ia.Taw],
			[Ar.Tha, Ia.Taw],
			[Ar.Jeem, Ia.Gimel],
			[Ar.H7aa, Ia.Heth],
			[Ar.Khaa, Ia.Heth],
			[Ar.Dal, Ia.Daleth],
			[Ar.Thal, Ia.Daleth],
			[Ar.Ra, Ia.Resh],
			[Ar.Zay, Ia.Zayin],
			[Ar.Seen, Ia.Samekh],
			[Ar.Sheen, Ia.Shin],
			[Ar.Sad, Ia.Sadhe],
			[Ar.Dad, Ia.Daleth],
			[Ar.TTa, Ia.Teth],
			[Ar.THa, Ia.Taw],
			[Ar.Ayn, Ia.Ayin],
			[Ar.Ghayn, Ia.Ayin],
			[Ar.Fa, Ia.Pe],
			[Ar.Qaf, Ia.Qoph],
			[Ar.Kaf, Ia.Kaph],
			[Ar.Lam, Ia.Lamedh],
			[Ar.Meem, Ia.Mem],
			[Ar.Noon, Ia.Nun],
			[Ar.Ha, Ia.He],
			[Ar.Waw, Ia.Waw],
			[Ar.Yaa, Ia.Yod],
			[Ar.AlefMaksura, Ia.Aleph],
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

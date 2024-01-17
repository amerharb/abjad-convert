import { arabic } from './letters'
import { imperialAramaic } from '../imperialAramaic/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class ArabicToImperialAramaicConverter implements IConverter {
	public readonly from = Abjad.Arabic
	public readonly to = Abjad.ImperialAramaic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[arabic.L.Hamza, ''],
			[arabic.L.AlefMadda, imperialAramaic.L.Aleph],
			[arabic.L.AlefHamza, imperialAramaic.L.Aleph],
			[arabic.L.WawHamza, imperialAramaic.L.Waw],
			[arabic.L.AlefHamzaMaksura, imperialAramaic.L.Yod],
			[arabic.L.Alef, imperialAramaic.L.Aleph],
			[arabic.L.Ba, imperialAramaic.L.Bet],
			[arabic.L.TaMarbuta, imperialAramaic.L.Taw],
			[arabic.L.Ta, imperialAramaic.L.Taw],
			[arabic.L.Tha, imperialAramaic.L.Taw],
			[arabic.L.Jeem, imperialAramaic.L.Gimel],
			[arabic.L.H7aa, imperialAramaic.L.Heth],
			[arabic.L.Khaa, imperialAramaic.L.Heth],
			[arabic.L.Dal, imperialAramaic.L.Daleth],
			[arabic.L.Thal, imperialAramaic.L.Daleth],
			[arabic.L.Ra, imperialAramaic.L.Resh],
			[arabic.L.Zay, imperialAramaic.L.Zayin],
			[arabic.L.Seen, imperialAramaic.L.Samekh],
			[arabic.L.Sheen, imperialAramaic.L.Shin],
			[arabic.L.Sad, imperialAramaic.L.Sadhe],
			[arabic.L.Dad, imperialAramaic.L.Daleth],
			[arabic.L.TTa, imperialAramaic.L.Teth],
			[arabic.L.THa, imperialAramaic.L.Taw],
			[arabic.L.Ayn, imperialAramaic.L.Ayin],
			[arabic.L.Ghayn, imperialAramaic.L.Ayin],
			[arabic.L.Fa, imperialAramaic.L.Pe],
			[arabic.L.Qaf, imperialAramaic.L.Qoph],
			[arabic.L.Kaf, imperialAramaic.L.Kaph],
			[arabic.L.Lam, imperialAramaic.L.Lamedh],
			[arabic.L.Meem, imperialAramaic.L.Mem],
			[arabic.L.Noon, imperialAramaic.L.Nun],
			[arabic.L.Ha, imperialAramaic.L.He],
			[arabic.L.Waw, imperialAramaic.L.Waw],
			[arabic.L.Yaa, imperialAramaic.L.Yod],
			[arabic.L.AlefMaksura, imperialAramaic.L.Aleph],
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

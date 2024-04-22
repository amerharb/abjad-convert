import { Sa } from './letters'
import { Ar } from '../arabic/letters'
import { DirectConverter } from '../../DirectConverter'
import { Abjad } from '../../types'

export class OldSouthArabicToArabicConverter extends DirectConverter {
	public readonly from = Abjad.OldSouthArabian
	public readonly to = Abjad.Arabic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Sa.He, Ar.Ha],
			[Sa.Lamedh, Ar.Lam],
			[Sa.Heth, Ar.H7aa],
			[Sa.Mem, Ar.Meem],
			[Sa.Qoph, Ar.Qaf],
			[Sa.Waw, Ar.Waw],
			[Sa.Shin, Ar.Sheen],
			[Sa.Resh, Ar.Ra],
			[Sa.Beth, Ar.Ba],
			[Sa.Taw, Ar.Ta],
			[Sa.Sat, Ar.Seen],
			[Sa.Kaph, Ar.Kaf],
			[Sa.Nun, Ar.Noon],
			[Sa.Kheth, Ar.Khaa],
			[Sa.Sadhe, Ar.Sad],
			[Sa.Samekh, Ar.Sad],
			[Sa.Fe, Ar.Fa],
			[Sa.Alef, Ar.Alef],
			[Sa.Ayin, Ar.Ayn],
			[Sa.Dhadhe, Ar.Dad],
			[Sa.Gimel, Ar.Jeem],
			[Sa.Daleth, Ar.Dal],
			[Sa.Ghayn, Ar.Ghayn],
			[Sa.Teth, Ar.TTa],
			[Sa.Zayn, Ar.Zay],
			[Sa.Dhaleth, Ar.Thal],
			[Sa.Yodh, Ar.Yaa],
			[Sa.Thaw, Ar.Tha],
			[Sa.Theth, Ar.THa],
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

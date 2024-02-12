import { sa } from './letters'
import { Ar } from '../arabic/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class OldSouthArabicToArabicConverter implements IConverter {
	public readonly from = Abjad.OldSouthArabian
	public readonly to = Abjad.Arabic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[sa.He, Ar.Ha],
			[sa.Lamedh, Ar.Lam],
			[sa.Heth, Ar.H7aa],
			[sa.Mem, Ar.Meem],
			[sa.Qoph, Ar.Qaf],
			[sa.Waw, Ar.Waw],
			[sa.Shin, Ar.Sheen],
			[sa.Resh, Ar.Ra],
			[sa.Beth, Ar.Ba],
			[sa.Taw, Ar.Ta],
			[sa.Sat, Ar.Seen],
			[sa.Kaph, Ar.Kaf],
			[sa.Nun, Ar.Noon],
			[sa.Kheth, Ar.Khaa],
			[sa.Sadhe, Ar.Sad],
			[sa.Samekh, Ar.Sad],
			[sa.Fe, Ar.Fa],
			[sa.Alef, Ar.Alef],
			[sa.Ayin, Ar.Ayn],
			[sa.Dhadhe, Ar.Dad],
			[sa.Gimel, Ar.Jeem],
			[sa.Daleth, Ar.Dal],
			[sa.Ghayn, Ar.Ghayn],
			[sa.Teth, Ar.TTa],
			[sa.Zayn, Ar.Zay],
			[sa.Dhaleth, Ar.Thal],
			[sa.Yodh, Ar.Yaa],
			[sa.Thaw, Ar.Tha],
			[sa.Theth, Ar.THa],
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

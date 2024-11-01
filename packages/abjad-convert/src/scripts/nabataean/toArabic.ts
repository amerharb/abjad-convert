import { Na } from './letters'
import { Ar } from '../arabic/letters'
import { DirectConverter } from '../../DirectConverter'
import { Abjad } from '../../types'

export class NabataeanToArabicConverter extends DirectConverter {
	public readonly from = Abjad.Nabataean
	public readonly to = Abjad.Arabic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Na.FinalAleph, Ar.Alef], //  ـا -> ا
			[Na.Aleph, Ar.Alef], // ا -> ا
			[Na.FinalBeth, Ar.Ba], // ـب -> ب
			[Na.Beth, Ar.Ba],
			[Na.Gimel, Ar.Jeem],
			[Na.Daleth, Ar.Dal],
			[Na.FinalHe, Ar.Ha],
			[Na.He, Ar.Ha],

			[Na.Waw, Ar.Waw],
			[Na.Zayin, Ar.Zay],
			[Na.Heth, Ar.H7aa],
			[Na.Teth, Ar.TTa],
			[Na.FinalYodh, Ar.Yaa],
			[Na.Yodh, Ar.Yaa],
			[Na.FinalKaph, Ar.Kaf],
			[Na.Kaph, Ar.Kaf],

			[Na.FinalLamedh, Ar.Lam],
			[Na.Lamedh, Ar.Lam],
			[Na.FinalMem, Ar.Meem],
			[Na.Mem, Ar.Meem],
			[Na.FinalNun, Ar.Noon],
			[Na.Nun, Ar.Noon],
			[Na.Samekh, Ar.Seen],
			[Na.Ayin, Ar.Ayn],

			// [Na.Pe, Ar.Zay],
			// [Na.Sadhe, Ar.Thal],
			// [Na.Qoph, Ar.Yaa],
			// [Na.Resh, Ar.Tha],
			// [Na.FinalShin, Ar.THa],
			// [Na.Shin, Ar.Dha],
			// [Na.Taw, Ar.Ghain],
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

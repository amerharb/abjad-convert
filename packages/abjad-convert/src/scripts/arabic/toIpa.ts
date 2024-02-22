import { Ar } from './letters'
import { IPA } from '../ipa/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class ArabicToIpaConverter implements IConverter {
	public readonly from = Abjad.Arabic
	public readonly to = Abjad.IPA

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Ar.Hamza, IPA.ʔ], /** ء -> ʔ */
			[Ar.AlefMadda, IPA.ʔ + 'a' + IPA.ː], /** آ -> ʔaː */
			[Ar.AlefHamza, IPA.ʔ + 'a'], /** ʔa <- أ */
			[Ar.WawHamza, IPA.ʔ + 'u' + IPA.ː], /** ʔːu <- ؤ */
			[Ar.AlefHamzaMaksura, IPA.ʔ + 'j'], /** ʔj <- إ */
			[Ar.Alef, 'a' + IPA.ː], /** aː <- ا */
			[Ar.Ba, 'b'], /** b <- ب */
			[Ar.TaMarbuta, 'h'], /** h <- ة */
			[Ar.Ta, 't'], /** t <- ت */
			[Ar.Tha, IPA.θ], /** θ <- ث */
			[Ar.Jeem, IPA.ʒ  ], /** ʒ <- ج */
			[Ar.H7aa, IPA.ħ], /** ħ <- ح */
			[Ar.Khaa, 'x'], /** x <- خ */
			[Ar.Dal, 'd'], /** d <- د */
			[Ar.Thal, IPA.ð], /** ð <- ذ */

			// still need to replace æ and @
			// [Ar.Ra, IPA.æ], /** @ <- ر */
			// [Ar.Zay, IPA.æ], /** @ <- ز */
			// [Ar.Seen, IPA.æ], /** @ <- س */
			// [Ar.Sheen, IPA.æ], /** @ <- ش */
			// [Ar.Sad, IPA.æ], /** @ <- ص */
			// [Ar.Dad, IPA.æ], /** @ <- ض */
			// [Ar.TTa, IPA.æ], /** @ <- ط */
			// [Ar.THa, IPA.æ], /** @ <- ظ */
			// [Ar.Ayn, IPA.æ], /** @ <- ع */
			// [Ar.Ghayn, IPA.æ], /** @ <- غ */
			// [Ar.Fa, IPA.æ], /** @ <- ف */
			// [Ar.Qaf, IPA.æ], /** @ <- ق */
			// [Ar.Kaf, IPA.æ], /** @ <- ك */
			// [Ar.Lam, IPA.æ], // 𐤋 <	- ل
			// [Ar.Meem, IPA.æ], /** @ <- م */
			// [Ar.Noon, IPA.æ], /** @ <- ن */
			// [Ar.Ha, IPA.æ], /** @ <- ه */
			// [Ar.Waw, IPA.æ], /** @ <- و */
			// [Ar.Yaa, IPA.æ], /** @ <- ي */
			// [Ar.AlefMaksura, IPA.æ], /** @ <- ى */
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

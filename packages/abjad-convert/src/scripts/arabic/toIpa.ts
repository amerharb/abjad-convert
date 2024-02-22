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
			[Ar.AlefMadda, IPA.ʔ + IPA.a + IPA.ː], /** آ -> ʔaː */
			[Ar.AlefHamza, IPA.ʔ + IPA.a], /** ʔa <- أ */
			[Ar.WawHamza, IPA.ʔ + IPA.u + IPA.ː], /** ʔːu <- ؤ */
			[Ar.AlefHamzaMaksura, IPA.ʔ + IPA.j], /** ʔj <- إ */
			[Ar.Alef, IPA.a + IPA.ː], /** aː <- ا */
			[Ar.Ba, IPA.b], /** b <- ب */
			[Ar.TaMarbuta, IPA.h], /** h <- ة */
			[Ar.Ta, IPA.t], /** t <- ت */
			[Ar.Tha, IPA.θ], /** θ <- ث */
			[Ar.Jeem, IPA.ʒ], /** ʒ <- ج */
			[Ar.H7aa, IPA.ħ], /** ħ <- ح */
			[Ar.Khaa, IPA.x], /** x <- خ */
			[Ar.Dal, IPA.d], /** d <- د */
			[Ar.Thal, IPA.ð], /** ð <- ذ */
			[Ar.Ra, IPA.r], /** r <- ر */
			[Ar.Zay, IPA.z], /** z <- ز */
			[Ar.Seen, IPA.s], /** s <- س */
			[Ar.Sheen, IPA.ʃ], /** ʃ <- ش */
			[Ar.Sad, IPA.s + IPA.ˤ], /** sˤ <- ص */
			[Ar.Dad, IPA.d + IPA.ˤ], /** dˤ <- ض */
			[Ar.TTa, IPA.t + IPA.ˤ], /** @ <- ط */
			[Ar.THa, IPA.ð + IPA.ˤ], /** @ <- ظ */
			[Ar.Ayn, IPA.ʕ], /** ʕ <- ع */
			[Ar.Ghayn, IPA.ɣ], /** ɣ <- غ */
			[Ar.Fa, IPA.f], /** f <- ف */
			[Ar.Qaf, IPA.q], /** q <- ق */
			[Ar.Kaf, IPA.k], /** k <- ك */
			[Ar.Lam, IPA.l], /** l <- ل */
			[Ar.Meem, IPA.m], /** m <- م */
			[Ar.Noon, IPA.n], /** n <- ن */
			[Ar.Ha, IPA.h], /** h <- ه */
			[Ar.Waw, IPA.ː + IPA.u], /** ːu <- و */
			[Ar.Yaa, IPA.ː + IPA.i], /** ːi <- ي */
			[Ar.AlefMaksura, IPA.a], /** a <- ى */
		],
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

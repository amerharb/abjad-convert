import { Ar } from './letters'
import { Sa } from '../oldSouthArabian/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class ArabicToOldSouthArabianConverter implements IConverter {
	public readonly from = Abjad.Arabic
	public readonly to = Abjad.OldSouthArabian

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Ar.Hamza, Sa.Alef], // ء ->
			[Ar.AlefMadda, Sa.Alef], // آ ->
			[Ar.AlefHamza, Sa.Alef], // أ ->
			[Ar.WawHamza, Sa.Waw], // ؤ -> 
			[Ar.AlefHamzaMaksura, Sa.Yodh], // ى ->
			[Ar.Alef, Sa.Alef], // ا ->
			[Ar.Ba, Sa.Beth], // ب -> 
			[Ar.TaMarbuta, Sa.He], // ة ->
			[Ar.Ta, Sa.Taw], // ت ->
			[Ar.Tha, Sa.Thaw], // ث ->
			[Ar.Jeem, Sa.Gimel], // ج ->
			[Ar.H7aa, Sa.Heth], // ح ->
			[Ar.Khaa, Sa.Kheth], // خ ->
			[Ar.Dal, Sa.Daleth], // د ->
			[Ar.Thal, Sa.Dhaleth], // ذ ->
			[Ar.Ra, Sa.Resh], // ر ->
			[Ar.Zay, Sa.Zayn], // ز ->
			[Ar.Seen, Sa.Sat], // س ->
			[Ar.Sheen, Sa.Shin], // ش -> 
			[Ar.Sad, Sa.Sadhe], // ص -> 
			[Ar.Dad, Sa.Dhadhe], // ض ->
			[Ar.TTa, Sa.Teth], // ط ->
			[Ar.THa, Sa.Theth], // ظ ->
			[Ar.Ayn, Sa.Ayin], // ع ->
			[Ar.Ghayn, Sa.Ghayn], // غ ->
			[Ar.Fa, Sa.Fe], // ف ->
			[Ar.Qaf, Sa.Qoph], // ق ->
			[Ar.Kaf, Sa.Kaph], // ك ->
			[Ar.Lam, Sa.Lamedh], // ل ->
			[Ar.Meem, Sa.Mem], // م ->
			[Ar.Noon, Sa.Nun], // ن ->
			[Ar.Ha, Sa.He], // ه ->
			[Ar.Waw, Sa.Waw], // و ->
			[Ar.Yaa, Sa.Yodh], // ي ->
			[Ar.AlefMaksura, Sa.Alef], // ى ->
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

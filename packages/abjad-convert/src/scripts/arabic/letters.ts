import { Script } from '../Script'
import { Abjad } from '../../types'

const letters = [
	String.fromCodePoint(0x0621), /** #0   ء */
	String.fromCodePoint(0x0622), /** #1   آ */
	String.fromCodePoint(0x0623), /** #2   أ */
	String.fromCodePoint(0x0624), /** #3   ؤ */
	String.fromCodePoint(0x0625), /** #4   إ */
	String.fromCodePoint(0x0626), /** #5   ئ */
	String.fromCodePoint(0x0627), /** #6   ا */
	String.fromCodePoint(0x0628), /** #7   ب */
	String.fromCodePoint(0x0629), /** #8   ة */
	String.fromCodePoint(0x062A), /** #9   ت */
	String.fromCodePoint(0x062B), /** #10  ث */
	String.fromCodePoint(0x062C), /** #11  ج */
	String.fromCodePoint(0x062D), /** #12  ح */
	String.fromCodePoint(0x062E), /** #13  خ */
	String.fromCodePoint(0x062F), /** #14  د */
	String.fromCodePoint(0x0630), /** #15  ذ */
	String.fromCodePoint(0x0631), /** #16  ر */
	String.fromCodePoint(0x0632), /** #17  ز */
	String.fromCodePoint(0x0633), /** #18  س */
	String.fromCodePoint(0x0634), /** #19  ش */
	String.fromCodePoint(0x0635), /** #20  ص */
	String.fromCodePoint(0x0636), /** #21  ض */
	String.fromCodePoint(0x0637), /** #22  ط */
	String.fromCodePoint(0x0638), /** #23  ظ */
	String.fromCodePoint(0x0639), /** #24  ع */
	String.fromCodePoint(0x063A), /** #25  غ */
	/** ignore from U+063B to U+0640 */
	String.fromCodePoint(0x0641), /** #26  ف */
	String.fromCodePoint(0x0642), /** #27  ق */
	String.fromCodePoint(0x0643), /** #28  ك */
	String.fromCodePoint(0x0644), /** #29  ل */
	String.fromCodePoint(0x0645), /** #30  م */
	String.fromCodePoint(0x0646), /** #31  ن */
	String.fromCodePoint(0x0647), /** #32  ه */
	String.fromCodePoint(0x0648), /** #33  و */
	String.fromCodePoint(0x0649), /** #34  ى */
	String.fromCodePoint(0x064A), /** #35  ي */
	String.fromCodePoint(0x064B), /** #36  ً  */
	String.fromCodePoint(0x064C), /** #37  ٌ  */
	String.fromCodePoint(0x064D), /** #38  ٍ  */
	String.fromCodePoint(0x064E), /** #39  َ  */
	String.fromCodePoint(0x064F), /** #40  ُ  */
	String.fromCodePoint(0x0650), /** #41  ِ  */
	String.fromCodePoint(0x0651), /** #42  ّ  */
	String.fromCodePoint(0x0652), /** #43  ْ  */
	/** ignore from U+0653 to U+066F */
	String.fromCodePoint(0x0670), /** #44  ٰ  */
	String.fromCodePoint(0x0671), /** #45  ٱ */

	/** selectively frequently used alternative letters */
	String.fromCodePoint(0x067E), /** #46  پ */
	String.fromCodePoint(0x0686), /** #47  چ */
	String.fromCodePoint(0x0698), /** #48  ژ */
	String.fromCodePoint(0x06A0), /** #49 ڠ */
	String.fromCodePoint(0x06A4), /** #50  ڤ */
	String.fromCodePoint(0x06AF), /** #51  گ */
] as const

export const Ar = {
	Hamza: letters[0], // ء
	AlefMadda: letters[1], // آ
	AlefHamza: letters[2], // أ
	WawHamza: letters[3], // ؤ
	AlefHamzaMaksura: letters[4], // إ
	AlefMaksuraHamza: letters[5], // ئ
	Alef: letters[6], // ا
	Ba: letters[7], // ب
	TaMarbuta: letters[8], // ة
	Ta: letters[9], // ت
	Tha: letters[10], // ث
	Jeem: letters[11], // ج
	H7aa: letters[12], // ح
	Khaa: letters[13], // خ
	Dal: letters[14], // د
	Thal: letters[15], // ذ
	Ra: letters[16], // ر
	Zay: letters[17], // ز
	Seen: letters[18], // س
	Sheen: letters[19], // ش
	Sad: letters[20], // ص
	Dad: letters[21], // ض
	TTa: letters[22], // ط
	THa: letters[23], // ظ
	Ayn: letters[24], // ع
	Ghayn: letters[25], // غ
	Fa: letters[26], // ف
	Qaf: letters[27], // ق
	Kaf: letters[28], // ك
	Lam: letters[29], // ل
	Meem: letters[30], // م
	Noon: letters[31], // ن
	Ha: letters[32], // ه
	Waw: letters[33], // و
	AlefMaksura: letters[34], // ى
	Yaa: letters[35], // ي
	Fathatan: letters[36], // ً
	Dammatan: letters[37], // ٌ
	Kasratan: letters[38], // ٍ
	Fatha: letters[39], // َ
	Damma: letters[40], // ُ
	Kasra: letters[41], // ِ
	Shadda: letters[42], // ّ
	Sukun: letters[43], // ْ
	AlefKhanjariya: letters[44], // ٰ
	AlefWasla: letters[45], // ٱ
	Pe: letters[46], // پ
	Che: letters[47], // چ
	Že: letters[48], // ژ
	Nga: letters[49], // ڠ
	Ve: letters[50], // ڤ
	Gaf: letters[51], // گ
}

export const arabic = new Script(
	Abjad.Arabic,
	true,
	letters,
)

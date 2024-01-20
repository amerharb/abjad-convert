import { Script } from '../Script'
import { Abjad } from '../../types'

const letters = [
	'\u0621', /** #0   ء */
	'\u0622', /** #1   آ */
	'\u0623', /** #2   أ */
	'\u0624', /** #3   ؤ */
	'\u0625', /** #4   إ */
	'\u0627', /** #5   ا */
	'\u0628', /** #6   ب */
	'\u0629', /** #7   ة */
	'\u062A', /** #8   ت */
	'\u062B', /** #9   ث */
	'\u062C', /** #10  ج */
	'\u062D', /** #11  ح */
	'\u062E', /** #12  خ */
	'\u062F', /** #13  د */
	'\u0630', /** #14  ذ */
	'\u0631', /** #15  ر */
	'\u0632', /** #16  ز */
	'\u0633', /** #17  س */
	'\u0634', /** #18  ش */
	'\u0635', /** #19  ص */
	'\u0636', /** #20  ض */
	'\u0637', /** #21  ط */
	'\u0638', /** #22  ظ */
	'\u0639', /** #23  ع */
	'\u063A', /** #24  غ */
	'\u0641', /** #25  ف */
	'\u0642', /** #26  ق */
	'\u0643', /** #27  ك */
	'\u0644', /** #28  ل */
	'\u0645', /** #29  م */
	'\u0646', /** #30  ن */
	'\u0647', /** #31  ه */
	'\u0648', /** #32  و */
	'\u0649', /** #33  ى */
	'\u064A', /** #34  ي */
] as const

export const Ar = {
	Hamza: letters[0], // ء
	AlefMadda: letters[1], // آ
	AlefHamza: letters[2], // أ
	WawHamza: letters[3], // ؤ
	AlefHamzaMaksura: letters[4], // إ
	Alef: letters[5], // ا
	Ba: letters[6], // ب
	TaMarbuta: letters[7], // ة
	Ta: letters[8], // ت
	Tha: letters[9], // ث
	Jeem: letters[10], // ج
	H7aa: letters[11], // ح
	Khaa: letters[12], // خ
	Dal: letters[13], // د
	Thal: letters[14], // ذ
	Ra: letters[15], // ر
	Zay: letters[16], // ز
	Seen: letters[17], // س
	Sheen: letters[18], // ش
	Sad: letters[19], // ص
	Dad: letters[20], // ض
	TTa: letters[21], // ط
	THa: letters[22], // ظ
	Ayn: letters[23], // ع
	Ghayn: letters[24], // غ
	Fa: letters[25], // ف
	Qaf: letters[26], // ق
	Kaf: letters[27], // ك
	Lam: letters[28], // ل
	Meem: letters[29], // م
	Noon: letters[30], // ن
	Ha: letters[31], // ه
	Waw: letters[32], // و
	AlefMaksura: letters[33], // ى
	Yaa: letters[34], // ي
}

export const arabic = new Script(
	Abjad.Arabic,
	true,
	letters,
)

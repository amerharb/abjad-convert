import { Script } from '../Script'
import { Abjad } from '../../types'

const letters = [
	'\u0710', /** #0  ܐ U+0710 SYRIAC LETTER ALAPH */
	'\u0711', /** #1  ܑ U+0711 SYRIAC LETTER SUPERSCRIPT ALAPH */
	'\u0712', /** #2  ܒ U+0712 SYRIAC LETTER BETH */
	'\u0713', /** #3  ܓ U+0713 SYRIAC LETTER GAMAL */
	'\u0714', /** #4  ܔ U+0714 SYRIAC LETTER GAMAL GARSHUNI */
	'\u0715', /** #5  ܕ U+0715 SYRIAC LETTER DALATH */
	'\u0716', /** #6  ܖ U+0716 SYRIAC LETTER DOTLESS DALATH RISH */
	'\u0717', /** #7  ܗ U+0717 SYRIAC LETTER HE */
	'\u0718', /** #8  ܘ U+0718 SYRIAC LETTER WAW */
	'\u0719', /** #9  ܙ U+0719 SYRIAC LETTER ZAIN */
	'\u071A', /** #10  ܚ U+071A SYRIAC LETTER HETH */
	'\u071B', /** #11 ܛ U+071B SYRIAC LETTER TETH */
	'\u071C', /** #12 ܜ U+071C SYRIAC LETTER TETH GARSHUNI */
	'\u071D', /** #13   ܝ U+071D SYRIAC LETTER YUDH */
	'\u071E', /** #14 ܞ U+071E SYRIAC LETTER YUDH HE */
	'\u071F', /** #15 ܟ U+071F SYRIAC LETTER KAPH */
	'\u0720', /** #16 ܠ U+0720 SYRIAC LETTER LAMADH */
	'\u0721', /** #17 ܡ U+0721 SYRIAC LETTER MIM */
	'\u0722', /** #18 ܢ U+0722 SYRIAC LETTER NUN */
	'\u0723', /** #19 ܣ U+0723 SYRIAC LETTER SEMKATH */
	'\u0724', /** #20 ܤ U+0724 SYRIAC LETTER FINAL SEMKATH */
	'\u0725', /** #21 ܥ U+0725 SYRIAC LETTER E */
	'\u0726', /** #22 ܦ U+0726 SYRIAC LETTER PE */
	'\u0727', /** #23 ܧ U+0727 SYRIAC LETTER REVERSED PE */
	'\u0728', /** #24 ܨ U+0728 SYRIAC LETTER SADHE */
	'\u0729', /** #25 ܩ U+0729 SYRIAC LETTER QAPH */
	'\u072A', /** #26 ܪ U+072A SYRIAC LETTER RISH */
	'\u072B', /** #27 ܫ U+072B SYRIAC LETTER SHIN */
	'\u072C', /** #28 ܬ U+072C SYRIAC LETTER TAW */
	'\u072D', /** #29 ܭ U+072D SYRIAC LETTER PERSIAN BHETH */
	'\u072E', /** #30 ܮ U+072E SYRIAC LETTER PERSIAN GHAMAL */
	'\u072F', /** #31 ܯ U+072F SYRIAC LETTER PERSIAN DHALATH */
]

const Sy = {
	Alaph: letters[0], // ܐ
	SuperaAlaph: letters[1], // ܑ
	Beth: letters[2], // ܒ
	Gamal: letters[3], // ܓ
	GamalGarshuni: letters[4], // ܔ
	Dalath: letters[5], // ܕ
	DalathRish: letters[6], // ܖ
	He: letters[7], // ܗ
	Waw: letters[8], // ܘ
	Zain: letters[9], // ܙ
	Heth: letters[10], // ܚ
	Teth: letters[11], // ܛ
	TethGarshuni: letters[12], // ܜ
	Yudh: letters[13], // ܝ
	YudhHe: letters[14], // ܞ
	Kaph: letters[15], // ܟ
	Lamadh: letters[16], // ܠ
	Mim: letters[17], // ܡ
	Nun: letters[18], // ܢ
	Semkath: letters[19], // ܣ
	FinalSemkath: letters[20], // ܤ
	E: letters[21], // ܥ
	Pe: letters[22], // ܦ
	ReversedPe: letters[23], // ܧ
	Sadhe: letters[24], // ܨ
	Qaph: letters[25], // ܩ
	Rish: letters[26], // ܪ
	Shin: letters[27], // ܫ
	Taw: letters[28], // ܬ
	PersianBheth: letters[29], // ܭ
	PersianGhamal: letters[30], // ܮ
	PersianDhalath: letters[31], // ܯ
}

export const syriac = new Script(
	Abjad.Syriac,
	true,
	letters,
	Sy,
)

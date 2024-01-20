import { Script } from '../Script'
import { Abjad } from '../../types'

/**
 * Imperial Aramaic letters
 */
const letters = [
	'\uD802\uDC40', /** #0  𐡀 U+10840 IMPERIAL ARAMAIC LETTER Aleph */
	'\uD802\uDC41', /** #1  𐡁 U+10841 IMPERIAL ARAMAIC LETTER Beth */
	'\uD802\uDC42', /** #2  𐡂 U+10842 IMPERIAL ARAMAIC LETTER Gimel */
	'\uD802\uDC43', /** #3  𐡃 U+10843 IMPERIAL ARAMAIC LETTER Daleth */
	'\uD802\uDC44', /** #4  𐡄 U+10844 IMPERIAL ARAMAIC LETTER He */
	'\uD802\uDC45', /** #5  𐡅 U+10845 IMPERIAL ARAMAIC LETTER Waw */
	'\uD802\uDC46', /** #6  𐡆 U+10846 IMPERIAL ARAMAIC LETTER Zayin */
	'\uD802\uDC47', /** #7  𐡇 U+10847 IMPERIAL ARAMAIC LETTER Heth */
	'\uD802\uDC48', /** #8  𐡈 U+10848 IMPERIAL ARAMAIC LETTER Teth */
	'\uD802\uDC49', /** #9  𐡉 U+10849 IMPERIAL ARAMAIC LETTER Yod */
	'\uD802\uDC4A', /** #10 𐡊 U+1084A IMPERIAL ARAMAIC LETTER Kaph */
	'\uD802\uDC4B', /** #11 𐡋 U+1084B IMPERIAL ARAMAIC LETTER Lamedh */
	'\uD802\uDC4C', /** #12 𐡌 U+1084C IMPERIAL ARAMAIC LETTER Mem */
	'\uD802\uDC4D', /** #13 𐡍 U+1084D IMPERIAL ARAMAIC LETTER Nun */
	'\uD802\uDC4E', /** #14 𐡎 U+1084E IMPERIAL ARAMAIC LETTER Samekh */
	'\uD802\uDC4F', /** #15 𐡏 U+1084F IMPERIAL ARAMAIC LETTER Ayin */
	'\uD802\uDC50', /** #16 𐡐 U+10850 IMPERIAL ARAMAIC LETTER Pe */
	'\uD802\uDC51', /** #17 𐡑 U+10851 IMPERIAL ARAMAIC LETTER Sadhe */
	'\uD802\uDC52', /** #18 𐡒 U+10852 IMPERIAL ARAMAIC LETTER Qoph */
	'\uD802\uDC53', /** #19 𐡓 U+10853 IMPERIAL ARAMAIC LETTER Resh */
	'\uD802\uDC54', /** #20 𐡔 U+10854 IMPERIAL ARAMAIC LETTER Shin */
	'\uD802\uDC55', /** #21 𐡕 U+10855 IMPERIAL ARAMAIC LETTER Taw */

	'\uD802\uDC58', /** #22 𐡘 U+10858 IMPERIAL ARAMAIC NUMBER ONE */
	'\uD802\uDC59', /** #23 𐡙 U+10859 IMPERIAL ARAMAIC NUMBER TWO */
	'\uD802\uDC5A', /** #24 𐡚 U+1085A IMPERIAL ARAMAIC NUMBER THREE */
	'\uD802\uDC5B', /** #25 𐡛 U+1085B IMPERIAL ARAMAIC NUMBER TEN */
	'\uD802\uDC5C', /** #26 𐡜 U+1085C IMPERIAL ARAMAIC NUMBER TWENTY */
	'\uD802\uDC5D', /** #27 𐡝 U+1085D IMPERIAL ARAMAIC NUMBER ONE HUNDRED */
	'\uD802\uDC5E', /** #28 𐡞 U+1085E IMPERIAL ARAMAIC NUMBER ONE THOUSAND */
	'\uD802\uDC5F', /** #29 𐡟 U+1085F IMPERIAL ARAMAIC NUMBER TEN THOUSAND */
] as const

export const Ia = {
	Aleph: letters[0], // 𐡀
	Bet: letters[1], // 𐡁
	Gimel: letters[2], // 𐡂
	Daleth: letters[3], // 𐡃
	He: letters[4], // 𐡄
	Waw: letters[5], // 𐡅
	Zayin: letters[6], // 𐡆
	Heth: letters[7], // 𐡇
	Teth: letters[8], // 𐡈
	Yod: letters[9], // 𐡉
	Kaph: letters[10], // 𐡊
	Lamedh: letters[11], // 𐡋
	Mem: letters[12], // 𐡌
	Nun: letters[13], // 𐡍
	Samekh: letters[14], // 𐡎
	Ayin: letters[15], // 𐡏
	Pe: letters[16], // 𐡐
	Sadhe: letters[17], // 𐡑
	Qoph: letters[18], // 𐡒
	Resh: letters[19], // 𐡓
	Shin: letters[20], // 𐡔
	Taw: letters[21], // 𐡕

	One: letters[22], // 𐡘
	Two: letters[23], // 𐡙
	Three: letters[24], // 𐡚
	Ten: letters[25], // 𐡛
	Twenty: letters[26], // 𐡜
	Hundred: letters[27], // 𐡝
	Thousand: letters[28], // 𐡞
	TenThousand: letters[29], // 𐡟
}

export const imperialAramaic = new Script(
	Abjad.ImperialAramaic,
	true,
	letters,
)

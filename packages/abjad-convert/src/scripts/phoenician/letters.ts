import { Abjad } from '../../types'
import { Script } from '../Script'

const letters = [
	String.fromCodePoint(0x10900), /** #0  𐤀 U+10900 PHOENICIAN LETTER Alep */
	String.fromCodePoint(0x10901), /** #1  𐤁 U+10901 PHOENICIAN LETTER Bet */
	String.fromCodePoint(0x10902), /** #2  𐤂 U+10902 PHOENICIAN LETTER Gaml */
	String.fromCodePoint(0x10903), /** #3  𐤃 U+10903 PHOENICIAN LETTER Delt */
	String.fromCodePoint(0x10904), /** #4  𐤄 U+10904 PHOENICIAN LETTER He */
	String.fromCodePoint(0x10905), /** #5  𐤅 U+10905 PHOENICIAN LETTER Wau */
	String.fromCodePoint(0x10906), /** #6  𐤆 U+10906 PHOENICIAN LETTER Zai */
	String.fromCodePoint(0x10907), /** #7  𐤇 U+10907 PHOENICIAN LETTER Heth */
	String.fromCodePoint(0x10908), /** #8  𐤈 U+10908 PHOENICIAN LETTER Tet */
	String.fromCodePoint(0x10909), /** #9  𐤉 U+10909 PHOENICIAN LETTER Yod */
	String.fromCodePoint(0x1090A), /** #10 𐤊 U+1090A PHOENICIAN LETTER Kaf */
	String.fromCodePoint(0x1090B), /** #11 𐤋 U+1090B PHOENICIAN LETTER Lam */
	String.fromCodePoint(0x1090C), /** #12 𐤌 U+1090C PHOENICIAN LETTER Mem */
	String.fromCodePoint(0x1090D), /** #13 𐤍 U+1090D PHOENICIAN LETTER Nun */
	String.fromCodePoint(0x1090E), /** #14 𐤎 U+1090E PHOENICIAN LETTER Semk */
	String.fromCodePoint(0x1090F), /** #15 𐤏 U+1090F PHOENICIAN LETTER Ain */
	String.fromCodePoint(0x10910), /** #16 𐤐 U+10910 PHOENICIAN LETTER Pe */
	String.fromCodePoint(0x10911), /** #17 𐤑 U+10911 PHOENICIAN LETTER Sade */
	String.fromCodePoint(0x10912), /** #18 𐤒 U+10912 PHOENICIAN LETTER Qof */
	String.fromCodePoint(0x10913), /** #19 𐤓 U+10913 PHOENICIAN LETTER Ros */
	String.fromCodePoint(0x10914), /** #20 𐤔 U+10914 PHOENICIAN LETTER Shin */
	String.fromCodePoint(0x10915), /** #21 𐤕 U+10915 PHOENICIAN LETTER Tau */

	String.fromCodePoint(0x10916), /** #22 𐤖 U+10916 PHOENICIAN NUMBER ONE */
	String.fromCodePoint(0x10917), /** #23 𐤗 U+10917 PHOENICIAN NUMBER TEN */
	String.fromCodePoint(0x10918), /** #24 𐤘 U+10918 PHOENICIAN NUMBER TWENTY */
	String.fromCodePoint(0x10919), /** #25 𐤙 U+10919 PHOENICIAN NUMBER ONE HUNDRED */
	String.fromCodePoint(0x1091A), /** #26 𐤚 U+1091A PHOENICIAN NUMBER TWO */
	String.fromCodePoint(0x1091B), /** #27 𐤛 U+1091B PHOENICIAN NUMBER THREE */

	String.fromCodePoint(0x1091F), /** #28 𐤟 U+1091F PHOENICIAN Word Separator */
] as const

export const Ph = {
	Alep: letters[0], // 𐤀
	Bet: letters[1], // 𐤁
	Gimi: letters[2], // 𐤂
	Dalet: letters[3], // 𐤃
	He: letters[4], // 𐤄
	Waw: letters[5], // 𐤅
	Zayin: letters[6], // 𐤆
	Het: letters[7], // 𐤇
	Tet: letters[8], // 𐤈
	Yod: letters[9], // 𐤉
	Kap: letters[10], // 𐤊
	Lam: letters[11], // 𐤋
	Mem: letters[12], // 𐤌
	Nun: letters[13], // 𐤍
	Semk: letters[14], // 𐤎
	Ain: letters[15], // 𐤏
	Pe: letters[16], // 𐤐
	Sade: letters[17], // 𐤑
	Qof: letters[18], // 𐤒
	Ros: letters[19], // 𐤓
	Shin: letters[20], // 𐤔
	Tau: letters[21], // 𐤕
	One: letters[22], // 𐤖
	Ten: letters[23], // 𐤗
	Twenty: letters[24], // 𐤘
	OneHundred: letters[25], // 𐤙
	Two: letters[26], // 𐤚
	Three: letters[27], // 𐤛
	WordSeparator: letters[28], // 𐤟
}

export const phoenician = new Script(
	Abjad.Phoenician,
	true,
	letters,
)

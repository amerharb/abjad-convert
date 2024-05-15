import { Script } from '../Script'
import { Abjad } from '../../types'

const letters = [
	String.fromCodePoint(0x10380), /** #0  𐎀 U+10380 UGARITIC LETTER ALPA */
	String.fromCodePoint(0x10381), /** #1  𐎁 U+10381 UGARITIC LETTER BETA */
	String.fromCodePoint(0x10382), /** #2  𐎂  U+10382 UGARITIC LETTER GAMLA */
	String.fromCodePoint(0x10383), /** #3  𐎃  U+10383 UGARITIC LETTER KHA */
	String.fromCodePoint(0x10384), /** #4  𐎄 U+10384 UGARITIC LETTER DELTA */
	String.fromCodePoint(0x10385), /** #5  𐎅 U+10385 UGARITIC LETTER HO */
	String.fromCodePoint(0x10386), /** #6  𐎆 U+10386 UGARITIC LETTER WO */
	String.fromCodePoint(0x10387), /** #7  𐎇 U+10387 UGARITIC LETTER ZETA */
	String.fromCodePoint(0x10388), /** #8  𐎈 U+10388 UGARITIC LETTER HOTA */
	String.fromCodePoint(0x10389), /** #9  𐎉 U+10389 UGARITIC LETTER TET */
	String.fromCodePoint(0x1038A), /** #10 𐎊 U+1038A UGARITIC LETTER YOD */
	String.fromCodePoint(0x1038B), /** #11 𐎋 U+1038B UGARITIC LETTER KAF */
	String.fromCodePoint(0x1038C), /** #12 𐎌 U+1038C UGARITIC LETTER SHIN */
	String.fromCodePoint(0x1038D), /** #13 𐎍 U+1038D UGARITIC LETTER LAMDA */
	String.fromCodePoint(0x1038E), /** #14 𐎎 U+1038E UGARITIC LETTER MEM */
	String.fromCodePoint(0x1038F), /** #15 𐎏 U+1038F UGARITIC LETTER DHAL */
	String.fromCodePoint(0x10390), /** #16 𐎐 U+10390 UGARITIC LETTER NUN */
	String.fromCodePoint(0x10391), /** #17 𐎑 U+10391 UGARITIC LETTER ZU */
	String.fromCodePoint(0x10392), /** #18 𐎒 U+10392 UGARITIC LETTER SAMKA */
	String.fromCodePoint(0x10393), /** #19 𐎓 U+10393 UGARITIC LETTER AIN */
	String.fromCodePoint(0x10394), /** #20 𐎔 U+10394 UGARITIC LETTER PU */
	String.fromCodePoint(0x10395), /** #21 𐎕 U+10395 UGARITIC LETTER SADE */
	String.fromCodePoint(0x10396), /** #22 𐎖 U+10396 UGARITIC LETTER QOPA */
	String.fromCodePoint(0x10397), /** #23 𐎗 U+10397 UGARITIC LETTER RASHA */
	String.fromCodePoint(0x10398), /** #24 𐎘 U+10398 UGARITIC LETTER THANNA */
	String.fromCodePoint(0x10399), /** #25 𐎙 U+10399 UGARITIC LETTER GHAIN */
	String.fromCodePoint(0x1039A), /** #26 𐎚 U+1039A UGARITIC LETTER TO */
	String.fromCodePoint(0x1039B), /** #27 𐎛 U+1039B UGARITIC LETTER I */
	String.fromCodePoint(0x1039C), /** #28 𐎜 U+1039C UGARITIC LETTER U */
	String.fromCodePoint(0x1039D), /** #29 𐎝 U+1039D UGARITIC LETTER SSU */
] as const

export const Ug = {
	Alpa: letters[0], // 𐎀
	Beta: letters[1], // 𐎁
	Gamla: letters[2], // 𐎂
	Kha: letters[3], // 𐎃
	Delta: letters[4], // 𐎄
	Ho: letters[5], // 𐎅
	Wo: letters[6], // 𐎆
	Zeta: letters[7], // 𐎇
	Hota: letters[8], // 𐎈
	Tet: letters[9], // 𐎉
	Yod: letters[10], // 𐎊
	Kaf: letters[11], // 𐎋
	Shin: letters[12], // 𐎌
	Lamda: letters[13], // 𐎍
	Mem: letters[14], // 𐎎
	Dhal: letters[15], // 𐎏
	Nun: letters[16], // 𐎐
	Zu: letters[17], // 𐎑
	Samka: letters[18], // 𐎒
	Ain: letters[19], // 𐎓
	Pu: letters[20], // 𐎔
	Sade: letters[21], // 𐎕
	Qopa: letters[22], // 𐎖
	Rasha: letters[23], // 𐎗
	Thanna: letters[24], // 𐎘
	Ghain: letters[25], // 𐎙
	To: letters[26], // 𐎚
	I: letters[27], // 𐎛
	U: letters[28], // 𐎜
	Ssu: letters[29], // 𐎝
}

export const ugaritic = new Script(
	Abjad.Ugaritic,
	false,
	letters,
)

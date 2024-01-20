import { Script } from '../Script'
import { Abjad } from '../../types'

const letters = [
	'\uD800\uDF80', /** #0  𐎀 U+10380 UGARITIC LETTER ALPA */
	'\uD800\uDF81', /** #1  𐎁 U+10381 UGARITIC LETTER BETA */
	'\uD800\uDF82', /** #2  𐎂  U+10382 UGARITIC LETTER GAMLA */
	'\uD800\uDF83', /** #3  𐎃  U+10383 UGARITIC LETTER KHA */
	'\uD800\uDF84', /** #4  𐎄 U+10384 UGARITIC LETTER DELTA */
	'\uD800\uDF85', /** #5  𐎅 U+10385 UGARITIC LETTER HO */
	'\uD800\uDF86', /** #6  𐎆 U+10386 UGARITIC LETTER WO */
	'\uD800\uDF87', /** #7  𐎇 U+10387 UGARITIC LETTER ZETA */
	'\uD800\uDF88', /** #8  𐎈 U+10388 UGARITIC LETTER HOTA */
	'\uD800\uDF89', /** #9  𐎉 U+10389 UGARITIC LETTER TET */
	'\uD800\uDF8A', /** #10 𐎊 U+1038A UGARITIC LETTER YOD */
	'\uD800\uDF8B', /** #11 𐎋 U+1038B UGARITIC LETTER KAF */
	'\uD800\uDF8C', /** #12 𐎌 U+1038C UGARITIC LETTER SHIN */
	'\uD800\uDF8D', /** #13 𐎍 U+1038D UGARITIC LETTER LAMDA */
	'\uD800\uDF8E', /** #14 𐎎 U+1038E UGARITIC LETTER MEM */
	'\uD800\uDF8F', /** #15 𐎏 U+1038F UGARITIC LETTER DHAL */
	'\uD800\uDF90', /** #16 𐎐 U+10390 UGARITIC LETTER NUN */
	'\uD800\uDF91', /** #17 𐎑 U+10391 UGARITIC LETTER ZU */
	'\uD800\uDF92', /** #18 𐎒 U+10392 UGARITIC LETTER SAMKA */
	'\uD800\uDF93', /** #19 𐎓 U+10393 UGARITIC LETTER AIN */
	'\uD800\uDF94', /** #20 𐎔 U+10394 UGARITIC LETTER PU */
	'\uD800\uDF95', /** #21 𐎕 U+10395 UGARITIC LETTER SADE */
	'\uD800\uDF96', /** #22 𐎖 U+10396 UGARITIC LETTER QOPA */
	'\uD800\uDF97', /** #23 𐎗 U+10397 UGARITIC LETTER RASHA */
	'\uD800\uDF98', /** #24 𐎘 U+10398 UGARITIC LETTER THANNA */
	'\uD800\uDF99', /** #25 𐎙 U+10399 UGARITIC LETTER GHAIN */
	'\uD800\uDF9A', /** #26 𐎚 U+1039A UGARITIC LETTER TO */
	'\uD800\uDF9B', /** #27 𐎛 U+1039B UGARITIC LETTER I */
	'\uD800\uDF9C', /** #28 𐎜 U+1039C UGARITIC LETTER U */
	'\uD800\uDF9D', /** #29 𐎝 U+1039D UGARITIC LETTER SSU */
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

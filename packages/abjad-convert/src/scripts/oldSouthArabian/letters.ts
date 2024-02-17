import { Script } from '../Script'
import { Abjad } from '../../types'

/**
 * Old South Arabian letters
 */
const letters = [
	'\uD802\uDE60', /** #0  𐹠 U+10A60 OLD SOUTH ARABIAN LETTER He */
	'\uD802\uDE61', /** #1  𐹡 U+10A61 OLD SOUTH ARABIAN LETTER Lamedh */
	'\uD802\uDE62', /** #2  𐹢 U+10A62 OLD SOUTH ARABIAN LETTER Heth */
	'\uD802\uDE63', /** #3  𐹣 U+10A63 OLD SOUTH ARABIAN LETTER Mem */
	'\uD802\uDE64', /** #4  𐹤 U+10A64 OLD SOUTH ARABIAN LETTER Qoph */
	'\uD802\uDE65', /** #5  𐹥 U+10A65 OLD SOUTH ARABIAN LETTER Waw */
	'\uD802\uDE66', /** #6  𐹦 U+10A66 OLD SOUTH ARABIAN LETTER Shin */
	'\uD802\uDE67', /** #7  𐹧 U+10A67 OLD SOUTH ARABIAN LETTER Resh */
	'\uD802\uDE68', /** #8  𐹨 U+10A68 OLD SOUTH ARABIAN LETTER Beth */
	'\uD802\uDE69', /** #9  𐹩 U+10A69 OLD SOUTH ARABIAN LETTER Taw */
	'\uD802\uDE6A', /** #10 𐹪 U+10A6A OLD SOUTH ARABIAN LETTER Sat */
	'\uD802\uDE6B', /** #11 𐹫 U+10A6B OLD SOUTH ARABIAN LETTER Kaph */
	'\uD802\uDE6C', /** #12 𐹬 U+10A6C OLD SOUTH ARABIAN LETTER Nun */
	'\uD802\uDE6D', /** #13 𐹭 U+10A6D OLD SOUTH ARABIAN LETTER Kheth */
	'\uD802\uDE6E', /** #14 𐹮 U+10A6E OLD SOUTH ARABIAN LETTER Sadhe */
	'\uD802\uDE6F', /** #15 𐹯 U+10A6F OLD SOUTH ARABIAN LETTER Samekh */
	'\uD802\uDE70', /** #16 𐹰 U+10A70 OLD SOUTH ARABIAN LETTER Fe */
	'\uD802\uDE71', /** #17 𐹱 U+10A71 OLD SOUTH ARABIAN LETTER Alef */
	'\uD802\uDE72', /** #18 𐹲 U+10A72 OLD SOUTH ARABIAN LETTER Ayin */
	'\uD802\uDE73', /** #19 𐹳 U+10A73 OLD SOUTH ARABIAN LETTER Dhadhe */
	'\uD802\uDE74', /** #20 𐹴 U+10A74 OLD SOUTH ARABIAN LETTER Gimel */
	'\uD802\uDE75', /** #21 𐹵 U+10A75 OLD SOUTH ARABIAN LETTER Daleth */
	'\uD802\uDE76', /** #22 𐹶 U+10A76 OLD SOUTH ARABIAN LETTER Ghayn */
	'\uD802\uDE77', /** #23 𐹷 U+10A77 OLD SOUTH ARABIAN LETTER Teth */
	'\uD802\uDE78', /** #24 𐹸 U+10A78 OLD SOUTH ARABIAN LETTER Zayn */
	'\uD802\uDE79', /** #25 𐹹 U+10A79 OLD SOUTH ARABIAN LETTER Dhaleth */
	'\uD802\uDE7A', /** #26 𐹺 U+10A7A OLD SOUTH ARABIAN LETTER Yodh */
	'\uD802\uDE7B', /** #27 𐹻 U+10A7B OLD SOUTH ARABIAN LETTER Thaw */
	'\uD802\uDE7C', /** #28 𐹼 U+10A7C OLD SOUTH ARABIAN LETTER Theth */
	'\uD802\uDE7D', /** #29 𐹽 U+10A7D OLD SOUTH ARABIAN NUMBER ONE */
	'\uD802\uDE7E', /** #30 𐹾 U+10A7E OLD SOUTH ARABIAN NUMBER FIFTY */
	'\uD802\uDE7F', /** #31 𐹿 U+10A7F OLD SOUTH ARABIAN NUMERIC INDICATOR */
] as const

export const Sa = {
	He: letters[0], // 𐹠
	Lamedh: letters[1], // 𐹡
	Heth: letters[2], // 𐹢
	Mem: letters[3], // 𐹣
	Qoph: letters[4], // 𐹤
	Waw: letters[5], // 𐹥
	Shin: letters[6], // 𐹦
	Resh: letters[7], // 𐹧
	Beth: letters[8], // 𐹨
	Taw: letters[9], // 𐹩
	Sat: letters[10], // 𐹪
	Kaph: letters[11], // 𐹫
	Nun: letters[12], // 𐹬
	Kheth: letters[13], // 𐹭
	Sadhe: letters[14], // 𐹮
	Samekh: letters[15], // 𐹯
	Fe: letters[16], // 𐹰
	Alef: letters[17], // 𐹱
	Ayin: letters[18], // 𐹲
	Dhadhe: letters[19], // 𐹳
	Gimel: letters[20], // 𐹴
	Daleth: letters[21], // 𐹵
	Ghayn: letters[22], // 𐹶
	Teth: letters[23], // 𐹷
	Zayn: letters[24], // 𐹸
	Dhaleth: letters[25], // 𐹹
	Yodh: letters[26], // 𐹺
	Thaw: letters[27], // 𐹻
	Theth: letters[28], // 𐹼
	ONE: letters[29], // 𐹽
	FIFTY: letters[30], // 𐹾
	INDICATOR: letters[31], // 𐹿
}

export const oldSouthArabian = new Script(
	Abjad.OldSouthArabian,
	true,
	letters,
)

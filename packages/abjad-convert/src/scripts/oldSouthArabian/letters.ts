import { Script } from '../Script'
import { Abjad } from '../../types'

/**
 * Old South Arabian letters
 */
const letters = [
	String.fromCodePoint(0x10A60), /** #0  𐹠 U+10A60 OLD SOUTH ARABIAN LETTER He */
	String.fromCodePoint(0x10A61), /** #1  𐹡 U+10A61 OLD SOUTH ARABIAN LETTER Lamedh */
	String.fromCodePoint(0x10A62), /** #2  𐹢 U+10A62 OLD SOUTH ARABIAN LETTER Heth */
	String.fromCodePoint(0x10A63), /** #3  𐹣 U+10A63 OLD SOUTH ARABIAN LETTER Mem */
	String.fromCodePoint(0x10A64), /** #4  𐹤 U+10A64 OLD SOUTH ARABIAN LETTER Qoph */
	String.fromCodePoint(0x10A65), /** #5  𐹥 U+10A65 OLD SOUTH ARABIAN LETTER Waw */
	String.fromCodePoint(0x10A66), /** #6  𐹦 U+10A66 OLD SOUTH ARABIAN LETTER Shin */
	String.fromCodePoint(0x10A67), /** #7  𐹧 U+10A67 OLD SOUTH ARABIAN LETTER Resh */
	String.fromCodePoint(0x10A68), /** #8  𐹨 U+10A68 OLD SOUTH ARABIAN LETTER Beth */
	String.fromCodePoint(0x10A69), /** #9  𐹩 U+10A69 OLD SOUTH ARABIAN LETTER Taw */
	String.fromCodePoint(0x10A6A), /** #10 𐹪 U+10A6A OLD SOUTH ARABIAN LETTER Sat */
	String.fromCodePoint(0x10A6B), /** #11 𐹫 U+10A6B OLD SOUTH ARABIAN LETTER Kaph */
	String.fromCodePoint(0x10A6C), /** #12 𐹬 U+10A6C OLD SOUTH ARABIAN LETTER Nun */
	String.fromCodePoint(0x10A6D), /** #13 𐹭 U+10A6D OLD SOUTH ARABIAN LETTER Kheth */
	String.fromCodePoint(0x10A6E), /** #14 𐹮 U+10A6E OLD SOUTH ARABIAN LETTER Sadhe */
	String.fromCodePoint(0x10A6F), /** #15 𐹯 U+10A6F OLD SOUTH ARABIAN LETTER Samekh */
	String.fromCodePoint(0x10A70), /** #16 𐹰 U+10A70 OLD SOUTH ARABIAN LETTER Fe */
	String.fromCodePoint(0x10A71), /** #17 𐹱 U+10A71 OLD SOUTH ARABIAN LETTER Alef */
	String.fromCodePoint(0x10A72), /** #18 𐹲 U+10A72 OLD SOUTH ARABIAN LETTER Ayin */
	String.fromCodePoint(0x10A73), /** #19 𐹳 U+10A73 OLD SOUTH ARABIAN LETTER Dhadhe */
	String.fromCodePoint(0x10A74), /** #20 𐹴 U+10A74 OLD SOUTH ARABIAN LETTER Gimel */
	String.fromCodePoint(0x10A75), /** #21 𐹵 U+10A75 OLD SOUTH ARABIAN LETTER Daleth */
	String.fromCodePoint(0x10A76), /** #22 𐹶 U+10A76 OLD SOUTH ARABIAN LETTER Ghayn */
	String.fromCodePoint(0x10A77), /** #23 𐹷 U+10A77 OLD SOUTH ARABIAN LETTER Teth */
	String.fromCodePoint(0x10A78), /** #24 𐹸 U+10A78 OLD SOUTH ARABIAN LETTER Zayn */
	String.fromCodePoint(0x10A79), /** #25 𐹹 U+10A79 OLD SOUTH ARABIAN LETTER Dhaleth */
	String.fromCodePoint(0x10A7A), /** #26 𐹺 U+10A7A OLD SOUTH ARABIAN LETTER Yodh */
	String.fromCodePoint(0x10A7B), /** #27 𐹻 U+10A7B OLD SOUTH ARABIAN LETTER Thaw */
	String.fromCodePoint(0x10A7C), /** #28 𐹼 U+10A7C OLD SOUTH ARABIAN LETTER Theth */
	String.fromCodePoint(0x10A7D), /** #29 𐹽 U+10A7D OLD SOUTH ARABIAN NUMBER ONE */
	String.fromCodePoint(0x10A7E), /** #30 𐹾 U+10A7E OLD SOUTH ARABIAN NUMBER FIFTY */
	String.fromCodePoint(0x10A7F), /** #31 𐹿 U+10A7F OLD SOUTH ARABIAN NUMERIC INDICATOR */
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

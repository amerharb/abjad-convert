import { Abjad, convert } from "abjad-convert/src"

console.log('Abjad Convert')

const arabic = 'ا ب ت ج د خ'
console.log(`convert Arabic text ${arabic} to Ugaritic`)
console.log(convert(arabic, Abjad.Arabic, Abjad.Ugaritic))

const ugaritic = '𐎀 𐎁 𐎚 𐎂 𐎄 𐎃'
console.log(`convert Ugaritic text ${ugaritic} to Arabic`)
console.log(convert(ugaritic, Abjad.Ugaritic, Abjad.Arabic))

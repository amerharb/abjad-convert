import { convert } from "abjad-convert/src"
import { Abjad } from "abjad-convert/src/types"

console.log(convert('ا ب ت ج د خ', Abjad.Arabic, Abjad.Ugaritic))

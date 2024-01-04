import { getConverter } from "./ConverterFactory";
import { Abjad } from "./types";

const arabic = 'ا ب ج د';
const c = getConverter(Abjad.Arabic, Abjad.Ugaritic);
const ugaritic = c.convert(arabic);
console.log(arabic);
console.log(ugaritic);

import { convertArabicToUgaritic } from "./arabic/toUgaritic"

console.log('ABJAD Convert')

const arabic = 'ا ب ج د';
const ugaritic = convertArabicToUgaritic(arabic);
console.log(arabic);
console.log(ugaritic);

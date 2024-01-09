# Abjad Convert
[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](https://github.com/amerharb/abjad/tree/version/0.1.0)
[![License: GPLv3](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![Coverage](https://raw.githubusercontent.com/amerharb/abjad/version/0.1.0/packages/abjad-convert/badges/coverage.svg)
![Github workflow](https://github.com/amerharb/abjad/actions/workflows/lint-test.yaml/badge.svg?branch=version/0.1.0)

**abjad-convert** is a package for converting Abjad alphabets phonetically.

current supported alphabets:
- Arabic
- Imperial Aramaic
- Phoenician
- Syriac
- Uguritic

## How to use
npm:
```shell
npm i abjad-convert
```
yarn:
```shell
yarn add abjad-convert
```

Java Script:
```js
import { convert, Abjad } from 'abjad-convert';

const arabicWord = 'مرحبا';

const phoenicianWord = convert(arabicWord, Abjad.Arabic, Abjad.Phoenician);
console.log(phoenicianWord); // 𐤌𐤓𐤇𐤁𐤀

const ugariticWord = convert(arabicWord, Abjad.Arabic, Abjad.Ugaritic);
console.log(ugariticWord); // 𐎎𐎗𐎈𐎁𐎀

const imperialAramaicWord = convert(arabicWord, Abjad.Arabic, Abjad.ImperialAramaic);
console.log(imperialAramaicWord); // 𐡌𐡓𐡇𐡁𐡀

const syriacWord = convert(arabicWord, Abjad.Arabic, Abjad.Syriac);
console.log(syriacWord); // ܡܪܚܒܐ
```
## Contributing
### Adding new script
Pull requests are welcome. For adding new script. let's say that we want to add a new script "Foo"
- Step #1: create a feature branch from `main` named `abjad-convert/version/0.[x].0` where `x` is the next minor of current version number.
- Step #2: create a new branch that will the previous feature branch when creating the PR.
- Step #3: create a new folder named `foo` in `src`.
- Step #4: add pdf documentation for the script we want to add from www.unicode.org. for example for Ugaritic the file is `U10380.pdf`. this file will be used as a reference
- Step #5: add a new file named `letters.ts` in `foo` folder this file will export
- - `letters` an array of letters written using unicode values with jsdoc each line will contain 
the value of the letter using UTF-16 BE using escape \u followed by 4 hex digits.
notice that UTF16BE value is not always the same as the unicode value.
for example for letter Alpa in Ugaritic the unicode value is `0x10380` but the UTF16BE encode value is `0xD800DF80`
follow the value with jsdoc that contain array index, letter itself, unicode value, and the name of the letter.
for example for ugaritic looks like this:

```ts
export const letters = [
  '\uD800\uDF80', /** #0  𐎀 U+10380 UGARITIC LETTER ALPA */
  '\uD800\uDF81', /** #1  𐎁 U+10381 UGARITIC LETTER BETA */
  ...
];
```
- - 'Fo' an alias object called `Fo` short of Foo. this will give an alias for all letters mentioned in the letters array.

for example for ugaritic looks like this:
```ts
export const Ug = {
  Alpa: letters[0], // 𐎀
  Beta: letters[1], // 𐎁
...
};
```

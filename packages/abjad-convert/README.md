# Abjad Convert
[![Version](https://img.shields.io/badge/version-0.3.0-blue.svg)](https://github.com/amerharb/abjad/tree/version/0.3.0)
[![License: GPLv3](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![Coverage](https://raw.githubusercontent.com/amerharb/abjad/abjad-convert/version/0.3.0/packages/abjad-convert/badges/coverage.svg)
![Github workflow](https://github.com/amerharb/abjad/actions/workflows/lint-test.yaml/badge.svg?branch=abjad-convert/version/0.3.0)

**abjad-convert** is a package for converting Abjad alphabets phonetically.

current supported alphabets:
- Arabic
- Imperial Aramaic
- Phoenician
- Syriac
- Tifinagh
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

const imperialAramaicWord = convert(arabicWord, Abjad.Arabic, Abjad.ImperialAramaic);
console.log(imperialAramaicWord); // 𐡌𐡓𐡇𐡁𐡀

const phoenicianWord = convert(arabicWord, Abjad.Arabic, Abjad.Phoenician);
console.log(phoenicianWord); // 𐤌𐤓𐤇𐤁𐤀

const syriacWord = convert(arabicWord, Abjad.Arabic, Abjad.Syriac);
console.log(syriacWord); // ܡܪܚܒܐ

const tifinaghWord = convert(arabicWord, Abjad.Arabic, Abjad.Tifinagh);
console.log(tifinaghWord); // ⵎⵔⵃⴱⴰ

const ugariticWord = convert(arabicWord, Abjad.Arabic, Abjad.Ugaritic);
console.log(ugariticWord); // 𐎎𐎗𐎈𐎁𐎀
```

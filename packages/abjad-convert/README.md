# Abjad Convert

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

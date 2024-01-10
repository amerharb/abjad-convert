import {Ti} from './letters'
import {Ar} from '../arabic/letters'
import {IConverter} from '../IConverter'
import {Abjad} from '../types'

export class TifinaghToArabicConverter implements IConverter {
    public readonly from = Abjad.Tifinagh
    public readonly to = Abjad.Arabic

    private map = new Map<string, string>(
        [
            [' ', ' '],
            [Ti.Ya, Ar.Alef], // ⴰ -> ا
            [Ti.Yab, Ar.Ba], // ⴱ -> ب
            [Ti.Yabh, Ar.Ba], // ⴲ -> ب P
            [Ti.Yag, Ar.Jeem], // ⴳ -> ج G
            [Ti.Yagh, Ar.Jeem], // ⴴ -> ج G
            [Ti.Yad, Ar.Dal], // ⴷ -> د
            [Ti.Yadh, Ar.Thal], // ⴸ -> ذ
            [Ti.Yadd, Ar.Dad], // ⴹ -> ض
            [Ti.Yaddh, Ar.THa], // ⴺ -> ظ
            [Ti.Yey, Ar.Ha], // ⴻ -> ه
            [Ti.Yaf, Ar.Fa], // ⴼ -> ف
            [Ti.Yak, Ar.Kaf], // ⴽ -> ك
            [Ti.TuaregYak, Ar.Kaf], // ⴾ -> ك
            [Ti.Yakhh, Ar.Kaf], // ⴿ -> ك
            [Ti.Yah, Ar.Ha], // ⵀ -> هـ , TODO: also it can be B ب
            [Ti.BerberAcademyYah, Ar.Ha], // ⵁ -> هـ
            [Ti.TuaregYah, Ar.Ha], // ⵂ -> هـ
            [Ti.Yahh, Ar.H7aa], // ⵃ -> ح
            [Ti.Yaa, Ar.Ayn], // ⵄ -> ع
            [Ti.Yakh, Ar.Khaa], // ⵅ -> خ
            [Ti.TuaregYakh, Ar.Khaa], // ⵆ -> خ
            [Ti.Yaq, Ar.Qaf], // ⵇ -> ق
            [Ti.TuaregYaq, Ar.Qaf], // ⵈ -> ق
            [Ti.Yi, Ar.Yaa], // ⵉ -> ي
            [Ti.Yazh, Ar.Jeem], // ⵊ -> ج
            [Ti.AhaggarYazh, Ar.Jeem], // ⵋ -> ج
            [Ti.TuaregYazh, Ar.Jeem], // ⵌ -> ج
            [Ti.Yal, Ar.Lam], // ⵍ -> ل
            [Ti.Yam, Ar.Meem], // ⵎ -> م
            [Ti.Yan, Ar.Noon], // ⵏ -> ن
            [Ti.TuaregYagn, Ar.Noon], // ⵐ -> ن IPA: ɲ TODO: this is 2 letters of ني
            [Ti.TuaregYang, Ar.Noon], // ⵑ -> ن IPA: ŋ
            [Ti.Yap, Ar.Ba], // ⵒ -> ب
            [Ti.Yu, Ar.Waw], // ⵓ -> و
            [Ti.Yar, Ar.Ra], // ⵔ -> ر
            [Ti.Yarr, Ar.Ra], // ⵕ -> ر
            [Ti.Yagh, Ar.Ghayn], // ⵖ -> غ
            [Ti.TuaregYagh, Ar.Ghayn], // ⵗ -> غ
            [Ti.AyerYagh, Ar.Ghayn], // ⵘ -> غ TODO: this can be ج
            [Ti.Yas, Ar.Seen], // ⵙ -> س
            [Ti.Yass, Ar.Seen], // ⵚ -> ص
            [Ti.Yash, Ar.Sheen], // ⵛ -> ش
            [Ti.Yat, Ar.Ta], // ⵜ -> ت
            [Ti.Yath, Ar.Tha], // ⵝ -> ث
            [Ti.Yach, Ar.Jeem], // ⵞ -> ج
            [Ti.Yatt, Ar.Ta], // ⵟ -> ت
            [Ti.Yav, Ar.Fa], // ⵠ -> ف
            [Ti.Yaw, Ar.Waw], // ⵡ -> و
            [Ti.Yay, Ar.Yaa], // ⵢ -> ي
            [Ti.Yaz, Ar.Zay], // ⵣ -> ز
            [Ti.TawellemetYaz, Ar.Zay], // ⵤ -> ز
            [Ti.Yazz, Ar.Zay], // ⵥ -> ز
            [Ti.Ye, Ar.Yaa], // ⵦ -> ي
            [Ti.Yo, Ar.Waw], // ⵧ -> و
            [Ti.ModifierLetterLabializationMark, ''], // ⵯ -> nothing
            [Ti.SeparatorMark, ''], // ⵯ -> nothing
            [Ti.ConsonantJoiner, ''], // ⵯ -> nothing
        ]
    )

    public convert(text: string): string {
        let result = ''
        for (const letter of text) {
            result += this.map.get(letter) ?? ''
        }
        return result
    }
}

import { describe, expect, it } from '@jest/globals'
import { ImperialAramaicToArabicConverter } from '../../src/scripts/imperialAramaic/toArabic'

describe('ImperialAramaicToArabicConverter', () => {
	describe('convert()', () => {
		it('convert 𐡀𐡁𐡂𐡃𐡄𐡅𐡆 to ابجدهوز', () => {
			const converter = new ImperialAramaicToArabicConverter()
			const actual = converter.convert('𐡀𐡁𐡂𐡃𐡄𐡅𐡆')
			expect(actual).toEqual('ابجدهوز')
		})
		it('convert 𐡇𐡈𐡉𐡊𐡋𐡌𐡍 to حطيكلمن', () => {
			const converter = new ImperialAramaicToArabicConverter()
			const actual = converter.convert('𐡇𐡈𐡉𐡊𐡋𐡌𐡍')
			expect(actual).toEqual('حطيكلمن')
		})
		it('convert 𐡎𐡏𐡐𐡑𐡒𐡓𐡔𐡕 to سعفصقرشت', () => {
			const converter = new ImperialAramaicToArabicConverter()
			const actual = converter.convert('𐡎𐡏𐡐𐡑𐡒𐡓𐡔𐡕')
			expect(actual).toEqual('سعفصقرشت')
		})
	})
})

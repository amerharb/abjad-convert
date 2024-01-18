import { describe, expect, it } from '@jest/globals'
import { TifinaghToArabicConverter } from '../../src/scripts/tifinagh/toArabic'

describe('TifinaghToArabicConverter', () => {
	describe('convert()', () => {
		it('convert ⴰⴱⴲⴳⴴⴵⴶⴷⴸⴹⴺⴻ to ', () => {
			const converter = new TifinaghToArabicConverter()
			const actual = converter.convert('ⴰⴱⴲⴳⴴⴵⴶⴷⴸⴹⴺⴻ')
			expect(actual).toEqual('اببججججدذضظه')
		})
	})
})

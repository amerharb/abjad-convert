import { ArabicToIpaConverter } from '../../src/scripts/arabic/toIpa'
import { describe, expect, it } from '@jest/globals'

describe('ArabicToPhoenicianConverter', () => {
	describe('convert()', () => {
		const converter = new ArabicToIpaConverter()
		it('convert ا ب ج into aː b ʒ', () => {
			const actual = converter.convert('ا ب ج')
			expect(actual).toEqual('aː b ʒ')
		})
		it('convert ه و ز into h uː z', () => {
			const actual = converter.convert('ه و ز')
			expect(actual).toEqual('h uː z')
		})
		it('convert ح خ د into ħ x d', () => {
			const actual = converter.convert('ح خ د')
			expect(actual).toEqual('ħ x d')
		})
		describe('Shaddah example from wikipedia: https://en.wikipedia.org/wiki/Shaddah', () => {
			it('convert يَفْهَمُ into iːafhamu', () => {
				const actual = converter.convert('يَفْهَمُ')
				expect(actual).toEqual('iːafhamu')
			})
			it('convert فَهَّمَ into fahhama', () => {
				const actual = converter.convert('فَهَّمَ')
				expect(actual).toEqual('fahːama')
			})
			it('convert فَهِمَ into fahima', () => {
				const actual = converter.convert('فَهِمَ')
				expect(actual).toEqual('fahima')
			})
			it('convert فَهِّمْ into fahhim', () => {
				const actual = converter.convert('فَهِّمْ')
				expect(actual).toEqual('fahːim')
			})
		})
	})
})

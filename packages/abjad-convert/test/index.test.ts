import { Abjad, convert } from '../src'
import { describe, expect, it } from '@jest/globals'

describe('convert()', () => {
	describe('from Arabic', () => {
		describe('to ImperialAramaic', () => {
			it('convert ا ب ج into 𐡀 𐡁 𐡂', () => {
				const actual = convert('ا ب ج', Abjad.Arabic, Abjad.ImperialAramaic)
				expect(actual).toEqual('𐡀 𐡁 𐡂')
			})
		})
		describe('to Phoenician', () => {
			it('convert ا ب ج into 𐤀𐤟𐤁𐤟𐤂', () => {
				const actual = convert('ا ب ج', Abjad.Arabic, Abjad.Phoenician)
				expect(actual).toEqual('𐤀𐤟𐤁𐤟𐤂')
			})
		})
		describe('to Syriac', () => {
			it('convert ا ب ج into ܐ ܒ ܓ', () => {
				const actual = convert('ا ب ج', Abjad.Arabic, Abjad.Syriac)
				expect(actual).toEqual('ܐ ܒ ܓ')
			})
		})
		describe('to Ugaritic', () => {
			it('convert ا ب ج into 𐎀 𐎁 𐎂', () => {
				const actual = convert('ا ب ج', Abjad.Arabic, Abjad.Ugaritic)
				expect(actual).toEqual('𐎀 𐎁 𐎂')
			})
		})
	})
	describe('from ImperialAramaic', () => {
		describe('to Arabic', () => {
			it('convert 𐡀 𐡁 𐡂 into ا ب ج', () => {
				const actual = convert('𐡀 𐡁 𐡂', Abjad.ImperialAramaic, Abjad.Arabic)
				expect(actual).toEqual('ا ب ج')
			})
		})
		describe('to Phoenician', () => {
			it('convert 𐡀 𐡁 𐡂 into 𐤀𐤟𐤁𐤟𐤂', () => {
				const actual = convert('𐡀 𐡁 𐡂', Abjad.ImperialAramaic, Abjad.Phoenician)
				expect(actual).toEqual('𐤀𐤟𐤁𐤟𐤂')
			})
		})
		describe('to Syriac', () => {
			it.skip('convert 𐡀 𐡁 𐡂 into ܐ ܒ ܓ', () => {
				const actual = convert('𐡀 𐡁 𐡂', Abjad.ImperialAramaic, Abjad.Syriac)
				expect(actual).toEqual('ܐ ܒ ܓ')
			})
		})
		describe('to Ugaritic', () => {
			it('convert 𐡀 𐡁 𐡂 into 𐎀 𐎁 𐎂', () => {
				const actual = convert('𐡀 𐡁 𐡂', Abjad.ImperialAramaic, Abjad.Ugaritic)
				expect(actual).toEqual('𐎀 𐎁 𐎂')
			})
		})
	})
	describe('from Phoenician', () => {
		describe('to Arabic', () => {
			it('convert 𐤀𐤟𐤁𐤟𐤂 into ا ب ج', () => {
				const actual = convert('𐤀𐤟𐤁𐤟𐤂', Abjad.Phoenician, Abjad.Arabic)
				expect(actual).toEqual('ا ب ج')
			})
		})
		describe('to Ugaritic', () => {
			it('convert 𐤀𐤟𐤁𐤟𐤂 into 𐎀𐎁𐎂', () => {
				const actual = convert('𐤀𐤟𐤁𐤟𐤂', Abjad.Phoenician, Abjad.Ugaritic)
				expect(actual).toEqual('𐎀 𐎁 𐎂')
			})
		})
	})
	describe('from Ugaritic', () => {
		describe('to Arabic', () => {
			it('convert 𐎀 𐎁 𐎂 into ا ب ج', () => {
				const actual = convert('𐎀 𐎁 𐎂', Abjad.Ugaritic, Abjad.Arabic)
				expect(actual).toEqual('ا ب ج')
			})
			describe('to Phoenician', () => {
				it('convert 𐎀 𐎁 𐎂 into 𐤀𐤟𐤁𐤟𐤂', () => {
					const actual = convert('𐎀 𐎁 𐎂', Abjad.Ugaritic, Abjad.Phoenician)
					expect(actual).toEqual('𐤀𐤟𐤁𐤟𐤂')
				})
			})
		})
	})
})

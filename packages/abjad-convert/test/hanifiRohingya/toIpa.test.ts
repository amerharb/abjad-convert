import { HanifiRohingyaToIpaConverter } from '../../src/scripts/hanifiRohingya/toIpa'
import { describe, expect, it } from '@jest/globals'

describe('HanifiRohingyaToIpaConverter', () => {
	describe('convert()', () => {
		const converter = new HanifiRohingyaToIpaConverter()
		it('convert 𐴀 𐴁 𐴂 into ɔ b p', () => {
			const actual = converter.convert('𐴀 𐴁 𐴂')
			expect(actual).toEqual('ɔ b p')
		})
	})
})

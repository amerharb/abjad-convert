import { ArabicToPhoenicianConverter } from '../../src/arabic/toPhoenician'
import { describe, expect, it } from '@jest/globals'

describe('ArabicToPhoenicianConverter', () => {
	describe('convert()', () => {
		it('convert ا ب ج into 𐤀𐤟𐤁𐤟𐤂', () => {
			const converter = new ArabicToPhoenicianConverter()
			const actual = converter.convert('ا ب ج')
			expect(actual).toEqual('𐤀𐤟𐤁𐤟𐤂')
		})
	})
})

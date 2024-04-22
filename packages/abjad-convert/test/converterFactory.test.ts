import { Abjad } from '../src'
import { getConverter } from '../src/converterFactory'
import { describe, expect, it } from '@jest/globals'

describe('converterFactory', () => {
	describe('getConverter', () => {
		/**
		 * Currently, the converterFactory able to produce converters for all scripts, but exception can be made
		 * for scripts that are not possible to convert to each other.
		 */
		it('produce converters for all scripts', () => {
			const abjadScripts = Object.values(Abjad)
			const scriptsCount = abjadScripts.length
			let count = 0
			for (const from of abjadScripts) {
				for (const to of abjadScripts) {
					if (from === to) continue // skip when from and to are the same script
					const converter = getConverter(from, to)
					expect(converter).toBeDefined()
					count++
				}
			}
			const expectedCount = scriptsCount * (scriptsCount - 1)
			expect(count).toEqual(expectedCount)
		})
	})
})

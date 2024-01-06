import { Abjad } from './types'

export interface IConverter {
	readonly from: Abjad
	readonly to: Abjad
	convert(text: string): string
}

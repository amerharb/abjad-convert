import { Abjad } from './types'

export interface IConvert {
	readonly from: Abjad
	readonly to: Abjad
	convert(text: string): string
}

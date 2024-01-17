import { Abjad } from '../types'

export class Script {
	constructor(
		public readonly abjad: Abjad,
		public readonly rtl: boolean,
		public readonly letters: string[],
		public readonly L: Record<string, string>
	) {}
}

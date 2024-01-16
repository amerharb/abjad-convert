import { Script } from '../Script'
import { Ug, letters } from './letters'

export class Ugaritic extends Script {
	public readonly name = 'ugaritic'
	public readonly rtl = false
	public readonly letters = letters
	public readonly L = Ug
}

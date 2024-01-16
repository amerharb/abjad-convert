import { Script } from '../Script'
import { Ar, letters } from './letters'

export class Arabic extends Script {
	public readonly name = 'arabic'
	public readonly rtl = true
	public readonly letters = letters
	public readonly L = Ar
}

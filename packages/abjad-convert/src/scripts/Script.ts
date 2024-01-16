export abstract class Script {
	public abstract readonly name: string
	public abstract readonly rtl: boolean
	public abstract readonly letters: string[]
	public abstract readonly L: Record<string, string>
}

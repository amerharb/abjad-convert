import { letters as ar} from "./letters"
import { letters as ug} from "../ugaritic/letters"

const map = new Map<string, string>(
	[
		[ar[0], ''],
		[ar[1], ug[0]],
		[ar[2], ug[0]],
		[ar[3], ''],
		[ar[4], ug[0]],
		[ar[5], ug[0]],
		[ar[6], ug[1]],
		//...
		[ar[10], ug[2]],
		//...
		[ar[13], ug[3]],
		//...
	]
);

export function convertArabicToUgaritic(arabic: string): string {
	let ugaritic = '';
	for (const letter of arabic) {
		const u = map.get(letter) ?? ''
		ugaritic += u
	}
	return ugaritic
}

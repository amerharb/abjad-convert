import { letters as ug} from "./letters"
import { letters as ar} from "../arabic/letters"

const map = new Map<string, string>(
	[
		[ug[0], ar[5]],
		[ug[1], ar[6]],
		[ug[2], ar[10]],
		[ug[3], ar[13]],
		//...
	]
);

export function convertUgariticToArabic(ugaritic: string): string {
	let arabic = '';
	for (const letter of ugaritic) {
		arabic += map.get(letter) ?? '';
	}
	return arabic;
}

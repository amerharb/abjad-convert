import { Ug } from "./letters"
import { Ar } from "../arabic/letters"

const map = new Map<string, string>(
	[
		[Ug.Alpa, Ar.Alef],
		[Ug.Beta, Ar.Ba],
		[Ug.Gamla, Ar.Jeem],
		[Ug.Kha, Ar.Khaa],
		[Ug.Delta, Ar.Dal],
		[Ug.Ho, Ar.Ha],
		[Ug.Wo, Ar.Waw],
		[Ug.Zeta, Ar.Zay],

		[Ug.Hota, Ar.H7aa],
		[Ug.Tet, Ar.TTa],
		[Ug.Yod, Ar.Yaa],
		[Ug.Kaf, Ar.Kaf],
		[Ug.Shin, Ar.Sheen],
		[Ug.Lamda, Ar.Lam],
		[Ug.Mem, Ar.Meem],
		[Ug.Dhal, Ar.Dad],

		[Ug.Nun, Ar.Noon],
		[Ug.Zu, Ar.Zay],
		[Ug.Samka, Ar.Seen],
		[Ug.Ain, Ar.Ayn],
		[Ug.Pu, Ar.Fa],
		[Ug.Sade, Ar.Sad],
		[Ug.Qopa, Ar.Qaf],
		[Ug.Rasha, Ar.Ra],

		[Ug.Thanna, Ar.THa],
		[Ug.Ghain, Ar.Ghayn],
		[Ug.To, Ar.Ta],
		[Ug.I, Ar.AlefMaksura],
		[Ug.U, Ar.Waw],
		[Ug.Ssu, Ar.Sad],
	]
);

export function convert(ugaritic: string): string {
	let arabic = '';
	for (const letter of ugaritic) {
		arabic += map.get(letter) ?? '';
	}
	return arabic;
}

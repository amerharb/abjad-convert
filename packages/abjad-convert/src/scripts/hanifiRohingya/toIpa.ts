import { HR } from './letters'
import { IPA } from '../ipa/letters'
import { DirectConverter } from '../../DirectConverter'
import { Abjad } from '../../types'

export class HanifiRohingyaToIpaConverter extends DirectConverter {
	public readonly from = Abjad.HanifiRohingya
	public readonly to = Abjad.IPA

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[HR.A, IPA.ɔ], // 𐴀 -> ɔ
			[HR.Ba, IPA.b], //  𐴁 -> b
			[HR.Pa, IPA.p], //  𐴂 -> p
			[HR.Ta, IPA.t], //  𐴃 -> t
			[HR.Tta, IPA.ʈ], //  𐴄 -> ʈ
			[HR.Ja, IPA.ɟ], //  𐴅 -> ɟ
			[HR.Ca, IPA.c], //  𐴆 -> c
			[HR.Ha, IPA.h], //  𐴇 -> h
			[HR.Kha, IPA.x], //  𐴈 -> x
			[HR.Fa, IPA.f], //  𐴉 -> f
			[HR.Da, IPA.d], //  𐴊 -> d
			[HR.Dda, IPA.ɖ], //  𐴋 -> ɖ
			[HR.Ra, IPA.ɾ], //  𐴌 -> ɾ
			[HR.Rra, IPA.ɽ], //  𐴍 -> ɽ
			[HR.Za, IPA.z], //  𐴎 -> z
			[HR.Sa, IPA.s], // 𐴏 -> s
			[HR.Sha, IPA.ʃ], // 𐴐 -> ʃ
			[HR.Ka, IPA.k], // 𐴑 -> k
			[HR.Ga, IPA.g], // 𐴒 -> g
			[HR.La, IPA.l], // 𐴓 -> l
			[HR.Ma, IPA.m], // 𐴔 -> m
			[HR.Na, IPA.n], // 𐴕 -> n
			[HR.Wa, IPA.ʋ], // 𐴖 -> ʋ
			[HR.KinnaWa, IPA.u], // 𐴗 -> u
			[HR.Ya, IPA.j], // 𐴘 -> j
			[HR.KinnaYa, IPA.i], // 𐴙 -> i
			[HR.Nga, IPA.ŋ], // 𐴚 -> ŋ
			[HR.Nya, IPA.ɲ], // 𐴛 -> ɲ
			[HR.Va, IPA.v], // 𐴜 -> ڤ v

			[HR.VowelA, IPA.a], // 𐴝 ->
			[HR.VowelI, IPA.i], // 𐴞 ->
			[HR.VowelU, IPA.u], // 𐴟 ->
			[HR.VowelE, IPA.e], // 𐴠 ->
			[HR.VowelO, IPA.o], // 𐴡 ->
			[HR.MarkSakin, ''], // 𐴢 -> silent
			[HR.MarkNaKhonna, ''],
			[HR.SignHarbahay, ''],
			[HR.SignTahala, ''],
			[HR.SignTana, ''],
			[HR.SignTassi, ''], // 𐴧 -> ّ

			[HR.DigitZero, '0'], // 𐴰 -> 0
			[HR.DigitOne, '1'], // 𐴱 -> 1
			[HR.DigitTwo, '2'], // 𐴲 -> 2
			[HR.DigitThree, '3'], // 𐴳 -> 3
			[HR.DigitFour, '4'], // 𐴴 -> 4
			[HR.DigitFive, '5'], // 𐴵 -> 5
			[HR.DigitSix, '6'], // 𐴶 -> 6
			[HR.DigitSeven, '7'], // 𐴷 -> 7
			[HR.DigitEight, '8'], // 𐴸 -> 8
			[HR.DigitNine, '9'], // 𐴹 -> 9
		],
	)

	public convert(text: string): string {
		let result = ''
		for (const letter of text) {
			result += this.map.get(letter) ?? ''
		}
		return result
	}
}

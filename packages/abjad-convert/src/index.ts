import { getConverter } from './ConverterFactory';
import { Abjad } from './types';

export function convert(source: string, from: Abjad, to: Abjad): string {
	const converter = getConverter(from, to);
	return converter.convert(source);
}

export { Abjad } from './types';

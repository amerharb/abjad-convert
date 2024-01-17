import { FC } from 'react'

type Props = {
	letters: readonly string[];
	onClick: (letter: string) => void;
};

const OnScreenKeyboard: FC<Props> = ({ letters, onClick }) => {
	return <div>
		{letters.map((letter) => <button onClick={() => onClick(letter)}>{letter}</button>)}
	</div>
}

export default OnScreenKeyboard

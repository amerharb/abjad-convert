import { FC } from 'react'

type Props = {
	letters: readonly string[];
	onClickLetter: (letter: string) => void;
	onClearAll: () => void;
};

const OnScreenKeyboard: FC<Props> = ({ letters, onClickLetter, onClearAll }) => {
	return <div>
		{letters.map((letter, index) =>
			<button key={`btn_letter${index}`} onClick={() => onClickLetter(letter)}>{letter}</button>)
		}
		<button key={`btn_space`} style={{ marginLeft: '10px' }} onClick={() => onClickLetter(' ')}>␣</button>
		<button key={`btn_clearAll`} style={{ marginLeft: '2px' }} onClick={onClearAll}>❌</button>
	</div>
}

export default OnScreenKeyboard

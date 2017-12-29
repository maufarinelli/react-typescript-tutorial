import React from 'react';
import './Hello.css';

interface HelloProps {
	name: string;
	enthusiasmLevel?: number;
}

const Hello = ({name, enthusiasmLevel = 1}: HelloProps) => {
	if(enthusiasmLevel <= 0) {
		window.alert('You could be a little more enthusiastic. :D');
	}

	return (
		<div className="hello">
			<div className="greetings">
				<h1>Hello {name + getExclamationMarks(enthusiasmLevel)}</h1>
			</div>
		</div>
	);
}
export default Hello;

function getExclamationMarks(numChars: number) {
	return Array(numChars + 1).join('!');
}



// AS A CLASS
// class Hello extends React.Component<Props, object> {
// 	render() {
// 		const { name, enthusiasmLevel = 1 } = this.props;
//
// 		if (enthusiasmLevel <= 0) {
// 			throw new Error('You could be a little more enthusiastic. :D');
// 		}
//
// 		return (
// 			<div className="hello">
// 				<div className="greeting">
// 					Hello {name + getExclamationMarks(enthusiasmLevel)}
// 				</div>
// 			</div>
// 		);
// 	}
// }
import React from 'react';
import TextInput, {TextInputProps} from '../text-input/TextInput';
import SelectBox, {SelectBoxProps} from '../select-box/SelectBox';

interface HelloFormProps {
	name: string;
	enthusiasmLevel: number,
	onChangeInputText: (event: React.FormEvent<HTMLInputElement>) => void,
	onChangeSelect: (event: React.FormEvent<HTMLSelectElement>) => void
}

const HelloForm = ({name, enthusiasmLevel, onChangeInputText, onChangeSelect}: HelloFormProps) => {
	let propsTextInput: TextInputProps = {
		label: 'Name :',
		name: 'name',
		value: name,
		onChange: onChangeInputText
	};

	let propsSelectBox: SelectBoxProps = {
		label: 'Enthusiasm :',
		name: 'select',
		value: enthusiasmLevel,
		onChange: onChangeSelect
	};

	return (
		<form className="form-horizontal">
			<TextInput {...propsTextInput} />
			<SelectBox {...propsSelectBox} />
		</form>
	);
};
export default HelloForm;
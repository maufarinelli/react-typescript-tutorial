import React from 'react';

const TextInput = ({name, label, onChange, value}: TextInputProps) => {
	return (
		<div className="form-group">
			<label className="col-sm-2 control-label" htmlFor={name}>{label}</label>
			<div className="field col-sm-10">
				<input
					type="text"
					name={name}
					value={value}
					className="form-control"
					onChange={onChange} />
			</div>
		</div>
	);
};
export default TextInput;

export interface TextInputProps {
	label: string;
	name: string;
	value: string;
	onChange: (event: React.FormEvent<HTMLInputElement>) => void;
};
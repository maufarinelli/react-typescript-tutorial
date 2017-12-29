import React from 'react';

const SelectBox = ({name, label, value, onChange}: SelectBoxProps) => {
	const enthusiasmList = [0, 1, 2, 3, 4, 5];

	return (
		<div>
			<label className="col-sm-2 control-label" htmlFor={name}>{label}</label>
			<div className="col-sm-10 ">
				<select
					name={name}
					value={value}
					className="form-control"
					onChange={onChange} >
					<option value="">Select your enthusiasm level</option>
					{enthusiasmList.map((enthusiasm) => {
						return <option key={enthusiasm} value={enthusiasm} >{enthusiasm}</option>
					})}
				</select>
			</div>
		</div>
	);
};
export default SelectBox;

export interface SelectBoxProps {
	label: string;
	name: string;
	value: number;
	onChange: (event: React.FormEvent<HTMLSelectElement>) => void;
};

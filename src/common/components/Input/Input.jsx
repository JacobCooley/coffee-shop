import React from 'react';
import './Input.scss'

const InputComponent = ({ label, type, name, onChange, defaultValue, value }) => (
	<>
		<label id={name}>
			{label} :
			<input value={value} defaultValue={defaultValue} onChange={onChange} type='text' name={name} />
		</label>
	</>
)

export default InputComponent;
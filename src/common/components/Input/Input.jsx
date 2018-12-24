import React from 'react';
import './Input.scss'

const InputComponent = ({ label, type, name, onChange, defaultValue, value }) => (
	<div className='input'>
		<label id={name}>
			{label} :
			<input value={value} defaultValue={defaultValue} onChange={onChange} type='text' name={name} />
		</label>
	</div>
)

export default InputComponent;
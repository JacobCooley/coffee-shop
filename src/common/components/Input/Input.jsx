import React from 'react';
import './Input.scss'

const InputComponent = ({ label, desc, type, name, onChange, defaultValue, value, required = false, error }) => (
	<div className='input'>
		<label id={name}>
			<span>{label}{required ? '*' : ''} :</span>
			{error ? <span>{error}</span> : <></>}
			{desc ? <p>{desc}</p> : <></>}
			<input required={required} value={value} defaultValue={defaultValue} onChange={onChange} type='text' name={name} />
		</label>
	</div>
)

export default InputComponent;
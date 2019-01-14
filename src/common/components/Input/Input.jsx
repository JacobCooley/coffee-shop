import React from 'react';
import './Input.scss'

const InputComponent = ({ label, desc, name, onChange, defaultValue, value, error, autoComplete = 'off', required = false, type = 'text' }) => (
	<div className='input'>
		<label id={name}>
			<span>{label}{required ? '*' : ''} :</span>
			{error ? <span>{error}</span> : <></>}
			{desc ? <p>{desc}</p> : <></>}
			<input autoComplete={autoComplete} required={required} value={value} defaultValue={defaultValue} onChange={onChange} type={type} name={name} />
		</label>
	</div>
)

export default InputComponent;
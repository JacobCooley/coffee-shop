import React from 'react';
import './Input.scss'

const InputComponent = ({ label, desc, type, name, onChange, defaultValue, value }) => (
	<div className='input'>
		<label id={name}>
			<div>{label} :</div>
			{desc ? <p>{desc}</p> : <></>}
			<input value={value} defaultValue={defaultValue} onChange={onChange} type='text' name={name} />
		</label>
	</div>
)

export default InputComponent;
import React from 'react'
import './Input.scss'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

const InputComponent = ({ label, desc, name, onChange, defaultValue, value, error, autoComplete = 'off', required = false, type = 'text' }) => (
	<div className='input'>
		<label id={name}>
			<span>{label}{required ? '*' : ''} :</span>
			{error ? <span>{error}</span> : <></>}
			{desc ? <p>{desc}</p> : <></>}
			{type !== 'time' ?
				<input autoComplete={autoComplete} required={required} value={value} defaultValue={defaultValue}
					   onChange={onChange} type={type} name={name} />
				: <DayPickerInput name={name} onChange={onChange}/>}
		</label>
	</div>
)

export default InputComponent
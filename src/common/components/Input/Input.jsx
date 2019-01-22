import React from 'react'
import './Input.scss'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

const InputComponent = ({
							label, refs, desc, className, name, onChange, defaultValue, value, error, formatDate, parseDate,
							onDayChange, dayPickerProps, autoComplete = 'off', required = false, type = 'text'
						}) => {
	return (
		<div className={`input`}>
			<label id={name}>
				<span>{label}{required ? '*' : ''} :</span>
				{error ? <span>{error}</span> : <></>}
				{desc ? <p>{desc}</p> : <></>}
				{type !== 'time' ?
					<input ref={refs} autoComplete={autoComplete} required={required} value={value}
						   defaultValue={defaultValue}
						   onChange={onChange} type={type} name={name} />
					: <div className={`${className}`}>
						<DayPickerInput onDayChange={onDayChange} formatDate={formatDate}
										parseDate={parseDate} ref={refs}
										name={name} dayPickerProps={dayPickerProps} />
					</div>
				}
			</label>
		</div>
	)
}

export default InputComponent
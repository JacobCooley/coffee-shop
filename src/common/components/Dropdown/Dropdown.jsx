import React from 'react';
import ReactDropdown from 'react-dropdown'
import './Dropdown.scss'

const Dropdown = ({className, style, options, onChange, value, placeholder}) => (
	<div className='dropdown'>
		<label style={style}>Decimals:
			<ReactDropdown controlClassName={'controlClass'} options={options} onChange={onChange}
					  value={value} placeholder={placeholder} />
		</label>
	</div>
)

export default Dropdown;
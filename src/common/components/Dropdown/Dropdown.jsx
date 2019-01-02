import React from 'react';
import ReactDropdown from 'react-dropdown'
import './Dropdown.scss'

const Dropdown = ({className, desc, style, options, onChange, value, placeholder}) => (
	<div className='dropdown'>
		<label style={style}>Decimals:
			<p>{desc}</p>
			<ReactDropdown controlClassName={'controlClass'} options={options} onChange={onChange}
					  value={value} placeholder={placeholder} />
		</label>
	</div>
)

export default Dropdown;
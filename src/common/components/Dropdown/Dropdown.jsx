import React from 'react';
import './Dropdown.scss'

const Dropdown = ({className, style, options, onChange, value, placeholder}) => (
	<>
		<label style={style}>Decimals:
			<Dropdown controlClassName={className} options={options} onChange={onChange}
					  value={value} placeholder="Select an option" />
		</label>
	</>
)

export default Dropdown;
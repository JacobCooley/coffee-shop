import React from 'react';
import './Buttons.scss'

const Button = ({ text, onClick }) => (
	<>
		<button onClick={onClick}>{text}</button>
	</>
)

export default Button;
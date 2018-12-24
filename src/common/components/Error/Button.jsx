import React from 'react';
import './Error.scss'

const Error = ({ text, onClick }) => (
	<>
		<button onClick={onClick}>{text}</button>
	</>
)

export default Error;
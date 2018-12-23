import React from 'react'
import './Card.scss'

const Card = ({ title, description, image, onClick }) => (
	<>
		<div className='outer-card' onClick={onClick}>
			<div>{title}</div>
			<img src={`src/${image}`} />
			<p>{description}</p>
		</div>
	</>
)

export default Card
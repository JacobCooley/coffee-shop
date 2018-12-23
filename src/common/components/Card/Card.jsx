import React from 'react'
import './Card.scss'

const Card = ({ title, description, image, price, onClick }) => (
	<>
		<div className='outer-card' onClick={onClick}>
			<div>
				<h4>{title}</h4>
				<h4>{price} ETH</h4>
			</div>
			<img src={`src/${image}`} />
			<p>{description}</p>
		</div>
	</>
)

export default Card
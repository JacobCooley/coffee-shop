import React from 'react'
import './Card.scss'

const Card = ({ title, description, image, price, onClick, disabled }) => (
	<>
		<div className={`outer-card ${disabled ? 'disabled' : ''}`} onClick={!disabled ? onClick : null}>
			<div>
				<h4>{title}</h4>
				<h4>{price}</h4>
			</div>
			<img src={`${image}`} />
			<p>{description}</p>
			{disabled ? <div className='warning'>NOT AVAILABLE</div> : null}
		</div>
	</>
)

export default Card
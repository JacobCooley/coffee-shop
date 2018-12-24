import React from 'react'
import './RadioBox.scss'

const RadioBox = ({ items, onChange, name }) => (
	<ul className='radio' >
		{
			items.map((item, index) => {
				return (
					<li key={item.symbol} onChange={(e) => onChange(e,item)}>
						<input type="radio" name={name}
							   id={item.symbol}
							   defaultChecked={index === 0}
						/>
						<label htmlFor={item.symbol}> <img src={`src/${item.image}`} />
							{item.symbol}</label>
					</li>
				)
			})
		}
	</ul>
)

export default RadioBox
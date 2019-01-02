import React from 'react'
import 'react-dropdown/style.css'
import '../Contracts.scss'

const ContractsHeader = ({ imgSrc, contractType, description }) => {
	return (
		<div className='contract-header'>
			<img src={imgSrc} />
			<h2>{contractType}</h2>
			{/*<p>{description}</p>*/}
		</div>
	)
}

export default ContractsHeader
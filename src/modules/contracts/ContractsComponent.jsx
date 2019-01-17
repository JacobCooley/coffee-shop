import React from 'react'
import './Contracts.scss'

const ContractCard = (contract) => {
	return (
		<li>
			{contract}
		</li>
	)
}

const ContractsComponent = ({ contracts }) => (
	<div className='contracts'>
		<ul>
			{
				contracts.map(contract => {
					ContractCard(contract)
				})
			}
		</ul>
	</div>
)

export default ContractsComponent
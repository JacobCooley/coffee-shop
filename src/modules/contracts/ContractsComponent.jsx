import React from 'react'
import './Contracts.scss'
import requireAuthenticated from '@common/hocs/requireAuthenticated'

const ContractCard = (contract) => {
	return (
		<li>
			{contract}
		</li>
	)
}

const ContractsComponent = ({ contracts }) => (
		<div className='contracts'>
			<h2>Created Contracts</h2>
			<ul>
				{
					contracts && contracts.length > 0 ? contracts.map(contract => {
						ContractCard(contract)
					}) : <div>No contracts created</div>
				}
			</ul>
		</div>
	)

export default requireAuthenticated(ContractsComponent)
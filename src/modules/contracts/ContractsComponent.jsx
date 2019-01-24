import React from 'react'
import './Contracts.scss'
import ContractCard from './components/ContractCard'
import requireAuthenticated from '@common/hocs/requireAuthenticated'



const ContractsComponent = ({ contracts }) => (
		<div className='contracts'>
			<h2>Created Contracts</h2>
			<div>
				{
					contracts ? contracts.map(contract => {
						return ContractCard(contract)
					}) : <div>No contracts created</div>
				}
			</div>
		</div>
	)

export default requireAuthenticated(ContractsComponent)
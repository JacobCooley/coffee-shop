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
		<ul>
			{
				contracts ? contracts.map(contract => {
					ContractCard(contract)
				}) : <></>
			}
		</ul>
	</div>
)

export default requireAuthenticated(ContractsComponent)
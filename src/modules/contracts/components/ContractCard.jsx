import React from 'react'

const ContractCard = (contract) => {
	return (
		<div className='contract-card'>
			<div>Contract Address</div>
			<div>{contract.contractAddress}</div>
			<div>Owner Address</div>
			<div>{contract.ownerAddress}</div>
		</div>
	)
}

export default ContractCard
import React from 'react'
import './Deploy.scss'
import Payment from './components/Payment'
import Erc20 from '@modules/deploy/components/Contracts/Erc20'

const Deploy = ({ create }) => {
	return (
		<div className='deploy'>
			{create.paymentInfo || create.tokenInfo.contract ?
				<Payment />
				:
				<Erc20 />}
		</div>
	)
}

export default Deploy
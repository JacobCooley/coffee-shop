import React from 'react'
import './Deploy.scss'
import Payment from './components/Payment'
import Erc20 from '@modules/deploy/components/Contracts/Erc20'

const Deploy = ({ deploy }) => {
	return (
		<div className='deploy'>
			{
				deploy.paymentInfo || deploy.tokenInfo.contract ?
					<Payment />
					:
					<Erc20 />
			}
		</div>
	)
}

export default Deploy
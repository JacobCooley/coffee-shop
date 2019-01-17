import React from 'react'
import './Deploy.scss'
import Payment from './components/Payment'
import Erc20 from '@modules/deploy/components/Contracts/Erc20'

const Deploy = ({ deploy }) => {
	return (
		<>
			{
				deploy.paymentInfo || deploy.tokenInfo.contract ?
					<div className='deploy-payment'>
						<Payment />
					</div>
					:
					<div className='deploy-contract'>
						<Erc20 />
					</div>
			}
		</>
	)
}

export default Deploy
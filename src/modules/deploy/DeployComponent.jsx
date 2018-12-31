import React from 'react'
import './Deploy.scss'
import Contract from './components/Payment'
import PreviewPayment from './components/Payment/components/PaymentPreview/PaymentPreview'
import CreateForm from '@modules/deploy/components/Contracts/Erc20'

const Deploy = ({ create }) => {
	return (
		<div className='deploy'>
			<PreviewPayment create={create} />
			{create.paymentInfo || create.tokenInfo.contract ?
				<Contract />
				:
				<CreateForm />}
		</div>
	)
}

export default Deploy
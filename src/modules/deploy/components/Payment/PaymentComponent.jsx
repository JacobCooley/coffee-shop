import React from 'react'
import PaymentCompleted from './components/PaymentCompleted'
import Loader from '@components/Loader'
import 'react-dropdown/style.css'
import './Payment.scss'
import PaymentInfo from './components/PaymentInfo'
import Status from './components/PaymentStatus'
import PaymentPreview from './components/PaymentPreview'


const PaymentComponent = ({ deploy, dispatch, web3, timerStart, timerStop }) => {
	const loading = deploy.loading
	const paymentInfo = deploy.paymentInfo
	const contractAddress = deploy.tokenInfo.contract
	const symbol = deploy.tokenInfo.symbol
	const decimal = deploy.tokenInfo.decimal
	
	return (
		<>
			{loading ? <Loader /> : null}
			<PaymentPreview {...paymentInfo} web3={web3} />
			<>
				{contractAddress ?
					<PaymentCompleted contract={contractAddress} symbol={symbol} decimal={decimal} />
					: <PaymentInfo {...paymentInfo} dispatch={dispatch} web3={web3} timerStart={timerStart}
								   timerStop={timerStop} status={deploy.status}
								   tick={deploy.tick} />}
			</>
			<Status status={deploy.status} />
		</>
	)
}

export default PaymentComponent
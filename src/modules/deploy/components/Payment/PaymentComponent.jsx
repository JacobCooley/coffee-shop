import React from 'react'
import PaymentCompleted from './components/PaymentCompleted'
import Loader from '@components/Loader'
import 'react-dropdown/style.css'
import './Payment.scss'
import PaymentForm from './components/PaymentInfo'
import Status from './components/PaymentStatus'


const PaymentComponent = ({ onChange, create, dispatch, web3, timerStart, timerStop }) => {
	const loading = create.loading
	const paymentInfo = create.paymentInfo
	const contractAddress = create.tokenInfo.contract
	const symbol = create.tokenInfo.symbol
	const decimal = create.tokenInfo.decimal
	
	return (
		<>
			{loading ? <Loader /> : null}
			<div className='form-window'>
				{contractAddress ?
					<PaymentCompleted contract={contractAddress} symbol={symbol} decimal={decimal} />
					: <PaymentForm {...paymentInfo} dispatch={dispatch} web3={web3} timerStart={timerStart}
									 timerStop={timerStop}
									 tick={create.tick} /> }
			</div>
			<div>
				<Status/>
			</div>
		</>
	)
}

export default PaymentComponent
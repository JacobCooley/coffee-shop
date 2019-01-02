import React from 'react'
import PaymentCompleted from './components/PaymentCompleted'
import Loader from '@components/Loader'
import 'react-dropdown/style.css'
import './Payment.scss'
import PaymentInfo from './components/PaymentInfo/PaymentInfo'
import Status from './components/PaymentStatus'


const PaymentComponent = ({ create, dispatch, web3, timerStart, timerStop }) => {
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
					: <PaymentInfo {...paymentInfo} dispatch={dispatch} web3={web3} timerStart={timerStart}
									 timerStop={timerStop} status={create.status}
									 tick={create.tick} /> }
			</div>
			<div>
			</div>
		</>
	)
}

export default PaymentComponent
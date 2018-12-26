import React from 'react'
import CreateForm from './components/CreateForm'
import Loader from '@components/Loader'
import 'react-dropdown/style.css'
import './ContractComponent.scss'
import { operations } from '../../duck'
import PaymentForm from './components/PaymentForm'


const ContractComponent = ({ onChange, create, dispatch, web3, timerStart, timerStop }) => {
	const loading = create.loading
	const paymentInfo = create.paymentInfo
	
	return (
		<>
			{loading ? <Loader /> : null}
			<div className='contract-form'>
				{paymentInfo ? <PaymentForm {...paymentInfo} dispatch={dispatch} web3={web3} timerStart={timerStart}
											timerStop={timerStop}
											tick={create.tick} /> :
					<CreateForm onChange={onChange} create={create} dispatch={dispatch} />}
			</div>
		</>
	)
}

export default ContractComponent
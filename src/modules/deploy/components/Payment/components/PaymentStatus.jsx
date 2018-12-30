import React from 'react'
import '../Payment.scss'

const PaymentStatus = () => {
	
	return (
		<div className='status form-window'>
			<h3>Status</h3>
			<div>
				<div className='loading'>Waiting for payment</div>
				<div>Preparing Contract</div>
				<div>Creating Contract</div>
				<div>Deploying Contract</div>
				<div>Contract Created!</div>
			</div>
		</div>
	)
}

PaymentStatus.propTypes = {}

PaymentStatus.defaultProps = {}

export default PaymentStatus
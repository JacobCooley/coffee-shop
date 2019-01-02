import React from 'react'
import './PaymentPreview.scss'

const PaymentPreview = () => {
	return (
		<div className='preview'>
			<div className='line'/>
			<h3>Contract Type</h3>
			<p>You are creating a standard ERC20 token on the Ethereum Blockchain!  Please fill out the form and make payment to the correct address</p>
		</div>
	)
}

PaymentPreview.propTypes = {}

PaymentPreview.defaultProps = {}

export default PaymentPreview
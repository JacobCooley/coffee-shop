import React from 'react'
import './PaymentPreview.scss'

const PaymentPreview = ({ create }) => {
	const tokenInfo = create.tokenInfo
	
	return (
		<div className='preview'>
			<h3>Contract Type</h3>
			<p>You are creating a standard ERC20 token on the Ethereum Blockchain!  Please fill out the form and make payment to the correct address</p>
		</div>
	)
}

PaymentPreview.propTypes = {}

PaymentPreview.defaultProps = {}

export default PaymentPreview
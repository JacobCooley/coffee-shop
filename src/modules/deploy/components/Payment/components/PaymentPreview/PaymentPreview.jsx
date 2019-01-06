import React from 'react'
import './PaymentPreview.scss'

const PaymentPreview = ({ timeoutInSeconds, priceInWei, depositAddress, web3 }) => {
	return (
		<div className='preview form-window'>
			<h3>ERC-20</h3>
			{priceInWei ?
				<p>{`You must pay ${web3.utils.fromWei(priceInWei)} ETH to create this contract.  Please double check the amount and address before you send.  If you send less than the required amount, you can send the remainder in another transaction to continue creating your contract.`}</p>
				:
				<p>Congratulations!  You created your contract.  Please add your token to Metamask or Save the contract address</p>
			}
		</div>
	)
}

PaymentPreview.propTypes = {}

PaymentPreview.defaultProps = {}

export default PaymentPreview
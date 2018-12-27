import React from 'react'
import '../ContractComponent.scss'
import Button from '@components/Button'

const PaymentCompleted = ({ contract, symbol, decimal }) => {
	const addToMetaMask = () => {
		const provider = window.web3.currentProvider
		provider.sendAsync({
			method: 'metamask_watchAsset',
			params: {
				"type": "ERC20",
				"options": {
					"address": contract,
					"symbol": symbol,
					"decimals": decimal
				},
			},
			id: Math.round(Math.random() * 100000),
		})
	}
	
	return (
		<div className=''>
			<h3>Contract Address</h3>
			<div>{contract}</div>
			{web3.currentProvider.isMetaMask === true ?
				<Button onClick={addToMetaMask} text='Add to MetaMask' /> : null}
		</div>
	)
}

PaymentCompleted.propTypes = {}

PaymentCompleted.defaultProps = {}

export default PaymentCompleted
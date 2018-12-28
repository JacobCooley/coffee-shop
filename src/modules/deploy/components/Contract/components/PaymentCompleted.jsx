import React from 'react'
import '../ContractComponent.scss'
import Button from '@components/Button'
import web3 from '@common/utils/web3'

const PaymentCompleted = ({ contract, symbol, decimal }) => {
	const addToMetaMask = () => {
		const provider = web3.currentProvider
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
	
	const etherScanUrl = web3.currentProvider.networkVersion === 3 ? `http://ropsten.etherscan.io/${contract}` : `http://etherscan.io/${contract}`
	
	return (
		<div className='payment-complete'>
			<h3>Contract Address</h3>
			<div>{contract}</div>
			<Button onClick={() => window.open(
				`${etherScanUrl}`,
				'_blank'
			)} text='View on Etherscan' />
			{web3.currentProvider.isMetaMask ?
				<Button onClick={addToMetaMask} text='Add to MetaMask' /> : null}
		</div>
	)
}

PaymentCompleted.propTypes = {}

PaymentCompleted.defaultProps = {}

export default PaymentCompleted
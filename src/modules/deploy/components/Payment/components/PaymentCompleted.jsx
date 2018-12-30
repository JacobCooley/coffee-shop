import React from 'react'
import '../Payment.scss'
import Button from '@components/Button'
import { web3, getNetwork } from '@common/utils/web3'

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
	const etherScanUrl = getNetwork() === '3' ? `http://ropsten.etherscan.io/address/${contract}` : `http://etherscan.io/address/${contract}`
	
	return (
		<div className='payment-complete'>
			<div>
				<h3>Contract Address</h3>
				<div>{contract}</div>
			</div>
			<div>
				<Button onClick={() => window.open(
					`${etherScanUrl}`,
					'_blank'
				)} text='View on Etherscan' />
				<Button disabled={!web3.currentProvider.isMetaMask} onClick={addToMetaMask} text='Add to MetaMask' />
			</div>
		</div>
	)
}

PaymentCompleted.propTypes = {}

PaymentCompleted.defaultProps = {}

export default PaymentCompleted
import React from 'react'
import '../Payment.scss'
import Button from '@components/Button'
import { getNetwork } from '@common/utils/web3'

class PaymentCompleted extends React.Component {
	componentDidMount() {
		this.props.getContracts()
	}
	
	addToMetaMask() {
		const provider = this.props.web3.currentProvider
		provider.sendAsync({
			method: 'metamask_watchAsset',
			params: {
				"type": "ERC20",
				"options": {
					"address": this.props.contract,
					"symbol": this.props.symbol,
					"decimals": this.props.decimal
				},
			},
			id: Math.round(Math.random() * 1000),
		})
	}
	
	render() {
		const baseUrl = getNetwork() === '3' ? `http://ropsten.etherscan.io/address/` : `http://etherscan.io/address/`
		const etherScanUrl = baseUrl + this.props.contract
		return (
			<div className='payment-complete'>
				<div>
					<h2>Contract Address</h2>
					<div>{this.props.contract}</div>
				</div>
				<div className='complete-buttons'>
					<Button onClick={() => window.open(
						`${etherScanUrl}`,
						'_blank'
					)} text='View on Etherscan' />
					<Button disabled={!this.props.web3.currentProvider.isMetaMask} onClick={() => this.addToMetaMask}
							text='Add to MetaMask' />
				</div>
			</div>
		)
	}
}

export default PaymentCompleted
import React from 'react'
import 'react-dropdown/style.css'
import '../ContractComponent.scss'
import Button from '@components/Button'
import { operations } from '@modules/deploy/duck'
import { withRouter } from 'react-router'
import { FaRegCopy } from 'react-icons/fa'
import QRCode from 'qrcode.react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { web3 } from '@common/utils/web3'
import { toast } from 'react-toastify'


class PaymentForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			timer: 0,
			timerFinished: false
		}
	}
	
	async componentDidMount() {
		this.timerStart(this.props.timeoutInSeconds)
		if (web3.currentProvider.isMetaMask) {
			this.payWithMetaMask()
		}
		PaymentForm.isLoggedIn()
	}
	
	timerStart(interval) {
		clearInterval(this.state.timer)
		operations.setTickInterval(interval, this.props.dispatch).then(() => {
			this.setState({
				timer: setInterval(() => {
					if (this.props.tick === 0) {
						this.timerStop()
					} else {
						this.props.dispatch(operations.tick())
					}
				}, 1000)
			})
		})
	}
	
	timerStop() {
		clearInterval(this.state.timer)
		this.setState({ timerFinished: true })
	}
	
	resetContract() {
		this.props.dispatch(operations.receiveCreateTokenAction(null))
	}
	
	static async isLoggedIn() {
		const accounts = await web3.eth.getAccounts()
		if (accounts.length === 0) {
			toast("If you are using Metamask, Please log in!", { type: 'warning' })
		}
		return accounts.length >= 0
	}
	
	payWithMetaMask() {
		if (PaymentForm.isLoggedIn()) {
			web3.eth.sendTransaction({
				to: this.props.depositAddress,
				from: accounts[0],
				value: this.props.priceInWei
			}, function (err, res) {
				toast("Transaction Sent", { type: 'info' })
			})
		}
	}
	
	render() {
		return (
			<div className='paymentInfo'>
				{this.state.timerFinished ?
					<>
						<div>
							Time is up! Please try again
						</div>
						<Button onClick={() => this.resetContract()} text='Try Again' />
					</>
					:
					<>
						<div className='send-to'>
							<div>
								<div><b>Send: </b>{`${this.props.web3.utils.fromWei(this.props.priceInWei)} ETH`}</div>
								<div><b>In: </b>{`${this.props.tick} seconds`}</div>
							</div>
							<div>{`${this.props.depositAddress}`}
								<CopyToClipboard
									text={this.props.depositAddress}
									onCopy={() => {
										toast('Copied!', { type: 'info' })
									}}>
									<FaRegCopy />
								</CopyToClipboard>
							</div>
						</div>
						<QRCode value={this.props.depositAddress} />
						<div className='buttons'>
							<Button text='Cancel' onClick={() => this.resetContract()} />
							<Button disabled={!web3.currentProvider.isMetaMask} text='Pay using Metamask'
									onClick={() => this.payWithMetaMask()} />
							
						</div>
					</>
				}
			</div>
		)
	}
}

export default withRouter(PaymentForm)
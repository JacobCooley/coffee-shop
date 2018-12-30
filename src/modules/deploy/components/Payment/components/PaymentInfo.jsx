import React from 'react'
import 'react-dropdown/style.css'
import '../Payment.scss'
import Button from '@components/Button'
import { operations } from '@modules/deploy/duck'
import { withRouter } from 'react-router'
import { FaRegCopy } from 'react-icons/fa'
import QRCode from 'qrcode.react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { web3 } from '@common/utils/web3'
import { toast } from 'react-toastify'
import colors from 'styles/_colors.scss'

class PaymentInfo extends React.Component {
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
	}
	
	componentWillUnmount() {
		this.timerStop()
		this.resetContract()
	}
	
	timerStart(interval) {
		clearInterval(this.state.timer)
		operations.setTickInterval(interval, this.props.dispatch).then(() => {
			this.setState({
				timer: setInterval(() => {
					if (this.props.tick === 0) {
						this.timerStop()
						this.setState({ timerFinished: true })
					} else {
						this.props.dispatch(operations.tick())
					}
				}, 1000)
			})
		})
	}
	
	timerStop() {
		clearInterval(this.state.timer)
	}
	
	resetContract() {
		this.props.dispatch(operations.receiveCreateTokenAction(null))
	}
	
	static isLoggedIn(accounts) {
		if (accounts.length === 0) {
			toast("If you are using Metamask, Please log in!", { type: 'warning' })
		}
		return accounts.length > 0
	}
	
	async payWithMetaMask() {
		const accounts = await web3.eth.getAccounts()
		if (PaymentInfo.isLoggedIn(accounts)) {
			web3.eth.sendTransaction({
				to: this.props.depositAddress,
				from: accounts[0],
				value: this.props.priceInWei
			}, function (err, res) {
				if (err) {
					toast("Rejected Transaction", { type: 'error' })
				} else {
					toast("Transaction Sent", { type: 'info' })
				}
			})
		}
	}
	
	componentWillReceiveProps(newProps) {
		if (!this.props.status.payed && newProps.status.payed) {
			this.timerStop()
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
								{!this.props.status.payed ?
									<div><b>In: </b>{`${this.props.tick} seconds`}</div>
									: <div style={{color: colors['green']}}>Payment Sent!</div>}
							</div>
							<div style={{ display: 'inline-flex' }}>{`${this.props.depositAddress}`}
								<CopyToClipboard
									text={this.props.depositAddress}
									onCopy={() => {
										toast('Copied!', { type: 'info' })
									}}>
									<FaRegCopy />
								</CopyToClipboard>
							</div>
						</div>
						<QRCode size={256} value={this.props.depositAddress} />
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

export default withRouter(PaymentInfo)
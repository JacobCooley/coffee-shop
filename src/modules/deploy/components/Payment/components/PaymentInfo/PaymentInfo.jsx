import React from 'react'
import 'react-dropdown/style.css'
import './PaymentInfo.scss'
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
		const date = new Date(null)
		date.setSeconds(this.props.tick)
		const timeLeft = date.toISOString().substr(11, 8)
		
		return (
			<>
				{this.state.timerFinished ?
					<>
						<div className='timeUp form-window'>
							Time is up! Please try again
							<Button className='timeoutButton' onClick={() => this.resetContract()} text='Try Again' />
						</div>
					</>
					:
					<div className='form-window-block'>
						<div className='paymentInfo'>
							<div className='send-to'>
								<div>
									<div><b>Send: </b>{`${this.props.web3.utils.fromWei(this.props.priceInWei)} ETH`}
									</div>
									{!this.props.status.payed ?
										<div><b>In: </b>{`${timeLeft}`}</div>
										: <div style={{ color: colors['green'] }}>Payment Sent!</div>}
								</div>
							
							</div>
							<QRCode size={256} value={this.props.depositAddress} />
							<CopyToClipboard
								text={this.props.depositAddress}
								onCopy={() => {
									if (!toast.isActive('copied')) {
										toast('Copied!', { toastId: 'copied', type: 'info' })
									}
								}}>
								<div>
									{`${this.props.depositAddress}`}
									<FaRegCopy />
								</div>
							</CopyToClipboard>
							<div className='buttons'>
								<Button disabled={!web3.currentProvider.isMetaMask} text='Pay using Metamask'
										onClick={() => this.payWithMetaMask()} />
								<Button text='Cancel' onClick={() => this.resetContract()} />
							</div>
						</div>
					</div>
				}
			</>
		)
	}
}

export default withRouter(PaymentInfo)
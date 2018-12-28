import React from 'react'
import 'react-dropdown/style.css'
import '../ContractComponent.scss'
import Button from '@components/Button'
import { operations } from '@modules/deploy/duck'
import { withRouter } from 'react-router'
import { FaCopy } from 'react-icons/fa'
import QRCode from 'qrcode.react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import web3 from '@common/utils/web3'

class PaymentForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			timer: 0,
			timerFinished: false
		}
	}
	
	componentDidMount() {
		this.timerStart(this.props.timeoutInSeconds)
		if (web3.currentProvider.isMetaMask) {
			this.payWithMetaMask()
		}
	}
	
	componentWillUnmount() {
		this.resetContract()
		this.timerStop()
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
	
	async payWithMetaMask() {
		const accounts = await web3.eth.getAccounts()
		web3.eth.sendTransaction({
				to: this.props.depositAddress,
				from: accounts[0],
				value: this.props.priceInWei
			}
			, function (err, res) {
			})
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
										//TODO Add confirmation toast
										console.log('Copied')
									}}>
									<FaCopy onClick={() => console.log('click')} />
								</CopyToClipboard>
							</div>
						</div>
						<QRCode value={this.props.depositAddress} />
						<Button text='Cancel' onClick={() => this.resetContract()} />
					</>
				}
			</div>
		)
	}
}

export default withRouter(PaymentForm)
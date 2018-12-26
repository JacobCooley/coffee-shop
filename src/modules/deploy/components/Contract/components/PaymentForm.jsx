import React from 'react'
import 'react-dropdown/style.css'
import '../ContractComponent.scss'
import Button from '@components/Button'
import { operations } from '@modules/deploy/duck'
import { withRouter } from 'react-router';


class PaymentForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			timer: 0,
			timerFinished: false
		}
	}
	
	componentDidMount(){
		this.timerStart(this.props.timeoutInSeconds)
	}
	
	componentWillUnmount(){
		this.resetContract()
		this.timerStop()
	}
	
	timerStart(interval) {
		clearInterval(this.state.timer)
		operations.setTickInterval(interval, this.props.dispatch).then(() => {
			this.setState({
				timer: setInterval(() => {
					console.log('finalTick', this.props.tick)
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
	
	resetContract(){
		this.props.dispatch(operations.receiveCreateTokenAction(null))
	}
	
	render() {
		return (
			<div className='paymentInfo'>
				{this.state.timerFinished ?
					<>
						<div>
							Time is up!  Please try again
						</div>
						<Button onClick={() => this.resetContract()} text='Try Again'/>
					</>
					:
					<>
						<b>Send: </b>{`${this.props.web3.utils.fromWei(this.props.priceInWei)} Eth`}<br />
						<b>To: </b>{`${this.props.depositAddress}`}<br />
						<b>In: </b>{`${this.props.tick} seconds`}
					</>
				}
			</div>
		)
	}
}

export default withRouter(PaymentForm)
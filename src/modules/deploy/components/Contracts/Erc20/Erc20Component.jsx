import React from 'react'
import Button from '@common/components/Button'
import 'react-dropdown/style.css'
import '../Contracts.scss'
import { operations } from '../../../duck'
import openSocket from 'socket.io-client'
import { socketUrl } from '@src/config'
import ContractsHeader from '@modules/deploy/components/Contracts/components/ContractsHeader'
import ethIcon from '@icons/eth.svg'
import { toast } from 'react-toastify'
import Erc20Form from '@modules/deploy/components/Contracts/Erc20/Erc20Form'
import { numberChange } from '@common/utils/functions'


class Erc20Component extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			errors: {}
		}
	}
	
	
	validateForm = () => {
		return new Promise((resolve, reject) => {
			const deployInfo = this.props.deploy.deployInfo
			const errorObject = {}
			if (!this.props.web3.utils.isAddress(deployInfo.owner)) {
				errorObject.owner = 'Not a valid address'
			}
			if (deployInfo.symbol.length > 7) {
				errorObject.symbol = 'Symbol must be less than 7 characters'
			}
			if (deployInfo.name.length > 16) {
				errorObject.name = 'Name must be less than 16 characters'
			}
			this.setState({ errors: errorObject }, () => {
				resolve(true)
			})
		})
	}
	
	onSubmit(e) {
		e.preventDefault()
		this.validateForm().then(() => {
			if (Object.keys(this.state.errors).length === 0) {
				const socket = openSocket(socketUrl, {
					reconnection: false
				})
				socket.on('id', (idObject) => {
					const deployInfo = this.props.deploy.deployInfo
					const token = {
						...deployInfo,
						id: idObject,
						email: this.props.user.username
					}
					console.log('token', token)
					this.props.dispatch(operations.createToken(token))
				})
				socket.on('status', (status) => {
					const step = status.step
					const extraData = status.extraData
					console.log('step', step)
					if (step)
						this.props.dispatch(operations.setStep(step))
					if(extraData)
						this.props.dispatch(operations.setContract(extraData.contractAddress))
				})
				socket.on('connect_error', (err) => {
					toast("Could not connect to the server", { type: 'error' })
				})
			}
		})
	}
	
	render() {
		const deployInfo = this.props.deploy.deployInfo
		const owner = deployInfo.owner
		const name = deployInfo.name
		const decimal = deployInfo.decimal
		const symbol = deployInfo.symbol
		const supply = deployInfo.supply
		
		return (
			<div className='contract'>
				<ContractsHeader contractType='ERC-20 Token'
								 imgSrc={ethIcon}
								 description='You are creating a standard ERC20 token on the Ethereum Blockchain!  Please fill out the form and make your payment on the next step.' />
				<form onSubmit={(e) => this.onSubmit(e)}>
					<Erc20Form decimal={decimal} onChange={this.props.onChange} errors={this.state.errors}
							   supplyChange={(e) => numberChange(e, this.props.onChange)} name={name} supply={supply}
							   owner={owner}
							   symbol={symbol} />
					<Button type="submit" value="Submit" text="Submit" />
				</form>
			</div>
		)
	}
}

export default Erc20Component
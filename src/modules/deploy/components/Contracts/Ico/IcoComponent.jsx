import React from 'react'
import Button from '@common/components/Button'
import Input from '@common/components/Input'
import Dropdown from '@common/components/Dropdown'
import 'react-dropdown/style.css'
import '../Contracts.scss'
import { operations } from '../../../duck'
import openSocket from 'socket.io-client'
import { socketUrl } from '@src/config'
import ContractsHeader from '@modules/deploy/components/Contracts/components/ContractsHeader'
import ethIcon from '@icons/eth.svg'
import { toast } from 'react-toastify'


class IcoComponent extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			errors: {}
		}
	}

	numberChange = (e) => {
		e.target.value = e.target.value.replace(/\D/g, "")
		this.props.onChange(e)
	}
	
	validateForm = () => {
		return new Promise((resolve, reject) =>{
			const deployInfo = this.props.deploy.deployInfo
			const errorObject = {}
			if (!this.props.web3.utils.isAddress(deployInfo.contractAddress)) {
				errorObject.contractAddress = 'Not a valid address'
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
						id: idObject
					}
					this.props.dispatch(operations.createToken(token))
				})
				socket.on('contract', (contract) => {
					this.props.dispatch(operations.setContract(contract))
				})
				socket.on('status', (contract) => {
					this.props.dispatch(operations.setStatus(contract))
				})
				socket.on('connect_error', (err) => {
					toast("Could not connect to the server", { type: 'error' })
				})
			}
		})
	}
	
	render(){
		const deployInfo = this.props.deploy.deployInfo
		const contractAddress = deployInfo.contractAddress || ''
		const totalAmount = deployInfo.totalAmount || 0
		const amountPerEth = deployInfo.amountPerEth || 0
		const startDate = deployInfo.startDate
		const stopDate = deployInfo.stopDate
		return (
			<div className='contract'>
				<ContractsHeader contractType='Initial Coin Offering'
								 imgSrc={ethIcon}
								 description='You are starting the process for your ICO!  Please fill out the form and make your payment on the next step.' />
				<form onSubmit={(e) => this.onSubmit(e)}>
					<Input required error={this.state.errors.contractAddress} onChange={this.props.onChange}
						   desc='Your contract address that holds your token' name='contractAddress'
						   label='Contract Address' value={contractAddress} />
					<Input required onChange={this.numberChange} desc='Maximum value of tokens to be sold' name='totalAmount'
						   label='Total Amount'
						   value={totalAmount ? totalAmount : ''} />
					<Input required onChange={this.numberChange} desc='Amount of tokens per ETH invested' name='amountPerEth'
						   label='Amount per ETH'
						   value={amountPerEth ? amountPerEth : ''} />
					<Input required onChange={this.numberChange} desc='Start date for the ICO' name='startDate'
						   label='Start Date' type='time'
						   value={startDate ? startDate : ''} />
					<Input required onChange={this.numberChange} desc='Ending date for the ICO' name='stopDate'
						   label='Stop Date' type='time'
						   value={stopDate ? stopDate : ''} />
					<Button type="submit" value="Submit" text="Submit" />
				</form>
			</div>
		)
	}
}

export default IcoComponent
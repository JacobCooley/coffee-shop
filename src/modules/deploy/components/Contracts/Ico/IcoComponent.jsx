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
			const icoInfo = this.props.deploy.icoInfo
			const errorObject = {}
			if (!this.props.web3.utils.isAddress(icoInfo.contractAddress)) {
				errorObject.contractAddress = 'Not a valid address'
			}
			if (icoInfo.symbol.length > 7) {
				errorObject.symbol = 'Symbol must be less than 7 characters'
			}
				if (icoInfo.name.length > 16) {
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
					const icoInfo = this.props.deploy.icoInfo
					const token = {
						...icoInfo,
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
		const icoInfo = this.props.deploy.icoInfo
		const contractAddress = icoInfo.contractAddress
		const totalAmount = icoInfo.totalAmount
		const pricePerEth = icoInfo.pricePerEth
		const startDate = icoInfo.startDate
		const stopDate = icoInfo.stopDate
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
					<Input required onChange={this.numberChange} desc='Price per ETH invested' name='pricePerEth'
						   label='Price per ETH'
						   value={pricePerEth ? pricePerEth : ''} />
					<Input required onChange={this.numberChange} desc='Start date for the ICO' name='startDate'
						   label='Start Date'
						   value={startDate ? startDate : ''} />
					<Input required onChange={this.numberChange} desc='Ending date for the ICO' name='stopDate'
						   label='Stop Date'
						   value={stopDate ? stopDate : ''} />
					<Button type="submit" value="Submit" text="Submit" />
				</form>
			</div>
		)
	}
}

export default IcoComponent
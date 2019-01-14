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


class ContractsComponent extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			errors: {}
		}
	}

	supplyChange = (e) => {
		e.target.value = e.target.value.replace(/\D/g, "")
		this.props.onChange(e)
	}
	
	validateForm = () => {
		return new Promise((resolve, reject) =>{
			const tokenInfo = this.props.deploy.tokenInfo
			const errorObject = {}
			if (!this.props.web3.utils.isAddress(tokenInfo.owner)) {
				errorObject.owner = 'Not a valid address'
			}
			if (tokenInfo.symbol.length > 7) {
				errorObject.symbol = 'Symbol must be less than 7 characters'
			}
				if (tokenInfo.name.length > 16) {
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
					const tokenInfo = this.props.deploy.tokenInfo
					const token = {
						...tokenInfo,
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
		const tokenInfo = this.props.deploy.tokenInfo
		const owner = tokenInfo.owner
		const name = tokenInfo.name
		const decimal = tokenInfo.decimal
		const symbol = tokenInfo.symbol
		const supply = tokenInfo.supply
		const options = [
			'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'
		]
		return (
			<div className='contract form-window'>
				<ContractsHeader contractType='ERC-20 Token'
								 imgSrc={ethIcon}
								 description='You are creating a standard ERC20 token on the Ethereum Blockchain!  Please fill out the form and make your payment on the next step.' />
				<form onSubmit={(e) => this.onSubmit(e)}>
					<Input required error={this.state.errors.owner} onChange={this.props.onChange}
						   desc='Your ethereum address you want the tokens sent to' name='owner'
						   label='Ethereum Address' value={owner} />
					<Input required error={this.state.errors.name} onChange={this.props.onChange} desc='The name of your token (e.g: Gold Coin)' name='name'
						   label='Name'
						   value={name} />
					<Input required  error={this.state.errors.symbol} onChange={this.props.onChange} desc='The symbol of your token (e.g: GLD)' name='symbol'
						   label='Symbol'
						   value={symbol} />
					<Input required onChange={this.supplyChange} desc='Maximum value of tokens to be created' name='supply'
						   label='Supply'
						   value={supply ? supply : ''} />
					<Dropdown style={{ marginRight: '0' }}
							  desc='Minimum amount of decimal places that the token can be traded with'
							  options={options}
							  onChange={this.props.onChange}
							  value={decimal} placeholder="Select an option" />
					<Button type="submit" value="Submit" text="Submit" />
				</form>
			</div>
		)
	}
}

export default ContractsComponent
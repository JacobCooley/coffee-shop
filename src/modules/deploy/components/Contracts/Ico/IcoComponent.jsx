import React from 'react'
import Button from '@common/components/Button'
import Input from '@common/components/Input'
import 'react-dropdown/style.css'
import '../Contracts.scss'
import { operations } from '../../../duck'
import openSocket from 'socket.io-client'
import { socketUrl } from '@src/config'
import ContractsHeader from '@modules/deploy/components/Contracts/components/ContractsHeader'
import ethIcon from '@icons/eth.svg'
import { toast } from 'react-toastify'
import moment from 'moment'
import { formatDate, parseDate } from 'react-day-picker/moment'
import Erc20Form from '@modules/deploy/components/Contracts/Erc20/Erc20Form'
import { numberChange } from '@common/utils/functions'

class IcoComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			errors: {},
			from: undefined,
			to: undefined
		}
	}
	
	numberChange = (e) => {
		e.target.value = e.target.value.replace(/\D/g, "")
		this.props.onChange(e)
	}
	
	validateForm = () => {
		return new Promise((resolve, reject) => {
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
					this.props.dispatch(operations.setStep(contract))
				})
				socket.on('connect_error', (err) => {
					toast("Could not connect to the server", { type: 'error' })
				})
			}
		})
	}
	
	showFromMonth() {
		const { from, to } = this.state
		if (!from) {
			return
		}
		if (moment(to).diff(moment(from), 'months') < 2) {
			this.to.getDayPicker().showMonth(from)
		}
	}
	
	handleFromChange(from) {
		this.setState({ from })
	}
	
	handleToChange(to) {
		this.setState({ to }, this.showFromMonth)
	}
	
	handleFocus() {
		setTimeout(() => {
			this.to.getInput().focus()
		}, 10)
	}
	
	render() {
		const deployInfo = this.props.deploy.deployInfo
		const owner = deployInfo.owner
		const name = deployInfo.name
		const decimal = deployInfo.decimal
		const symbol = deployInfo.symbol
		const supply = deployInfo.supply
		const contractAddress = deployInfo.contractAddress
		const totalAmount = deployInfo.totalAmount
		const amountPerEth = deployInfo.amountPerEth
		const startDate = deployInfo.startDate
		const stopDate = deployInfo.stopDate
		const { from, to } = this.state
		console.log('from', from)
		const modifiers = { start: from, end: to }
		return (
			<div className='contract'>
				<ContractsHeader contractType='Initial Coin Offering'
								 imgSrc={ethIcon}
								 description='You are starting the process for your ICO!  Please fill out the form and make your payment on the next step.' />
				<form onSubmit={(e) => this.onSubmit(e)}>
					<Erc20Form decimal={decimal} onChange={this.props.onChange} errors={this.state.errors}
							   supplyChange={(e) => numberChange(e, this.props.onChange)} name={name} supply={supply} owner={owner}
							   symbol={symbol} />
					<Input required error={this.state.errors.contractAddress} onChange={this.props.onChange}
						   desc='Your contract address that holds your token' name='contractAddress'
						   label='Contract Address' value={contractAddress} />
					<Input required desc='Start date for the ICO' name='startDate'
						   label='Start Date' type='time'
						   refs={el => (this.from = el)}
						   className={'InputFromTo'}
						   value={from}
						   placeholder="From"
						   formatDate={formatDate}
						   parseDate={parseDate}
						   dayPickerProps={{
							   selectedDays: [from, { from, to }],
							   disabledDays: { after: to },
							   toMonth: to,
							   modifiers,
							   numberOfMonths: 2,
							   onDayClick: () => this.handleFocus()
						   }}
						   onDayChange={(from) => this.handleFromChange(from)} />
					<Input required desc='Ending date for the ICO' name='stopDate'
						   label='Stop Date' type='time'
						   refs={el => (this.to = el)}
						   value={to}
						   className={'InputFromTo InputFromTo-to'}
						   placeholder="To"
						   format="LL"
						   formatDate={formatDate}
						   parseDate={parseDate}
						   dayPickerProps={{
							   selectedDays: [from, { from, to }],
							   disabledDays: { before: from },
							   modifiers,
							   month: from,
							   fromMonth: from,
							   numberOfMonths: 2,
						   }}
						   onDayChange={(to) => this.handleToChange(to)} />
					<Input required onChange={this.numberChange} desc='Maximum value of tokens to be sold'
						   name='totalAmount'
						   label='Total Amount'
						   value={totalAmount ? totalAmount : ''} />
					<Input required onChange={this.numberChange} desc='Amount of tokens per ETH invested'
						   name='amountPerEth'
						   label='Amount per ETH'
						   value={amountPerEth ? amountPerEth : ''} />
					
					<Button type="submit" value="Submit" text="Submit" />
				</form>
			</div>
		)
	}
}

export default IcoComponent
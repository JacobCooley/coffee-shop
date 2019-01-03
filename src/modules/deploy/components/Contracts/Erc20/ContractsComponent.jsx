import React from 'react'
import Button from '@common/components/Button'
import Input from '@common/components/Input'
import Dropdown from '@common/components/Dropdown'
import 'react-dropdown/style.css'
import '../Contracts.scss'
import { operations } from '../../../duck'
import openSocket from 'socket.io-client'
import { socketUrl } from '@common/utils/constants'
import ContractsHeader from '@modules/deploy/components/Contracts/components/ContractsHeader'
import ethIcon from '@icons/eth.svg'
import { toast } from 'react-toastify'


const ContractsComponent = ({ onChange, create, dispatch }) => {
	const tokenInfo = create.tokenInfo
	const owner = tokenInfo.owner
	const name = tokenInfo.name
	const decimal = tokenInfo.decimal
	const symbol = tokenInfo.symbol
	const supply = tokenInfo.supply
	const options = [
		'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'
	]
	const supplyChange = (e) => {
		e.target.value = e.target.value.replace(/\D/g, "")
		onChange(e)
	}
	const onSubmit = (e) => {
		e.preventDefault()
		const socket = openSocket(socketUrl, {
			reconnection: false
		})
		socket.on('id', (idObject) => {
			const token = {
				name,
				symbol,
				decimal,
				supply,
				owner,
				id: idObject
			}
			dispatch(operations.createToken(token))
		})
		socket.on('contract', (contract) => {
			dispatch(operations.setContract(contract))
		})
		socket.on('status', (contract) => {
			dispatch(operations.setStatus(contract))
		})
		socket.on('connect_error', (err) => {
			toast("Could not connect to the server", { type: 'error' })
		})
	}
	
	return (
		<div className='contract form-window'>
			<ContractsHeader contractType='ERC-20 Token'
							 imgSrc={ethIcon}
							 description='You are creating a standard ERC20 token on the Ethereum Blockchain!  Please fill out the form and make your payment on the next step.' />
			<form onSubmit={onSubmit}>
				<Input onChange={onChange} desc='Your ethereum address you want the tokens sent to' name='owner'
					   label='Ethereum Address' value={owner} />
				<Input onChange={onChange} desc='The name of your token (e.g: Gold Coin)' name='name' label='Name'
					   value={name} />
				<Input onChange={onChange} desc='The symbol of your token (e.g: GLD)' name='symbol' label='Symbol'
					   value={symbol} />
				<Input onChange={supplyChange} desc='Maximum value of tokens to be created' name='supply' label='Supply'
					   value={supply ? supply : ''} />
				<Dropdown style={{ marginRight: '0' }}
						  desc='Minimum amount of decimal places that the token can be traded with' options={options}
						  onChange={onChange}
						  value={tokenInfo.decimal} placeholder="Select an option" />
				<Button type="submit" value="Submit" text="Submit" />
			</form>
		</div>
	)
}

export default ContractsComponent
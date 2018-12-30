import React from 'react'
import Button from '@common/components/Button'
import Input from '@common/components/Input'
import Dropdown from '@common/components/Dropdown'
import 'react-dropdown/style.css'
import '../Contracts.scss'
import { operations } from '../../../duck'
import openSocket from 'socket.io-client'
import { socketUrl } from '@common/utils/constants'


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
		console.log('onSubmit')
		const socket = openSocket(socketUrl)
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
	}
	
	return (
		<div className='form-window'>
			<form onSubmit={onSubmit}>
				<Input onChange={onChange} name='owner' label='Ethereum Address' value={owner} />
				<Input onChange={onChange} name='name' label='Name' value={name} />
				<Input onChange={onChange} name='symbol' label='Symbol' value={symbol} />
				<Input onChange={supplyChange} name='supply' label='Supply'
					   value={supply ? supply : ''} />
				<Dropdown style={{ marginRight: '0' }} options={options} onChange={onChange}
						  value={tokenInfo.decimal} placeholder="Select an option" />
				<Button type="submit" value="Submit" text="Submit" />
			</form>
		</div>
	)
}

export default ContractsComponent
import React from 'react'
import Button from '@components/Button'
import Input from '@components/Input'
import Dropdown from '@components/Dropdown'
import 'react-dropdown/style.css'
import '../ContractComponent.scss'
import { operations } from '../../../duck'
import openSocket from 'socket.io-client'
import { socketUrl } from '@common/utils/constants'

const CreateForm = ({ onChange, create, dispatch }) => {
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
		const socket = openSocket(socketUrl)
		socket.on('id', (idObject) => {
			console.log(idObject)
			const token = {
				name,
				symbol,
				decimal,
				supply,
				owner,
				id: idObject.id
			}
			console.log(token)
			dispatch(operations.createToken(token))
		})
		socket.on('contract', (contract) => {
			console.log(contract)
			dispatch(operations.setContract(contract))
		})
	}
	return (
		<>
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
		</>
	)
}

export default CreateForm
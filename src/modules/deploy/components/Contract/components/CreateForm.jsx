import React from 'react'
import Button from '@components/Button'
import Input from '@components/Input'
import Dropdown from '@components/Dropdown'
import 'react-dropdown/style.css'
import '../ContractComponent.scss'
import { operations } from '../../../duck'


const CreateForm = ({ onChange, create, dispatch }) => {
	const tokenInfo = create.tokenInfo
	const owner = tokenInfo['creator-address']
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
		const token = {
			name,
			symbol,
			decimal,
			supply,
			owner
		}
		dispatch(operations.createToken(token))
	}
	return (
		<>
			<form onSubmit={onSubmit}>
				<Input onChange={onChange} name='creator-address' label='Ethereum Address' value={owner} />
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
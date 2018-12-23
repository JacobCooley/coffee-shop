import React from 'react'
import Button from '@components/Button'
import Input from '@components/Input'
import Loader from '@components/Loader'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import './EthTokenComponent.scss'
import { formOperations } from '@ethtoken/duck/index'


const EthTokenComponent = ({ onChange, create, dispatch }) => {
	const tokenInfo = create.tokenInfo
	const loading = create.loading
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
		const token  = {
			name,
			symbol,
			decimal,
			supply,
			owner
		}
		dispatch(formOperations.createToken(token))
	}
	return (
		<>
			<h2>Enter your desired info</h2>
			<form onSubmit={onSubmit}>
				{loading ? <Loader /> : null}
				<Input onChange={onChange} name='creator-address' label='Ethereum Address' value={owner} />
				<Input onChange={onChange} name='name' label='Name' value={name} />
				<Input onChange={onChange} name='symbol' label='Symbol' value={symbol} />
				<Input onChange={supplyChange} name='supply' label='Supply'
					   value={supply ? supply : ''} />
				<label>Decimals:
					<Dropdown controlClassName={'controlClass'} options={options} onChange={onChange}
							  value={tokenInfo.decimal} placeholder="Select an option" />
				</label>
				<Button type="submit" value="Submit" text="Submit" />
			</form>
		</>
	)
}

export default EthTokenComponent
import Input from '@common/components/Input'
import Dropdown from '@common/components/Dropdown'
import React from 'react'


const Erc20Form = ({ errors, onChange, owner, name, symbol, supply, decimal, supplyChange }) => {
	const options = [
		'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'
	]
	return (
		<>
			<Input required error={errors.owner} onChange={onChange}
				   desc='Your ethereum address you want the tokens sent to' name='owner'
				   label='Ethereum Address' value={owner} />
			<Input
				required
				error={errors.name}
				onChange={onChange}
				desc='The name of your token (e.g: Gold Coin)'
				name='name'
				label='Name'
				value={name}
			/>
			<Input required error={errors.symbol} onChange={onChange}
				   desc='The symbol of your token (e.g: GLD)' name='symbol'
				   label='Symbol'
				   value={symbol} />
			<Input
				required
				onChange={supplyChange}
				desc='Maximum value of tokens to be created'
				name='supply'
				label='Supply'
				value={supply ? supply : ''}
			/>
			<Dropdown style={{ marginRight: '0' }}
					  desc='Minimum amount of decimal places that the token can be traded with'
					  options={options}
					  onChange={onChange}
					  value={decimal} placeholder="Select an option" />
		</>
	)
}

export default Erc20Form
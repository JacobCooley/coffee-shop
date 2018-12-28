import React from 'react'
import './Eos.scss'
import Card from '@components/Card'
import eth from '@icons/ethereum-cash.svg'


const Eos = ({ history }) => {
	return (
		<>
			<Card title='Token' image={eth} price='50 EOS'
				  description='Launch your token and send tokens to any address that you like.'
				  disabled
			/>
			
			<Card title='Betting Contract' image={eth} price='10 EOS'
				  description='Place a bet and use smart contracts to wager against someone.'
				  disabled />
		</>
	)
}

export default Eos
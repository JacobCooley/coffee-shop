import React from 'react'
import './Eos.scss'
import Card from '@components/Card'
import eosIcon from '@icons/eos.svg'


const Eos = ({ history }) => {
	return (
		<>
			<Card title='Token' image={eosIcon} price='50 EOS'
				  description='Launch your token and send tokens to any address that you like.'
				  disabled
			/>
			
			<Card title='Betting Contract' image={eosIcon} price='10 EOS'
				  description='Place a bet and use smart contracts to wager against someone.'
				  disabled />
		</>
	)
}

export default Eos
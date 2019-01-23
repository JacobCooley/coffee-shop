import React from 'react'
import './Ethereum.scss'
import Card from '@components/Card'
import eth from '@icons/eth.svg'
import { operations as deployOperations } from '@deploy/duck'

const Ethereum = ({ history, dispatch }) => {
	const {setContractType} = deployOperations
	return (
		<>
			<Card title='ERC20 Token' image={eth} price='0.5 ETH'
				  description='Launch your token and send tokens to any address that you like.'
				  onClick={() => {
						  history.push('/deploy/erc20')
				  }} />
			<Card title='Crowdfund an ICO' image={eth} price='1 ETH'
				  description='Start your ICO to collect funds and have your tokens automatically distributed between investors.'
				  onClick={() => {
						  history.push('/deploy/ico')
				  }}
			/>
			<Card title='Betting Contract' image={eth} price='0.3 ETH'
				  description='Place a bet and use smart contracts to wager against someone.'
				  disabled
			/>
			<Card title='Airdrop' image={eth} price='0.5 ETH'
				  description='Create your own airdrop'
				  disabled />
			<Card title='ERC721 Token' image={eth} price='1 ETH'
				  description='Build a standard ERC721 non fungible token'
				  disabled />
			
			<Card title='Dividend Token' image={eth} price='1 ETH'
				  description={'Build a token to pay dividends to its\' holders'}
				  disabled />
			<Card title='Voting Contract' image={eth} price='0.05 ETH'
				  description='Simple voting contract'
				  disabled />
		</>
	)
}

export default Ethereum
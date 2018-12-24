import React from 'react'
import './Ethereum.scss'
import Card from '@components/Card'
import eth from '@icons/ethereum-cash.svg'


const Ethereum = ({history}) => {
	return (
		<>
			<Card title='ERC20 Token' image={eth} price={0.5}
				  description='Launch your token and send tokens to any address that you like.' onClick={() => {
				history.push('/deploy')
			}} />
			<Card title='Start an ICO' image={eth} price={0.5}
				  description='Start your ICO to collect funds and have your tokens automatically distributed between investors.'
				  diabled />
			<Card title='Betting Contract' image={eth} price={0.5}
				  description='Place a bet and use smart contracts to wager against someone.'
				  disabled />
			<Card title='Airdrop' image={eth} price={0.5}
				  description='Create your own airdrop'
				  diabled />
			<Card title='ERC721 Token' image={eth} price={0.5}
				  description='Start your ICO to collect funds and have your tokens automatically distributed between investors!'
				  disabled />
			
			<Card title='ERC721 Token' image={eth} price={0.5}
				  description='Start your ICO to collect funds and have your tokens automatically distributed between investors!'
				  disabled />
			<Card title='ERC721 Token' image={eth} price={0.5}
				  description='Start your ICO to collect funds and have your tokens automatically distributed between investors!'
				  disabled />
		</>
	)
}

export default Ethereum
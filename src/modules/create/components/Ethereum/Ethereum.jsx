import React from 'react'
import '../Chains/Chains.scss'
import Card from '@components/Card'
import eth from '@src/assets/icons/ethereum-cash.svg'


const Ethereum = ({ history }) => {
	return (
		<>
			<h2>Choose your Contract</h2>
			<Card title='Launch Token' image={eth}
				  description='Launch your token and send tokens to any address that you like!' onClick={() => {
				history.push('/create/ethtoken')
			}} />
			<Card title='Start an ICO' image={eth}
				  description='Start your ICO to collect funds and have your tokens automatically distributed between investors!' />
		</>
	)
}

export default Ethereum
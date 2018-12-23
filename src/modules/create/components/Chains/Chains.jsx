import React from 'react'
import './Chains.scss'
import Card from '@components/Card'
import eth from '@src/assets/icons/ethereum-cash.svg'

const onClick = () => {

}

const Chains = ({ history, match }) => (
	<>
		<h2>Choose your Blockchain</h2>
		<Card title='Ethereum' image={eth} description='Ethereum Blockchain' onClick={() => {
			history.push(match.url + '/ethereum')
		}} />
		<Card title='Eos' image={eth} description='EOS Blockchain' onClick={onClick} />
	</>
)

Chains.propTypes = {}

Chains.defaultProps = {}

export default Chains
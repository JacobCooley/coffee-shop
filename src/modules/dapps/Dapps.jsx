import React, { Component } from 'react'
import './Dapps.scss'
import Ethereum from '@ethereum/'
import Eos from '@eos/'
import eth from '@assets/icons/ethereum-cash.svg'
import RadioBox from '@components/RadioBox'

class Dapps extends Component {
	constructor(props) {
		super(props)
		this.state = {
			chain: 'ETH',
			items:
				[
					{ symbol: 'ETH', image: eth, url: '/ethereum' },
					{ symbol: 'EOS', image: eth, url: '/eos' }
				]
		}
	}
	
	radioChange = (e, item) => {
		this.setState({ chain: item.symbol })
	}
	
	render() {
		return (
			<>
				<div className='chains'>
					<RadioBox name='chain' items={this.state.items} onChange={this.radioChange} />
				</div>
				<div className='dapps'>
					{this.state.chain === 'ETH' ? <Ethereum history={this.props.history}/> : <Eos history={this.props.history}/>}
				</div>
			</>
		
		)
	}
}

Dapps.propTypes = {}

Dapps.defaultProps = {}

export default Dapps
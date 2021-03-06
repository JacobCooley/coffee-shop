import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Create.scss'
import Ethereum from '@ethereum/'
import Eos from '@eos/'
import ethIcon from '@icons/eth.svg'
import eosIcon from '@icons/eos.svg'
import RadioBox from '@components/RadioBox'

class Create extends Component {
	constructor(props) {
		super(props)
		this.state = {
			chain: 'ETH',
			items:
				[
					{ symbol: 'ETH', image: ethIcon, url: '/ethereum' },
					{ symbol: 'EOS', image: eosIcon, url: '/eos' }
				]
		}
	}
	
	radioChange = (e, item) => {
		this.setState({ chain: item.symbol })
	}
	
	render() {
		return (
			<div style={{width: '100%'}}>
				<div className='chains'>
					<RadioBox name='chain' items={this.state.items} onChange={this.radioChange} />
				</div>
				<div className='dapps'>
					{this.state.chain === 'ETH' ? <Ethereum dispatch={this.props.dispatch} history={this.props.history}/> : <Eos history={this.props.history}/>}
				</div>
			</div>
		
		)
	}
}

Create.propTypes = {}

Create.defaultProps = {}

export default connect()(Create)
import React from 'react'
import './Deploy.scss'
import Payment from './components/Payment'
import Erc20 from '@deploy/components/Contracts/Erc20'
import Ico from '@deploy/components/Contracts/Ico'

class Deploy extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			contract: ''
		}
	}
	
	componentDidMount() {
		const deploy = this.props.deploy
		const { type } = deploy
		switch (type) {
			case 'erc20':
				this.setState({ contract: <Erc20 /> })
				break
			default:
				this.setState({ contract: <Ico /> })
				break
		}
	}
	
	render() {
		const deploy = this.props.deploy
		return (
			<>
				{
					deploy.paymentInfo || deploy.tokenInfo.contract ?
						<div className='deploy-payment'>
							<Payment />
						</div>
						:
						<div className='deploy-contract'>
							{this.state.contract}
						</div>
				}
			</>
		)
	}
}

export default Deploy
import React from 'react'
import './Deploy.scss'
import { operations } from './duck'
import Payment from './components/Payment'
import Erc20 from '@deploy/components/Contracts/Erc20'
import Ico from '@deploy/components/Contracts/Ico'

class Deploy extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			contract: 'erc20'
		}
	}
	
	componentDidMount() {
		const { pathname } = this.props.location
		const stringToRemove = '/deploy/'
		const type = pathname.substr(stringToRemove.length, pathname.length)
		
		if (type === 'erc20') {
			this.props.dispatch(operations.setContractType((type))).then(() => {
				this.setState({ contract: <Erc20 /> })
			})
		} else {
			this.props.dispatch(operations.setContractType((type))).then(() => {
				this.setState({ contract: <Ico /> })
			})
		}
	}
	
	render() {
		const deploy = this.props.deploy
		return (
			<>
				{
					deploy.paymentInfo || deploy.deployInfo.contract ?
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
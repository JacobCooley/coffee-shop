import React from 'react'
import './Deploy.scss'
import EthToken from './components/EthToken'
import PreviewToken from './components/PreviewToken'

const Deploy = () => {
	return (
		<div className='deploy'>
			<PreviewToken/>
			<EthToken/>
		</div>
	)
}

export default Deploy
import React from 'react'
import './Deploy.scss'
import Contract from './components/Contract'
import PreviewForm from './components/Contract/components/PreviewForm'

const Deploy = ({create}) => {
	return (
		<div className='deploy'>
			<PreviewForm create={create}/>
			<Contract/>
		</div>
	)
}

export default Deploy
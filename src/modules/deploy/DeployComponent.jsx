import React from 'react'
import './Deploy.scss'
import Contract from './components/Contract'
import PreviewForm from './components/Contract/components/PreviewForm'

const Deploy = ({create}) => {
	return (
		<>
			<PreviewForm create={create}/>
			<Contract/>
		</>
	)
}

export default Deploy
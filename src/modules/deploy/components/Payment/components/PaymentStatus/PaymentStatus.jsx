import React from 'react'
import './PaymentStatus.scss'

const statusLine = (index, step, text, finishedText) => {
	return (
		<div
			className={`${step > index ? 'finished' : step === index ? 'loading' : 'waiting'}`}>{`${step > index ? finishedText : text}`}
		</div>
	)
}

const PaymentStatus = ({ status }) => {
	const step = status.step || 0
	const error = Object.keys(status.error).length !== 0
	
	return (
		<div className='status'>
			<h3>Status</h3>
			<div>
				{statusLine(0, step, "Preparing Contract", "Contract Prepared")}
				{statusLine(1, step, "Waiting For Payment", "Payment Received")}
				{statusLine(2, step, "Processing Data", "Data Processed")}
				{statusLine(3, step, "Creating Contract", "Contract Created")}
				<div className={`error`}>{error ? 'There was an error!!' : ''}</div>
			</div>
		</div>
	)
}

PaymentStatus.propTypes = {}

PaymentStatus.defaultProps = {}

export default PaymentStatus
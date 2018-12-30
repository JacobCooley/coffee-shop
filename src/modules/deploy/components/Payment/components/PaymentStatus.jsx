import React from 'react'
import '../Payment.scss'

const PaymentStatus = ({status}) => {
	const payed = status.payed
	const prepared = status.prepared
	const built = status.built
	const deployed = status.deployed
	const created = status.created
	const error = status.error
	
	return (
		<div className='status form-window'>
			<h3>Status</h3>
			<div>
				<div className={`${prepared ? 'finished' : 'loading'}`}>Preparing Contract</div>
				<div className={`${payed ? 'finished' : prepared ? 'loading' : 'waiting'}`}>Waiting for payment</div>
				<div className={`${built ? 'finished' : payed ? 'loading' : 'waiting'}`}>Creating Contract</div>
				<div className={`${deployed ? 'finished' : built ? 'loading' : 'waiting'}`}>Deploying Contract</div>
				<div className={`${created ? 'finished' : deployed ? 'loading' : 'waiting'}`}>Contract Created!</div>
				<div onClick={() => alert(error)} className={`error`}>{error ? 'There was an error!!' : ''}</div>
			</div>
		</div>
	)
}

PaymentStatus.propTypes = {}

PaymentStatus.defaultProps = {}

export default PaymentStatus
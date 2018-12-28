import React from 'react'
import '../ContractComponent.scss'

const PreviewForm = ({ create }) => {
	const tokenInfo = create.tokenInfo
	
	return (
		<div className='preview'>
			<h3>Contract Type</h3>
			<p>You are creating a standard ERC20 token on the Ethereum Blockchain!  Please fill out the form and make payment to the correct address</p>
			{/*<>*/}
				{/*<div>{`Token: ${tokenInfo.name} ${tokenInfo.symbol ? `(${tokenInfo.symbol.toUpperCase()})` : ''}`}</div>*/}
				{/*<div>Supply: {tokenInfo.supply ? parseInt(tokenInfo.supply,10).toLocaleString() : 0}</div>*/}
				{/*<div>Decimals: {tokenInfo.decimal}</div>*/}
			{/*</>*/}
		</div>
	)
}

PreviewForm.propTypes = {}

PreviewForm.defaultProps = {}

export default PreviewForm
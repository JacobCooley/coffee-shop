import React from 'react'
import './PreviewToken.scss'

const PreviewToken = ({ create }) => {
	const tokenInfo = create.tokenInfo
	
	return (
		<div className='preview'>
			<h3>Token Preview</h3>
			<>
				<div>{`Token: ${tokenInfo.name} ${tokenInfo.symbol ? `(${tokenInfo.symbol.toUpperCase()})` : ''}`}</div>
				<div>Supply: {tokenInfo.supply ? parseInt(tokenInfo.supply,10).toLocaleString() : 0}</div>
				<div>Decimals: {tokenInfo.decimal}</div>
			</>
		</div>
	)
}

PreviewToken.propTypes = {}

PreviewToken.defaultProps = {}

export default PreviewToken
import React from 'react'
import './Loader.scss'
import { css } from 'react-emotion'
import { FadeLoader } from 'react-spinners'
import colors from 'styles/_colors.scss'

const override = css`
    display: block;
    position: fixed !important;
  	top: 50% !important;
  	left: 50% !important;
  	width: 0 !important;
  	transform: translate(-50%, -50%);
    z-index: 1000;
`

const Loader = () => (
	<>
		{/*<div className='blackout' />*/}
		<FadeLoader
			className={override}
			sizeUnit={"px"}
			size={200}
			color={colors['dark-blue']}
			loading={true}
		/>
	</>
)

export default Loader
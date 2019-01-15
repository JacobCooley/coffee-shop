import React from 'react'
import './Faq.scss'

const FaqComponenet = () => (
	<div className='faq'>
		<ul>
			<li><h3>Do I need an account?</h3><p>You do not need an account to use our services. It is strongly
				suggested to create one anyways in case you lose your contract address.</p></li>
			<li><h3>How much does your service cost?</h3><p>Depending on the chain and the contract you want the price
				will be different. Select "Create" at the top and you can see a list of our products.</p></li>
			<li><h3>Can you make me a custom contract?</h3><p>Absolutely! Contact us and we can arrange a time to speak
				about what you need and we can walk you through the process.</p></li>
			<li><h3>What dApp coins will you support?</h3><p>Right now we are focusing on building the best possible
				contracts, so currently it is just Ethereum and EOS, but at some point in the future it
				will grow to many others. </p></li>
			<li><h3>Can I upload my own smart contract?</h3><p>Definitely! Contact us and we will let you know about our
				customer smart contract program</p></li>
		</ul>
	</div>
)

FaqComponenet.propTypes = {}

FaqComponenet.defaultProps = {}

export default FaqComponenet
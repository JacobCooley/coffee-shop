import React from 'react';
import PropTypes from "prop-types";
import './Home.scss'

const HomeComponent = () => (
	<div className='home'>
		<h4 style={{color: 'red'}}>Pre-Alpha version is only working on the Ropsten network!</h4>
		<h1>Token Launcher</h1>
		<h3>Pre-Alpha</h3>
		<div>Create smart contracts on the Ethereum and EOS blockchains quickly and easily!</div>
		<br/>
		<div>Can't code? No problem!</div>
	</div>
)

HomeComponent.propTypes = {

};

HomeComponent.defaultProps = {

};

export default HomeComponent;
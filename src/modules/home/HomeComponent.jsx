import React from 'react';
import PropTypes from "prop-types";
import './Home.scss'

const HomeComponent = () => (
	<div className='home'>
		<h4 style={{color: 'red'}}>Pre-Alpha version is only working on the Ropsten network!</h4>
		<h3>Token Launcher Pre-Alpha</h3>
		<div>Create contracts quickly and easily!</div>
	</div>
)

HomeComponent.propTypes = {

};

HomeComponent.defaultProps = {

};

export default HomeComponent;
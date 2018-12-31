import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
import Home from '@home/HomeContainer'
import Header from './header/HeaderComponent'
import Footer from './footer'
import Dapps from '@dapps'
import Deploy from '@deploy'
import './App.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getNetwork, web3 } from '@common/utils/web3'

class App extends Component {
	componentDidMount() {
		this.props.dispatchEthModule()
		if(web3.currentProvider.isMetaMask && (getNetwork() !== '3' && getNetwork()!== '1001')){
			console.log(getNetwork())
			toast("Please select Ropsten test network in Metamask", {type: 'error', autoClose: 100000})
		}
	}
	
	render() {
		return (
			<Router>
				<>
					<ToastContainer pauseOnHover
									draggable={false}
									closeButton={<></>}
									hideProgressBar={true} position={toast.POSITION.TOP_CENTER}
									autoClose={3000} pauseOnFocusLoss={false} />
					<Header />
					<main>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/dapps' component={Dapps} />
							<Route path='/deploy' component={Deploy} />
						</Switch>
					</main>
					<Footer />
				</>
			</Router>
		)
	}
}

export default App
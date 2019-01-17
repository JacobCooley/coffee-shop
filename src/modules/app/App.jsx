import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
import Home from '@home/HomeContainer'
import Header from './components/header/HeaderComponent'
import Footer from './components/footer'
import Create from '@create'
import Deploy from '@deploy'
import Faq from '@modules/faq/FaqComponent'
import Contracts from '@modules/contracts/ContractsContainer'
import Login from '@login/LoginContainer'
import Register from '@register/RegisterContainer'
import './App.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getNetwork, web3 } from '@common/utils/web3'
import noMatch from './components/404'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true
		}
	}
	
	async componentWillMount() {
		await this.props.checkAuth()
		this.setState({ loading: false })
	}
	
	componentDidMount() {
		this.props.dispatchEthModule()
		
		//Using timeout because on network change in MM causes the networkVersion to be undefined at first
		setTimeout(() => {
			if (web3.currentProvider.isMetaMask && typeof getNetwork() !== 'undefined' && getNetwork() !== '3' && getNetwork() !== '1001') {
				toast("Please select Ropsten test network in Metamask", {
					type: 'error',
					autoClose: false,
					closeOnClick: false
				})
			}
		}, 1000)
	}
	
	render() {
		const user = this.props.global.user
		return (
			<>
				{
					this.state.loading ?
						<></>
						:
						<Router>
							<>
								<ToastContainer pauseOnHover
												draggable={false}
												closeButton={<></>}
												hideProgressBar={true} position={toast.POSITION.TOP_CENTER}
												autoClose={3000} pauseOnFocusLoss={false} />
								<Header user={user} logOut={this.props.logOut} />
								<main>
									<Switch>
										<Route exact path='/' component={Home} />
										<Route path='/create' component={Create} />
										<Route path='/deploy' component={Deploy} />
										<Route path='/contracts' component={Contracts} />
										<Route path='/login' component={Login} />
										<Route path='/register' component={Register} />
										<Route path='/faq' component={Faq} />
										<Route component={noMatch} />
									</Switch>
								</main>
								<Footer />
							</>
						</Router>
				}
			</>
		)
	}
}

export default App
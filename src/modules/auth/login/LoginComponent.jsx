import React from 'react'
import './Login.scss'
import Input from '@common/components/Input'
import Button from '@common/components/Button'
import { NavLink as Link } from 'react-router-dom'
import { validateEmail } from '@utils/functions'
import { operations } from '../duck'
import { operations as appOperations } from '@app/duck'
import { pick } from '@common/utils/functions'

class LoginComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			errors: {}
		}
	}
	
	validateForm = () => {
		return new Promise((resolve) => {
			const auth = this.props.auth
			const errorObject = {}
			if (auth.pass.length < 7) {
				errorObject.pass = 'Password must be more than 7 characters'
			}
			if (!validateEmail(auth.email)) {
				errorObject.email = 'Email address not valid'
			}
			this.setState({ errors: errorObject }, () => {
				resolve(true)
			})
		})
	}
	
	onSubmit(e) {
		e.preventDefault()
		this.validateForm().then(() => {
			if (Object.keys(this.state.errors).length === 0) {
				const auth = this.props.auth
				const loginObject = pick(auth, 'email', 'pass')
				const newLogin = {username: loginObject.email, password: loginObject.pass}
				this.props.dispatch(operations.login(newLogin)).then((loginResponse) => {
					if(loginResponse){
						this.props.history.push('/')
					}
				})
			}
		})
	}
	
	render() {
		const auth = this.props.auth
		const email = auth.email
		const pass = auth.pass
		return (
			<div className='login'>
				<form onSubmit={(e) => this.onSubmit(e)}>
					<Input required error={this.state.errors.email} onChange={this.props.onChange}
						   name='email' label='Email' value={email} autoComplete={'email'} />
					<Input required error={this.state.errors.pass} onChange={this.props.onChange}
						   name='pass' type='password' label='Password' value={pass} />
					<Button type="submit" value="Submit" text="Login" />
					<Link to={'/register'}>Register an free account in less than a minute!</Link>
				</form>
			</div>
		)
	}
}

export default LoginComponent
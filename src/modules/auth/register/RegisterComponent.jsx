import React from 'react'
import './Register.scss'
import Input from '@common/components/Input'
import Button from '@common/components/Button'
import { NavLink as Link } from 'react-router-dom'
import { validateEmail } from '@utils/functions'
import { operations } from '../duck'
import { pick } from '@common/utils/functions'

class RegisterComponent extends React.Component {
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
			if (auth.passVerify !== auth.pass) {
				errorObject.passVerify = 'Passwords must be equal'
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
				const registerObject = pick(auth, 'email', 'pass')
				const newRegister = {userData: {username: registerObject.email, password: registerObject.pass}}
				this.props.dispatch(operations.register(newRegister)).then((registerResponse) => {
					if(registerResponse) {
						console.log('register', registerResponse)
						this.props.history.push('/login')
					}
				})
			}
		})
	}
	
	render() {
		const auth = this.props.auth
		const email = auth.email
		const pass = auth.pass
		const passVerify = auth.passVerify
		return (
			<div className='register'>
				<form onSubmit={(e) => this.onSubmit(e)}>
					<Input required error={this.state.errors.email} onChange={this.props.onChange}
						   name='email' label='Email' value={email} autoComplete={'email'} />
					<Input required error={this.state.errors.pass} onChange={this.props.onChange}
						   name='pass' type='password' label='Password' value={pass} />
					<Input required error={this.state.errors.passVerify} onChange={this.props.onChange}
						   name='passVerify' type='password' label='Verify Password' value={passVerify} />
					<Button type="submit" value="Submit" text="Register" />
					<Link to={'/login'}>Already have an account? Log In Here!</Link>
				</form>
			</div>
		)
	}
}

export default RegisterComponent
import React from 'react';
import './WithNotifications.scss'

const WithNotifications = ({ showError, showNotification, text, children }) => (
	<div className='toast'>
		{showError ? <div className='error'>{text}</div> : null}
		{showNotification ? <div className='notification'>{text}</div> : null}
		{children}
	</div>
)

export default WithNotifications;
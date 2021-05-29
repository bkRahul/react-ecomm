import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

export const StripeButton = ({ price }) => {
	const convertedStripePrice = price * 100
	const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
	const onToken = token => {
		axios
			.post('/payment', { amount: convertedStripePrice, token })
			.then(res => {
				console.log('Payment Successful', res)
			})
			.catch(err => {
				console.log('Payment Failed', err)
			})
	}
	return (
		<StripeCheckout
			label='Pay Now'
			name='React Ecomm'
			billingAddress
			shippingAddress
			image=''
			description={`Your total is $${price}`}
			amount={convertedStripePrice}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

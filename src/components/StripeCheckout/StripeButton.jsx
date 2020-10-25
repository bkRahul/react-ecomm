import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export const StripeButton = ({ price }) => {
  const convertedStripePrice = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
  const onToken = token => {
    console.log(token);
    alert('Payment succesful');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="React Ecomm"
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={convertedStripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

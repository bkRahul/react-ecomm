import React from 'react'
import { Spinner } from '../../ui/Spinner/Spinner'

const withSpinner =
	WrappedComponent =>
	({ isLoading, ...props }) => {
		return isLoading ? <Spinner /> : <WrappedComponent {...props} />
	}

export default withSpinner

import React, { Component } from 'react'
import {
	ErrorImageContainer,
	ErrorImageOverlay,
	ErrorImageText,
} from './withErrorBoundary.styles'

export default class withErrorBoundary extends Component {
	state = {
		hasError: false,
	}

	//catches the error thrown by the children
	static getDerivedStateFromError(err) {
		return { hasError: true }
	}

	componentDidCatch(err, info) {
		console.log(info)
	}

	render() {
		return this.state.hasError ? (
			<ErrorImageOverlay>
				<ErrorImageContainer imageUrl='https://i.imgur.com/O0DCcQy.png' />
				<ErrorImageText>Something went Wrong</ErrorImageText>
			</ErrorImageOverlay>
		) : (
			this.props.children
		)
	}
}

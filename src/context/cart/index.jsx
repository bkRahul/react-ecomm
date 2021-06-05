import React from 'react'

const cartContext = React.createContext({
	cartPreview: false,
	toggleCartPreview: () => {},
})

export default cartContext

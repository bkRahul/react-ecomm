import React from 'react'
import { SHOP_DATA } from '../../constants'

const collectionsContext = React.createContext({
	collections: SHOP_DATA,
})

export default collectionsContext

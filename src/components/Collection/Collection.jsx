import React from 'react'
import CollectionsContext from '../../context/collections'
import Product from '../Product/Product'
import { CollectionContainer, Items, Title } from './Collection.styles'

const Collection = ({ match }) => {
	return (
		<CollectionsContext.Consumer>
			{({ collections }) => {
				const collection = collections[match.params.collectionId]
				const { items, title } = collection
				return (
					<CollectionContainer>
						<Title>{title}</Title>
						<Items>
							{items.map(item => (
								<Product key={item.id} item={item} />
							))}
						</Items>
					</CollectionContainer>
				)
			}}
		</CollectionsContext.Consumer>
	)
}

export default Collection

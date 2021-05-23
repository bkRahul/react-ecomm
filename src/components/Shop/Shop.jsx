import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchCollectionsStart } from '../../redux/store/shop/shop.actions'
import CollectionContainer from '../Collection/CollectionContainer'
import CategoryOverviewContainer from './CategoryOverview/CategoryOverviewContainer'

const Shop = ({ match, fetchCollections, isCollectionLoaded }) => {
	useEffect(() => {
		fetchCollections()
	}, [fetchCollections])
	return (
		<div>
			<Route
				exact
				path={`${match.path}`}
				component={CategoryOverviewContainer}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionContainer}
			/>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	fetchCollections: () => dispatch(fetchCollectionsStart()),
})

export default connect(null, mapDispatchToProps)(Shop)

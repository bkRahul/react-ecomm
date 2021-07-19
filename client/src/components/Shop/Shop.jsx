import React, { lazy, useEffect, Suspense } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchCollectionsStart } from '../../redux/store/shop/shop.actions'
import { Spinner } from '../../ui/Spinner/Spinner'

const CollectionContainer = lazy(() =>
	import('../Collection/CollectionContainer'),
)
const CategoryOverviewContainer = lazy(() =>
	import('./CategoryOverview/CategoryOverviewContainer'),
)

const Shop = ({ match, fetchCollections, isCollectionLoaded }) => {
	useEffect(() => {
		fetchCollections()
	}, [fetchCollections])

	return (
		<Suspense fallback={<Spinner />}>
			<Route
				exact
				path={`${match.path}`}
				component={CategoryOverviewContainer}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionContainer}
			/>
		</Suspense>
	)
}

const mapDispatchToProps = dispatch => ({
	fetchCollections: () => dispatch(fetchCollectionsStart()),
})

export default connect(null, mapDispatchToProps)(Shop)

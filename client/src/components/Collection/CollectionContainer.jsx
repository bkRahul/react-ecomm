import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import withSpinner from '../../hoc/Spinner/withSpinner'
import { selectCollections } from '../../redux/store/shop/shop.selectors'
import Collection from './Collection'

const mapStateToProps = createStructuredSelector({
	isLoading: selectCollections,
})

const CollectionContainer = compose(
	(connect(mapStateToProps), withSpinner)(Collection),
)

export default CollectionContainer

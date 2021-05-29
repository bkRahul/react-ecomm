import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import withSpinner from '../../../hoc/Spinner/withSpinner'
import { selectIsLoading } from '../../../redux/store/shop/shop.selectors'
import CategoryOverview from './CategoryOverview'

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsLoading,
})

const CategoryOverviewContainer = compose(
	(connect(mapStateToProps), withSpinner)(CategoryOverview),
)

export default CategoryOverviewContainer

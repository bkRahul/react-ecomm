import React, { lazy, Suspense, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { selectCurrentUser } from './redux/store/user/user.selectors'
import { withLayout as WithLayout } from './hoc/Layout/withLayout'
import { default as WithErrorBoundary } from './hoc/ErrorBoundary/withErrorBoundary'
import { checkUserSession } from './redux/store/user/user.actions'
import { createStructuredSelector } from 'reselect'
import { Spinner } from './ui/Spinner/Spinner'

const Home = lazy(() =>
	import(/* webpackChunkName: "Home" */ './components/Home/Home'),
)
const Shop = lazy(() =>
	import(/* webpackChunkName: "Shop" */ './components/Shop/Shop'),
)
const Auth = lazy(() =>
	import(/* webpackChunkName: "Auth" */ './components/Auth/Auth'),
)
const Checkout = lazy(() =>
	import(/* webpackChunkName: "Checkout" */ './components/Checkout/Checkout'),
)

function App({ isAuth, checkUserSession }) {
	useEffect(() => {
		checkUserSession()
	}, [checkUserSession])

	return (
		<WithErrorBoundary>
			<Suspense fallback={<Spinner />}>
				<WithLayout>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/shop' component={Shop} />
						<Route path='/checkout' component={Checkout} />
						<Route
							path='/auth'
							render={() => (isAuth ? <Redirect to='/' /> : <Auth />)}
						/>
					</Switch>
				</WithLayout>
			</Suspense>
		</WithErrorBoundary>
	)
}

const mapStateToProps = createStructuredSelector({
	isAuth: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

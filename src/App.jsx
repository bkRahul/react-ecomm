import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import Category from './components/Home/Category/Category'
import CategoryItem from './components/Home/Category/CategoryItem/CategoryItem'
import { Home } from './components/Home/Home'
import Shop from './components/Shop/Shop'
import { Auth } from './components/Auth/Auth'
import { selectCurrentUser } from './redux/store/user/user.selectors'
import Checkout from './components/Checkout/Checkout'
import { withLayout as WithLayout } from './hoc/Layout/withLayout'
import { checkUserSession } from './redux/store/user/user.actions'
import { createStructuredSelector } from 'reselect'

function App({ isAuth, checkUserSession }) {
	useEffect(() => {
		checkUserSession()
	}, [checkUserSession])
	return (
		<WithLayout>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/shop' component={Shop} />
				<Route path='/checkout' component={Checkout} />
				<Route
					path='/auth'
					render={() => (isAuth ? <Redirect to='/' /> : <Auth />)}
				/>
				<Route path='/category' component={Category} />
				<Route path='/category/:items' component={CategoryItem} />
			</Switch>
		</WithLayout>
	)
}

// const mapStateToProps = createStructuredSelector({
// 	isAuth:
// })

const mapStateToProps = state => ({
	isAuth: selectCurrentUser(state),
})

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

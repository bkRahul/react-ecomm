import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Category from './components/Home/Category/Category'
import CategoryItem from './components/Home/Category/CategoryItem/CategoryItem'
import { Home } from './components/Home/Home'
import Shop from './components/Shop/Shop'

import { Auth } from './components/Auth/Auth'
import { auth, createUserProfileDocument } from './utils/firebase'
import Checkout from './components/Checkout/Checkout'
import { withLayout as WithLayout } from './hoc/Layout/withLayout'
import UserContext from './context/user'

function App() {
	const [currentUser, setCurrentUser] = useState(null)
	useEffect(() => {
		let unSubscribeFromAuth = null

		//listener on auth changes
		unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			//if logged in
			if (userAuth) {
				//create user profile whuch return user document refernece
				const userRef = await createUserProfileDocument(userAuth)

				//get document snapshot from document reference
				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					})
				})
			} else {
				//if not logged in set it to null
				setCurrentUser(userAuth)
			}
		})

		return () => {
			unSubscribeFromAuth()
		}
	}, [setCurrentUser])
	return (
		<UserContext.Provider value={currentUser}>
			<WithLayout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/shop' component={Shop} />
					<Route path='/checkout' component={Checkout} />
					<Route
						path='/auth'
						render={() => (currentUser ? <Redirect to='/' /> : <Auth />)}
					/>
					<Route path='/category' component={Category} />
					<Route path='/category/:items' component={CategoryItem} />
				</Switch>
			</WithLayout>
		</UserContext.Provider>
	)
}

export default App

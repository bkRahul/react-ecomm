import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Category from './components/Home/Category/Category';
import CategoryItem from './components/Home/Category/CategoryItem/CategoryItem';
import { Home } from './components/Home/Home';
import Shop from './components/Shop/Shop';

import { Auth } from './components/Auth/Auth';
import {
  //  addCollectionsAndDocs,
  auth,
  createUserProfileDocument,
} from './utils/firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/store/user/user.actions';
import { selectCurrentUser } from './redux/store/user/user.selectors';
import Checkout from './components/Checkout/Checkout';
import { withLayout as WithLayout } from './hoc/Layout/withLayout';
//import { selectCollectionsForPreview } from './redux/store/shop/shop.selectors';

function App({ setCurrentUser, isAuth }) {
  useEffect(() => {
    let unSubscribeFromAuth = null;

    //listener on auth changes
    unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //if logged in
      if (userAuth) {
        //create user profile whuch return user document refernece
        const userRef = await createUserProfileDocument(userAuth);

        //get document snapshot from document reference
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        //if not logged in set it to null
        setCurrentUser(userAuth);
      }
    });

    //create collections data in firestore
    // addCollectionsAndDocs(
    //   'collections',
    //   shopData.map(({ title, items }) => ({ title, items }))
    // );

    return () => {
      unSubscribeFromAuth();
    };
  }, [setCurrentUser]);
  return (
    <WithLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/checkout" component={Checkout} />
        <Route
          path="/auth"
          render={() => (isAuth ? <Redirect to="/" /> : <Auth />)}
        />
        <Route path="/category" component={Category} />
        <Route path="/category/:items" component={CategoryItem} />
      </Switch>
    </WithLayout>
  );
}

const mapStateToProps = state => ({
  isAuth: selectCurrentUser(state),
  //  shopData: selectCollectionsForPreview(state),
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

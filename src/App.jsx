import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Category } from './components/HomePage/Category/Category';
import CategoryItem from './components/HomePage/Category/CategoryItem/CategoryItem';
import { HomePage } from './components/HomePage/HomePage';
import { ShopPage } from './components/ShopPage/ShopPage';
import { Layout } from './hoc/Layout/Layout';
import { Auth } from './components/Auth/Auth';
import { auth, createUserProfileDocument } from './utils/firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/store/user/user.actions';
import { selectCurrentUser } from './redux/store/user/user.selectors';
import Checkout from './components/Checkout/Checkout';

function App({ setCurrentUser, isAuth }) {
  useEffect(() => {
    let unSubscribeFromAuth = null;

    //listener on auth changes
    unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //if logged in
      if (userAuth) {
        //create user profile whuch return document refernece
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
    return () => {
      unSubscribeFromAuth();
    };
  }, [setCurrentUser]);
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={Checkout} />
        <Route
          path="/auth"
          render={() => (isAuth ? <Redirect to="/" /> : <Auth />)}
        />
        <Route path="/category" component={Category} />
        <Route path="/category/:items" component={CategoryItem} />
      </Switch>
    </Layout>
  );
}

const mapStateToProps = state => ({ isAuth: selectCurrentUser(state) });

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

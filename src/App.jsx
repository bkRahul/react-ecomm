import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Category } from './components/HomePage/Category/Category';
import CategoryItem from './components/HomePage/Category/CategoryItem/CategoryItem';
import { HomePage } from './components/HomePage/HomePage';
import { ShopPage } from './components/ShopPage/ShopPage';
import { Layout } from './hoc/Layout/Layout';
import { Auth } from './containers/Auth/Auth';
import { auth, createUserProfileDocument } from './utils/firebase';

function App() {
  const [isAuth, setIsAuth] = useState({ currentUser: '' });

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
          setIsAuth({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setIsAuth({ currentUser: userAuth });
      }
    });
    return () => {
      unSubscribeFromAuth();
    };
  }, []);
  console.log('isAuth', isAuth);
  return (
    <Layout isAuth={isAuth.currentUser}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/auth" component={Auth} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/category" component={Category} />
        <Route path="/category/:items" component={CategoryItem} />
      </Switch>
    </Layout>
  );
}

export default App;

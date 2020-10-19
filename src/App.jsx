import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Category } from './components/HomePage/Category/Category';
import CategoryItem from './components/HomePage/Category/CategoryItem/CategoryItem';
import { HomePage } from './components/HomePage/HomePage';
import { ShopPage } from './components/ShopPage/ShopPage';
import { Layout } from './hoc/Layout/Layout';
import { Auth } from './containers/Auth/Auth';
import { auth } from './utils/firebase';

function App() {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    let unSubscribeFromAuth = null;

    unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      setIsAuth(user);
      console.log(user);
    });
    return () => {
      unSubscribeFromAuth();
    };
  }, []);

  return (
    <Layout isAuth={isAuth}>
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

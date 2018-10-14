import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import ProductList from './components/Product/product_list';
import PostsNew from './components/Product/posts_new';
import ProductDetail from './components/Product/product_detail';
import Login from './components/Login/login';

import reducers from './reducers';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const store = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={store(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>  
        <Route path="/login" component={Login}/>
          <Route path="/products/new" component={PostsNew}/>
          <Route path="/detail/:id" component={ProductDetail}/>
          <Route path="/" component={ProductList}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

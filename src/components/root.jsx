import React from 'react';
import PropTypes from 'prop-types'; 
import { Provider } from "react-redux";
import App from './App/App';
import { connect } from '../actions';


const Root = ({store}) => {
  //  set initial action to begin connection to server
  store.dispatch(connect());
  
  return(
  <Provider store={store}>
    <App {...store} />
  </Provider>
)};


Root.propTypes = {
  store: PropTypes.object
}

export default Root;

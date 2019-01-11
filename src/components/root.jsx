import React from 'react';
import PropTypes from 'prop-types'; 
import { Provider } from "react-redux";
import App from './App/App';


const Root = ({store}) => (
  <Provider store={store}>
    <App {...store} />
  </Provider>
);


Root.propTypes = {
  store: PropTypes.object
}

export default Root;

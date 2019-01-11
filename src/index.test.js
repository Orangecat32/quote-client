import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Root from './components/root';
import { buildStore } from './store'

  it('renders root without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Root store={buildStore()}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

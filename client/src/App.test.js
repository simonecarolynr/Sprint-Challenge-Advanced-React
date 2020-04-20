import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('player is found', () => {
  const {getByText} = render(<App />);
  getByText(/player/i);
});

test('darkMode is found', () =>{
  const {getByAltText} = render(<App />);
  getAllByAltText(/darkmode/i);
})

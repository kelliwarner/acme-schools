import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import qs from 'qs';

const Router = props => {
  const [params, setParams] = useState(qs.parse(window.location.hash.slice(1)));
  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setParams(qs.parse(window.location.hash.slice(1)));
    });
  }, []);

  const { view } = params;
  return <App view={view} />;
};

const root = document.querySelector('#root');
ReactDOM.render(<Router />, root);

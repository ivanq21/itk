import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from 'react-redux';


let renderDom = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store = {store}>
          <App state={state} dispatch={store.dispatch.bind(store)} />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderDom(store.getState());
store.subscribe(() => {renderDom(store.getState())});
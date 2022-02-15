import React from "react";
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from '@/store/index'
import AdminRoute from '@/routes/index'
// import reportWebVitals from './utils/reportWebVitals';
import '@/style/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <AdminRoute />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);

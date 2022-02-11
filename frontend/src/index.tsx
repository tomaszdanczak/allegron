import React from 'react'
import ReactDOM from 'react-dom'
import 'assets/styles/index.css'
import Root from 'views/Root/Root'

import AppProviders from 'providers/AppProviders'

// import { store } from "./app/store";
// import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <AppProviders>
      <Root />
    </AppProviders>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
)

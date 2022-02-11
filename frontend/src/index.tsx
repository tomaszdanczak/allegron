import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Root from 'Root'
import { BrowserRouter } from 'react-router-dom'

// import { store } from "./app/store";
// import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <Root />
    </BrowserRouter>

    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter  as Router} from 'react-router-dom';
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from "./reducers"
import { getPosts } from './actions/post.action.js';
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})
 store.dispatch(getPosts())



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <Router>
        <App />
      </Router>
    </Provider>
    
  </StrictMode>,
)

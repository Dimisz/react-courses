import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import StarRating from './components/star-rating/StarRating'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10}/>
    <StarRating size={24} color='red' /> */}
  </React.StrictMode>,
)

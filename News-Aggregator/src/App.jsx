import React from 'react'
import {NewsHeader} from './components/JSX/NewsHeader'
import { NewsFooter } from './components/JSX/NewsFooter'
import { NewsHome } from './components/JSX/NewsHome'
import './App.css'
const App = () => {
  return (
    <div>
      <NewsHeader/>
      <NewsHome/>
      <NewsFooter/>
    </div>
  )
}

export default App;
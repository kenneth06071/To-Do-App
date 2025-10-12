import { useState } from 'react'
import Todo from './Component/Todo.jsx'
import Header from './Component/Header.jsx'
import './Component/App.css'

function App() {
  return (
    <div classname='App'>
      <Header/>
      <Todo/>
      
    </div>
  );

}

export default App

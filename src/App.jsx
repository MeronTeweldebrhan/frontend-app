// import { useState } from 'react'
import BookForm from './components/BookForm'
import BookList from './components/BookList'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome To Full Stack app</h1>
      <BookForm/>
      <BookList books={[]} />
    </>
  )
}

export default App

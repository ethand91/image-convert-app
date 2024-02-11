import { useState } from 'react'
import './App.css'

import ImageUploadForm from './components/ImageUploadForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageUploadForm />
    </>
  )
}

export default App

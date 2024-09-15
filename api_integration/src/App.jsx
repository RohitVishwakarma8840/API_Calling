import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {


  const getProducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios.get(api)
      .then(products => {
        console.log(products);
      })
      .catch(err => console.log(err))
      ;  // catch block
  }

  const addProducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios.post(api,  {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
  })
      .then(products => {
        console.log(products);
      })
      .catch(err => console.log(err))
      ;  // catch block
  }


  return (
    <>
  <div>
<button onClick={getProducts}>Call Product API</button>

<button onClick={addProducts}>Add new Products </button>

  </div>

    </>
  )
}

export default App;

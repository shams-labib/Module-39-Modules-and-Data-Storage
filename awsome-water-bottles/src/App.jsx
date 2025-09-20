
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

const bottlesPromise = fetch('../public/bottle.json').then(res => res.json());

function App() {
  // const arrays = [
  //   {id: 1, name: 'pink nike bottle', price: 250, color: 'pink' },
  //   {id: 2, name: 'pink nike bottle', price: 250, color: 'pink' },
  //   {id: 3, name: 'pink nike bottle', price: 250, color: 'pink' },
  //   {id: 4, name: 'pink nike bottle', price: 250, color: 'pink' }
  // ]

  return (
    <>
      <h1>Buy awsome Bottles </h1>
      <Suspense fallback={<h1>Bottles Are Loading....</h1>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import PersonNode from './Components/PersonNode';
import { Person } from './Models';

function App() {
  const [count, setCount] = useState(0)

  const person1 = {
    name: 'Dad Joe',
    age: 64,
  } as Person;

  const person2 = {
    name: 'Mum Joe',
    age: 63,
  } as Person;

  return (
    <>
      <PersonNode name="John Doe" age={32} parent1={person1} parent2={person2} />
    </>
  )
}

export default App

import React, { useState, useEffect } from 'react';
import Objects from '../Objects/Object'
import LinkedList from '../LinkedList/LinkedList';
import Topbar from '../Topbar/Topbar';

const increaseCount = (count) => {
  increaseCount(count)
}

const Homepage = () => {
  // functions similarly as componentDidMount
  useEffect(() => {
    document.getElementById('clickstate').style.color = 'red';
  })
  // useState acts as the state without using classes
  const [ clickCount, increaseCount ] = useState(0);
  const [fruit, setFruit] = useState('banana');
  return (
  <div>
    <Topbar />
    <h1 id ="clickstate">You have clicked this button {clickCount} times</h1>
    <button onClick={() => increaseCount(clickCount + 1)}>Click me</button>
    <h1>You have clicked this button {fruit} times</h1>
    <button onClick={() => setFruit('asdf')}>Click me</button>
    <Objects />
    <LinkedList />
  </div>
)

}

export default Homepage;


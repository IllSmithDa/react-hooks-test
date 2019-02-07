import React, { useState } from 'react';

const increaseCount = (count) => {
  increaseCount(count)
}

const Homepage = () => {
  const [ clickCount, increaseCount ] = useState(0);
  const [fruit, setFruit] = useState('banana');
  return (
  <div>
    <h1>You have clicked this button {clickCount} times</h1>
    <button onClick={() => increaseCount(clickCount + 1)}>Click me</button>
    <h1>You have clicked this button {fruit} times</h1>
    <button onClick={() => setFruit('asdf')}>Click me</button>
  </div>
)

}

export default Homepage;


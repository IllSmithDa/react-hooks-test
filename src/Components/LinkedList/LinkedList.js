  import React, { useEffect, useState} from 'react';

const LinkedList  = () => {
    useEffect(() => {
      console.log(headVal)
    })
    const addToHead = () => {
       
    }
    const [objectList, addObject]  = useState({value: 'apple', next:'none', prev: 'none'});
    const [headVal, addHead] = useState('');

    return(
      <div>
        <h1>Linked List</h1>
        <p>{objectList.value}</p>
        <div>
          <label>Add to Head</label>
          <input onChange={(e) => addHead(e.target.value)}/>
          <button onClick={addToHead}>Submit</button>
        </div>
      </div>
    );
  }

  export default LinkedList
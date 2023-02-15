import React from 'react'

function Arraymath() {
    const myArray = ['apple', 'banana', 'orange'];
    const myList = myArray.map((item) => <p>{item}</p>)
  return (
    <div>{myList}</div>
  )
}

export default Arraymath
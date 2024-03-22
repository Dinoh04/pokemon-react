"use client";
import React, { useState } from 'react';

export default function Count() {
    const [count,setCount] = useState(0);
  return (
    <>
    <div>{count}</div>
      <button onClick={()=>{setCount(count + 1)}}>+</button>
      <button onClick={()=>{setCount(count - 1)}}>-</button>
    </>
  )
}

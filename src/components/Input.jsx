// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

const Input = () => {
  const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque a fuga maiores repellendus impedit tenetur non mollitia quas similique, numquam sint veritatis corrupti voluptatibus dicta nobis sequi et ex, quisquam voluptatum, odio error laboriosam! Praesentium!"
  const [input, setInput ] = useState("") // input state
  const [index, setIndex ] = useState(0)  //keep track of index of the word


  // *Input function
  const handleInput = (e) =>{
    e.preventDefault();
    setInput(e.target.value)
    console.log(e.target.value)
  }

  useEffect (() =>{
    const words = text.split(' ');
    const currentWord = words[index]
    const userWord = input.split(' ')[index]
    
    if(userWord===currentWord){
      setIndex(index+1)
    }
  
  }, [input, index, text]);


  return (
    <>
      <div className='flex flex-col'>
        <label>Label</label>
        <textarea className='border-2 border-gray-800 text-gray-500 bg-inherit' value={input}  onChange={handleInput} />

      </div>
    </>
  )
}

export default Input
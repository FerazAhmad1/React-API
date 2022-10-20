import React, { useEffect, useRef, useState } from 'react'
import classes from './MovieForm.module.css'
import Input from './Input'

const MovieForm = () => {
    const title =  useRef()
    const text = useRef()
    const date = useRef()
    const  submitHandler = (event)=>{
        event.preventDefault()
        console.log(title.current.value,text.current.value,date.current.value)
    }

   
    
  return (
    <form onSubmit={submitHandler} className={classes.form}>
         <Input title={'Title'} ref = {title} ></Input>
         <Input title={'Opening Text'} ref={text}></Input>
         <Input title={'Release Date'} ref={date}></Input>
        <button>Submit</button>
    </form>
  )
}

export default MovieForm
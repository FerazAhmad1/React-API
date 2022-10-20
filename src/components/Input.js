import React, { useRef } from 'react'


const Input =React.forwardRef( (props,ref) => {
     const inputRef =  useRef()
  return (
    <div>
        <label>{props.title}</label>
        <input ref={ref} />
    </div>
  )
})

export default Input
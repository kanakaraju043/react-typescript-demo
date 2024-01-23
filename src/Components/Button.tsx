import React from 'react'

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
const Button = (props: ButtonProps) => {
  return (
    <div>
        <button onClick={(event)=>props.handleClick(event, 10)} >Click</button>
    </div>
  )
}

export default Button
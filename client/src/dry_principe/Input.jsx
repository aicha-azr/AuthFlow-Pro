import React , {children} from 'react'
import {cn} from './lib/utils'

const Input = ({className, children, ...rest})=>{
    return(
        <input className={cn("p-[1rem] bg-blue-100 rounded-md text-black text-xl",
        className,
        )}{...rest}/>
    
    )
}
export default Input;
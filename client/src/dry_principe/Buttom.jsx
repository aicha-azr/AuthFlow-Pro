import React , {children} from 'react'
import {cn} from './lib/utils'

const Button = ({className, children, ...rest})=>{
    return(
        <button className={cn("bg-green-500 py-4 px-6 rounded-lg text-xl",
        className,
        )}{...rest}>
            {children}
        </button>
    )
}
export default Button;
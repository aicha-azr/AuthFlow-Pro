import React , {children} from 'react'
import {cn} from './lib/utils'

const Label = ({className, children, ...rest})=>{
    return(
        <label className={cn("self-start text-lg",
        className,
        )}{...rest}>
            {children}
        </label>
    )
}
export default Label;




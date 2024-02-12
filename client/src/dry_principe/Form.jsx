import React , {children} from 'react'
import {cn} from './lib/utils'

const Form = ({className, children, ...rest})=>{
    return(
        <div className={cn("bg-[#1c2e35] min-w-[591px] min-h-[595px] h-auto flex flex-col p-[20px] rounded-xl gap-[0.5rem] shadow-[#5AE4A7]-lg",
        className,
        )}{...rest}>
            {children}
        </div>
    )
}
export default Form;
import React, { useEffect, useState } from 'react';
import auth from '../assets/auth.jpg';
import Form from "../dry_principe/Form";
import Input from "../dry_principe/Input";
import Label from "../dry_principe/Label";
import Button from '../dry_principe/Buttom';
const Home = () => {
     const [isSignin, setIsSignin]= useState();
    const [isSignup, setIsSignup] = useState();
    useEffect(()=>{
        setIsSignin(true);
        setIsSignup(false);
    },[])
   
    return (
        <div className='bg-white flex h-screen w-screen  flex-col items-stretch overscroll-none min-h-screen'>
            <h1 className='text-black mt-[2rem]'><b className="font-bold">MASTER</b>TASK</h1>
            <div className="flex flex-1 justify-around items-center ml-[20rem] mt-[5rem] mr-[8rem] ">
                <Form className={isSignin?'block': 'hidden'}>
                    <div className="flex flex-col items-start text-lg">
                        <h2 className='text-green-500 text-2xl'>Welcome</h2>
                        <h4>Enter your username or email and password to sign-in</h4>
                    </div>
                    <div className="flex flex-col gap-y-[3rem] justify-between mt-[3.5rem]">
                        <div className="flex flex-col">
                            <Label htmlFor="email" >Email Address or Username</Label>
                            <Input type="text" />
                        </div>
                        <div className="flex flex-col">
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" />
                        </div>
                        <Button className='bg-green-500 py-4 px-6 rounded-lg text-xl'>sign in</Button>
                    </div>
                    <div className="p-[2rem]">
                        Don't have an account? <b className='text-green-500 hover:cursor-pointer'onClick={()=>{
                            setIsSignin(false);
                            setIsSignup(true);
                        }}>Sing up</b>
                    </div>
                </Form>
                
                <Form className={isSignup?'block': 'hidden'}>
                    <div className="flex flex-col items-start text-lg">
                        <h2 className='text-green-500 text-2xl'>Join</h2>
                        <h4>Enter your username, email and password to sign-up</h4>
                    </div>
                    <div className="flex flex-col gap-y-[3rem] justify-between mt-[3.5rem]">
                        <div className="flex flex-col">
                            <Label htmlFor="username" >Username</Label>
                            <Input type="text" name="username"/>
                        </div>
                        <div className="flex flex-col">
                            <Label htmlFor="email" >Email Address </Label>
                            <Input type="email" name="email" />
                        </div>
                        <div className="flex flex-col">
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" name="password"/>
                        </div>
                        <Button className='bg-green-500 py-4 px-6 rounded-lg text-xl'>sign up</Button>
                    </div>
                    <div className="p-[2rem]">
                        You have an account? <b className='text-green-500 hover:cursor-pointer'onClick={()=>{
                            setIsSignin(true);
                            setIsSignup(false);
                        }}>Sing in</b>
                    </div>
                </Form>


                    <img src={auth} alt="" className='w-[776px] h-[656px]'/>
                
            </div>
        </div>
    )
}

export default Home;

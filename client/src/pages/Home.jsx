import React, { useState } from 'react';
import auth from '../assets/auth.jpg';
import Form from "../dry_principe/Form";
import Input from "../dry_principe/Input";
import Label from "../dry_principe/Label";
import Button from '../dry_principe/Buttom';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../redux/authSlice';

const Home = () => {
    const [formType, setFormType] = useState('signin');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: ''
    });
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = () => {
        dispatch(loginUser(formData));
    };

    const handleRegister = () => {
        dispatch(registerUser(formData));
    };

    return (
        <div className='bg-white flex h-screen w-screen  flex-col items-stretch overscroll-none min-h-screen'>
            <h1 className='text-black mt-[2rem] text-center'><b className="font-bold">MASTER</b>TASK</h1>
            <div className="flex flex-1 justify-around items-center ml-[20rem] mt-[5rem] mr-[8rem] ">
                <Form className={formType === 'signin' ? 'block' : 'hidden'}>
                    <div className="flex flex-col items-start text-lg">
                        <h2 className='text-green-500 text-2xl'>Welcome</h2>
                        <h4>Enter your username or email and password to sign-in</h4>
                    </div>
                    <div className="flex flex-col gap-y-[3rem] justify-between mt-[3.5rem]">
                        <div className="flex flex-col">
                            <Label htmlFor="email" >Email Address or Username</Label>
                            <Input type="text" name="email" value={formData.email} onChange={handleInputChange} />
                        </div>
                        <div className="flex flex-col">
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                        </div>
                        <Button className='bg-green-500 py-4 px-6 rounded-lg text-xl' onClick={handleLogin}>Sign in</Button>
                    </div>
                    <div className="p-[2rem]">
                       <div className='text-center'> Don't have an account? <b className='text-green-500 hover:cursor-pointer' onClick={() => setFormType('signup')}>Sign up</b>
                    </div>
                    </div>
                </Form>

                <Form className={formType === 'signup' ? 'block' : 'hidden'}>
                    <div className="flex flex-col items-start text-lg">
                        <h2 className='text-green-500 text-2xl'>Join</h2>
                        <h4>Enter your username, email and password to sign-up</h4>
                    </div>
                    <div className="flex flex-col gap-y-[3rem] justify-between mt-[3.5rem]">
                        <div className="flex flex-col">
                            <Label htmlFor="username" >Username</Label>
                            <Input type="text" name="username" value={formData.username} onChange={handleInputChange} />
                        </div>
                        <div className="flex flex-col">
                            <Label htmlFor="email" >Email Address </Label>
                            <Input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                        </div>
                        <div className="flex flex-col">
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                        </div>
                        <Button className='bg-green-500 py-4 px-6 rounded-lg text-xl' onClick={handleRegister}>Sign up</Button>
                    </div>
                    <div className="p-[2rem]">
                       <div className='text-center'> You have an account? <b className='text-green-500 hover:cursor-pointer' onClick={() => setFormType('signin')}>Sign in</b>
                    </div>
                    </div>
                </Form>

                <img src={auth} alt="" className='w-[776px] h-[656px]' />
            </div>
        </div>
    )
}

export default Home;

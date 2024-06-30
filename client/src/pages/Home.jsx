import React, { useState } from 'react';
import auth from '../assets/auth.jpg';
import Form from "../dry_principe/Form";
import Input from "../dry_principe/Input";
import Label from "../dry_principe/Label";
import Button from '../dry_principe/Buttom';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../redux/authSlice';
import picture from '../assets/picture.png';
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
        <>
        <main className="fixed  w-fit md:w-full min-w-full h-[100vh] flex-col p-1 text-white  top-0 left-0 right-0 bg-[#E5E5E5]   lg:overflow-none scroll-smooth z-10">
            <div className='bg-opacity-30 rounded rounded-xl  w-fit min-w-full h-screen md:h-full blur-40 bg-[#88D2EF] z-10 flex flex-col-reverse md:flex-row justify-between md:gap-0 gap-3 md:justify-around items-center py-2 overflow-y-auto  '>
            <div className='md:w-1/2  self-start mb-2 rounded rounded-2xl   shadow shadow-md flex flex-col items-center p-3 z-10 w-full  self-center md:min-w-[400px] md:min-h-[550px] '>
           <form action="" className={formType === 'signin' ? 'block' : 'hidden'}>
           <div className="flex flex-col items-center text-lg">
                 <h2 className='text-white text-2xl font-bold mt-2 '>Login</h2>
               
             </div>
             <div className="flex flex-col gap-y-[3rem] justify-between mt-[3.5rem]">
                 <div className="flex flex-col">
                     <label htmlFor="email" >Email Address</label>
                     <input type="text" name="email" className='rounded rounded-full text-black p-3 border border-white bg-transparent focus:outline-none focus:bg-transparent' value={formData.email} onChange={handleInputChange} />
                 </div>
                 <div className="flex flex-col">
                     <label htmlFor="password">Password</label>
                     <input type="password" name="password" className='rounded rounded-full text-black p-3 border border-white bg-transparent focus:outline-none' value={formData.password} onChange={handleInputChange} />
                 </div>
                 <button className='rounded rounded-full text-[#3F8BED] p-3 border border-white bg-white focus:outline-none shadow shadow-md bg-opacity-80' onClick={handleLogin}>Sign in</button>
             </div>
             <div className="p-[2rem]">
                <div className='text-center'> Don't have an account? <b className="hover:cursor-pointer text-blue-800" onClick={() => setFormType('signup')}>Sign up</b>
             </div>
             </div>
           </form>
            <form className={formType === 'signup' ? 'block' : 'hidden '}>
            <div className="flex flex-col items-center text-lg">
                 <h2 className='text-green-500 text-2xl font-bold text-white mt-2'>Join US</h2>
             </div>
             <div className="flex flex-col gap-y-[1rem] justify-between mt-[3.5rem]">
                 <div className="flex flex-col">
                     <label htmlFor="username" >Username</label>
                     <input type="text" name="username" className='rounded rounded-full text-black p-3 border border-white bg-transparent focus:outline-none' value={formData.username} onChange={handleInputChange} />
                 </div>
                 <div className="flex flex-col">
                     <label htmlFor="email" >Email Address </label>
                     <input type="email" name="email" className='rounded rounded-full text-black p-3 border border-white bg-transparent focus:outline-none' value={formData.email} onChange={handleInputChange} />
                 </div>
                 <div className="flex flex-col">
                     <label htmlFor="password">Password</label>
                     <input type="password" name="password" className='rounded rounded-full text-black p-3 border border-white bg-transparent focus:outline-none' value={formData.password} onChange={handleInputChange} />
                 </div>
                 <button className='rounded rounded-full text-[#3F8BED] p-3 border border-white bg-white focus:outline-none shadow shadow-md bg-opacity-80' onClick={handleRegister}>Sign up</button>
             </div>
             <div className="p-[2rem]">
                <div className='text-center'> You have an account? <b className='text-blue-800 hover:cursor-pointer' onClick={() => setFormType('signin')}>Sign in</b>
             </div>
             </div>
            </form>
            
            </div>
            <div className='flex flex-col justify-center items-center max-w-[400px] md:relative rounded rounded-2xl z-10'>
                <h2 className='self-center md:self-start font-bold text-black text-2xl p-1'>Welcome to<b className='text-blue-800'> TaskMaster</b></h2> 
                <h3 className='self-center md:self-start text-center md:text-start text-[#4C4C4C] font-medium md:absolute top-20 p-1 text-lg'>your ultimate platform for managing tasks effortlessly and achieving your goals with precision!</h3>
                <img src={picture} width={400} height={200} className='hidden md:block '/>
            </div>
            </div>
       <div className='absolute h-[40rem] w-[40rem] left-0 md:top-40 top-0 bg-black z-0 rounded-full rounded-tl-xl bg-gradient-to-r from-[#3F8BED] to-[#7A99F4] blur-md shadow shadow-md lg:top-20'></div>
       <div className='absolute h-[40rem] w-[40rem] right-0 top-60 sm:top-80 bg-black z-0 rounded-full rounded-br-xl bg-gradient-to-r from-[#60B9E5] to-[#8CE2E3] blur-md shadow shadow-md'></div>
        </main>
        </>
    )
}

export default Home;

{ /*<div className='bg-white flex h-screen w-screen  flex-col items-stretch overscroll-none min-h-screen'>
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
 </div>*/}
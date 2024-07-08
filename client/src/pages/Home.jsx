import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import picture from '../assets/picture.png';
import { login, signup } from '../redux/Slices/AuthThunk';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';



const Home = () => {
    const nav = useNavigate();
    const [token, setToken] = useState(Cookies.get('jwtToken'));
    const [formType, setFormType] = useState('signin');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: ''
    });
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.auth);

    useEffect(() => {
        if (token) {
            nav('/home');
            window.location.reload();
        }
    }, [token, nav]);

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(loginData)).then(() => {
            setToken(Cookies.get('jwtToken'));
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(signup(formData)).then(() => {
            setToken(Cookies.get('jwtToken'));
        });
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
                     <input type="text" name="email" className='rounded rounded-full text-black p-3 border border-white bg-transparent focus:outline-none focus:bg-transparent' value={loginData.email} onChange={(e)=>{
                        setLoginData({...loginData, email: e.target.value})
                     }} />
                 </div>
                 <div className="flex flex-col">
                     <label htmlFor="password">Password</label>
                     <input type="password" name="password" className='rounded rounded-full text-black p-3 border border-white bg-transparent focus:outline-none' value={loginData.password} onChange={(e)=>{
                        setLoginData({...loginData, password: e.target.value})
                     }} />
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
                     <input type="text" name="username" className='rounded rounded-full text-black p-3 border border-white bg-transparent focus:outline-none' value={formData.username}  onChange={(e)=>{
                        setFormData({...formData, username: e.target.value})}} />
                 </div>
                 <div className="flex flex-col">
                     <label htmlFor="email" >Email Address </label>
                     <input type="email" name="email" className='rounded rounded-full text-black p-3 border border-white bg-transparent focus:outline-none' value={formData.email} onChange={(e)=>{
                        setFormData({...formData, email: e.target.value})}}  />
                 </div>
                 <div className="flex flex-col">
                     <label htmlFor="password">Password</label>
                     <input type="password" name="password" className='rounded rounded-full text-black p-3 border border-white bg-transparent focus:outline-none' value={formData.password} onChange={(e)=>{
                        setFormData({...formData, password: e.target.value})}} />
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
                <img src={picture} width={400} height={200} className='hidden md:block'/>
            </div>
            </div>
       <div className='absolute h-[40rem] w-[40rem] left-0 md:top-40 top-0 bg-black z-0 rounded-full rounded-tl-xl bg-gradient-to-r from-[#3F8BED] to-[#7A99F4] blur-md shadow shadow-md lg:top-20'></div>
       <div className='absolute h-[40rem] w-[40rem] right-0 top-60 sm:top-80 bg-black z-0 rounded-full rounded-br-xl bg-gradient-to-r from-[#60B9E5] to-[#8CE2E3] blur-md shadow shadow-md'></div>
        </main>
        </>
    )
}

export default Home;


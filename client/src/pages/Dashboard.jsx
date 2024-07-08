import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { Bounce, Flip, Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Dash = ()=>{
    const nav = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState('');
    const test =async()=>{

        const { data } = await axios.post(
            "http://localhost:8080",
            {},
            { withCredentials: true }
          );
          console.log(data.user);
          const { status, user, email } = data;
          setUsername(user);
          setEmail(email);
    }
   
    useEffect(()=>{
        test();
},[])
const logout = () => {
    Cookies.remove('jwtToken');
    nav('/');
    console.log('Cookie supprimé');
  };
    return(
        <>
         <main className="fixed  w-fit md:w-full min-w-full h-[100vh] flex-col p-1 text-white  top-0 left-0 right-0 bg-[#E5E5E5]   lg:overflow-none scroll-smooth z-10 gap-5">
<div className="font-bolder text-black text-center text-2xl bg-[#3F8BED] rounded-xl flex justify-between items-center p-2">
           <h2 > welcome to the dashboard</h2>

        <button className='text-black' onClick={logout}>LogOut</button>
</div>
        <div className="flex items-start justify-center text-xl flex-col text-black">
           <p>your username: {username}</p>
           <p>your email: {email}</p>

        </div>
        <div>
        
      </div>
           </main>
        </>
    )
}
export default Dash;
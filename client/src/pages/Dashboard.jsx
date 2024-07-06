import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { Bounce, Flip, Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dash = ()=>{
   
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
    return(
        <>
         <main className="fixed  w-fit md:w-full min-w-full h-[100vh] flex-col p-1 text-white  top-0 left-0 right-0 bg-[#E5E5E5]   lg:overflow-none scroll-smooth z-10 gap-5">

           <h2 className="font-bolder text-black text-center text-2xl bg-[#3F8BED] rounded-xl"> welcome to the dashboard</h2>
        <div className="flex items-start justify-center text-xl flex-col text-black">
           <p>your username: {username}</p>
           <p>your email: {email}</p>

        </div>
        <div>
        <button className='text-black'>Notify !</button>
        
      </div>
           </main>
        </>
    )
}
export default Dash;
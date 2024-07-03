import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dashboard } from '../redux/Slices/AuthThunk';

const Dash = ()=>{
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.auth);
useEffect(()=>{
    dispatch(dashboard());
    console.log(data);
})
    return(
        <>
        <div className="flex items-center justify-center">
           <h2 className="font-bolder"> welcome to the dashboard</h2>
           <p>your username: {data.username}</p>
           <p>your email: {data.email}</p>

        </div>
        </>
    )
}
export default Dash;
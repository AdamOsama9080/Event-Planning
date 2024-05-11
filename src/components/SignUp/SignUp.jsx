import React, { useState } from 'react';
import colors from '../../colors';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [user , setUser] = useState({uname:'',email:'',password:'',role:''});
    const naviagate = useNavigate();
    const [formIsValid , setFormIsValid] = useState(false);
    const validation = {
        email:/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/,
        uname:/[A-Z][a-z]{2,}/,
        password:/.{8,}/,
        role:/(user|organizer)/,
    }
    const handleOnChange = (eve)=>{
        const {name , value} = eve.target;  
        console.log(name);     
        console.log(value);     
        setUser(oldu => ({...oldu , [name]:value}))
        console.log(user);
    }

    const handleOnSubmit = (eve)=>{
        eve.preventDefault();
        console.log(user);
        axios.post('http://localhost:2000/users',user).then(
            (res=>{
                if(res.statusText === "Created")
                {
                    naviagate('/signin')
                }
            })
            
        )
    }
    return (
        <div className='container'>
            <form onSubmit={handleOnSubmit}>
                <div>
                <label htmlFor='uname'>User Name</label>
                <input className={ 'form-control '  + (user.uname.length && ((validation.uname.test(user.uname))?'is-valid ':'is-invalid ' ))} id='uname' name='uname' onChange={handleOnChange} value={user.uname}></input>
                </div>
                <div>
                <label htmlFor='email'>Email</label>
                <input className={ 'form-control '  + (user.email.length && ((validation.email.test(user.email))?'is-valid ':'is-invalid ' ))} id='email' name='email' onChange={handleOnChange} value={user.email}></input>
                </div>
                <div>
                <label htmlFor='password'>password</label>
                <input type='password' className={ 'form-control '  + (user.password.length && ((validation.password.test(user.password))?'is-valid ':'is-invalid ' ))} id='password'  name='password' onChange={handleOnChange} value={user.password}></input>
                </div>
                <div>
                <label htmlFor='role'>Account Type</label>
                <select name='role' onChange={handleOnChange} id='role' className={ 'form-control '  + (!user.role.length || ((validation.role.test(user.role))?'is-valid ':'is-invalid ' ))}>
                    <option defaultValue=''>Select</option>
                    <option value='user'>user</option>
                    <option value='organizer'>organizer</option>
                </select>
                </div>
                
                <button className='btn my-2' style={{backgroundColor:colors.primaryColor , color:colors.whiteColor}}
                disabled = {
                    !(validation.uname.test(user.uname) && validation.email.test(user.email) && validation.password.test(user.password) && validation.role.test(user.role))
                }
                >Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;

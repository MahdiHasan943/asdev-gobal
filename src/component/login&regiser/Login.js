import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../hook/useTitle';
import { toast, Toaster } from 'react-hot-toast';
import Social from './Social';
import '../../pages/contact/contact.css'

const Login = () => {
    useTitle('login page')

  const { register, formState: { errors }, handleSubmit } = useForm();
  const { signin,setLoading } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const location = useLocation();
  const [loginUser, setLoginUser] = useState('');
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
// login function 
  const handleLogin = data => {
    console.log(data);
    setLoginError('');
    signin(data.email, data.password)
      .then(result => {
                const user = result.user;
        toast.success('Login successfully')
                    navigate(from, { replace: true });
                setLoading(false)
        })
        .catch(error => {
            console.log(error.message)
            setLoginError(error.message);
        });
    }
    
  return (
    <section className="hero bg-[#3E4345] py-8 ">
       <div className='my-8 hero-overlay bg-opacity-60 flex justify-center items-center'>
    <div className='w-full bg-[#5E6366] sm:w-96 p-7  rounded-md'>
        <h4 className='text-3xl text-center font-bold  LoginH1'>Login</h4>
        <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full ">
                <label className="label"> <span className="label-text text-white">Email</span></label>
                <input type="text"
                    {...register("email", {
                        required: "Email Address is required"
                    })}
                placeholder="Email"
                    className="input input-bordered w-full bg-[#3E4345] text-white focus:text-[black]  placeholder:text-[16px] placeholder:text-[gray]    rounded-sm  shadow-sm focus:bg-[white] focus:outline-[#098b99] sm:text-sm" />
                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
            </div>
            <div className="form-control my-2 w-full">
                <label className="label"> <span className="label-text text-white">Password</span></label>
                <input type="password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                    })}
                placeholder="Password"
                    className="input  input-bordered w-full bg-[#3E4345] text-white focus:text-[black]  placeholder:text-[16px] placeholder:text-[gray]    rounded-sm  shadow-sm focus:bg-[white] focus:outline-[#098b99] sm:text-sm" />                <label className="label"> <span className="label-text text-white">Forgot Password?</span></label>
                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
            </div>
           <div className="flex justify-center items-center w-[100%] text-center"> <button className='LoginBtn'><span className='text-center w-full'>Login</span></button></div>
            <div className='my-6'>
                {loginError && <p className='text-red-600'>{loginError}</p>}
            </div>
        </form>
        <p className=' text-white already'>New to ASDEV81 Website <Link className='please font-bold' to="/register">Create  Account</Link></p>
        <div className="divider text-white  before:bg-primary after:bg-secondary">OR</div>
          <Social></Social>
          <Toaster></Toaster>
    </div>
</div>
   </section>
  )
}

export default Login
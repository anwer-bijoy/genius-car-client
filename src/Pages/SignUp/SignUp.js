import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImage from "../../assets/images/login/login.svg";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(err => console.error(err))
    };

    const handleGoogleSignUp = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-5 md:gap-10 md:grid-cols-2">
                <div className="text-center lg:text-left">
                    <img src={loginImage} alt="login_image" />
                </div>
                <div className="card w-full max-w-full border p-10">
                    <h1 className="text-[40px] font-medium text-[#444444] text-center">Sign up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name='name' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className='text-center'>
                        <p>Or Sign Up with</p>
                        <div className='flex justify-center gap-3 my-3'>
                            <button onClick={handleGoogleSignUp} className='flex justify-center items-center text-purple-600 text-xl bg-[#e9e8e8] w-[55px] h-[55px] rounded-full'>
                                <FaGoogle></FaGoogle>
                            </button>
                        </div>
                    </div>
                    <p className='text-[#737373] text-[18px] text-center'>Already have an account? <Link className='font-semibold text-[#FF3811]' to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
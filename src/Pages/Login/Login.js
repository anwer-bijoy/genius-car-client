import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authToken } from '../../api/auth';
import loginImage from "../../assets/images/login/login.svg";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const { logInWithEmail } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.email.value;
        const password = form.password.value;
        logInWithEmail(name, password)
            .then(result => {
                const user = result.user;
                console.log('successfully login', user);

                authToken(user, navigate, from)
                form.reset();


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
                    <h1 className="text-[40px] font-medium text-[#444444] text-center">Login</h1>
                    <form onSubmit={handleLogIn} className="card-body">
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

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Log In" />
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className='text-[#737373] text-[18px] text-center'>New to Genius Car? <Link className='font-semibold text-[#FF3811]' to="/signup">Sign up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
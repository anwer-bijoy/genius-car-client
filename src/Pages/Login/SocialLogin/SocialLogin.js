import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { authToken } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignUp = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                authToken(user, navigate, from)

            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className='text-center'>
                <p>Or Sign Up with</p>
                <div className='flex justify-center gap-3 my-3'>
                    <button onClick={handleGoogleSignUp} className='flex justify-center items-center text-purple-600 text-xl bg-[#e9e8e8] w-[55px] h-[55px] rounded-full'>
                        <FaGoogle></FaGoogle>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;
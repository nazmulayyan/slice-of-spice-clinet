import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';

const auth = getAuth();
const Register = () => {

    const { registerUser, setUser, user } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [error, setError] = useState('');

    const handleRegistration = (event) => {
        event.preventDefault();
        console.log(name, email, password, photoUrl);

        if (!name || !email || !photoUrl || !password) {
            setError('Please fill in all fields');
            return;
        }

        if (!/^(?=.*[A-Za-z\d]).{6,}$/.test(password)) {
            setError('Invalid password! Password must be 6 characters long');
            return;
        }
        if ((name, email, photoUrl, password)) {
            registerUser(email, password)
                .then((result) => {
                    setUser({...user, displayName: name, photoURL: photoUrl})
                    console.log(result.user);
                    updateProfile(auth.currentUser, {
                        displayName: name, photoURL: photoUrl
                      })
                })
                
                .catch((error) => {
                    setError(error.message);
                })
        }

        // Clear the input fields
        setName('');
        setEmail('');
        setPassword('');
        setPhotoUrl('');
    };



    return (
        <div>
            <div className="hero min-h-screen bg-base-200 py-20">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h3 className="text-3xl font-bold uppercase">If you don't have an account </h3>
                        <h3 className="text-3xl font-bold uppercase text-center">please register</h3>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            <div className="form-control">
                                <p className='text-red-500 font-semibold'>{error}</p>

                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>

                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" className="input input-bordered" required
                                />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>

                                <input
                                    value={photoUrl}
                                    onChange={(e) => setPhotoUrl(e.target.value)}
                                    type="text"
                                    placeholder="Photo URL"
                                    className="input input-bordered" required
                                />
                            </div>

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} type='email' placeholder="email" className="input input-bordered" required
                                />

                            </div>

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password" placeholder="password" className="input input-bordered" required
                                />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                            </div>
                            <div className="form-control mt-6">

                                <button
                                    onClick={handleRegistration} className="btn bg-rose-500">Register
                                </button>

                                <Link className='text-rose-500 uppercase font-semibold mt-3' to='/login'>already have an account</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
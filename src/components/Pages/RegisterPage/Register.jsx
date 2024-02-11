// import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../shared/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {

    const { creatUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // const email = form.get('email');

        creatUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="md:max-w-96 mx-auto mt-20 mb-20">
                <h2 className="text-center font-semibold font-display text-2xl">Create your Account!</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="photo" name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-info">Register</button>
                    </div>
                    <p className='font-base text-center'> Already have an account? <Link className=' text-blue-600 font-bold' to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
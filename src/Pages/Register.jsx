import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { register, updateUserProfile, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, name, photo } = Object.fromEntries(formData.entries());


        const Pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!Pattern.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Invalid Password",
                text: "Password must be at least 6 characters long and include both uppercase and lowercase letters.",
            });
            return;
        }

        register(email, password)
            .then(() => {

                updateUserProfile(name, photo)


            }).then(() => {

                Swal.fire({
                    icon: "success",
                    title: "Registration Successful!",
                    timer: 1500,
                    showConfirmButton: false
                });

                navigate("/");
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Registration Failed",
                    text: err.message,
                });
            });

        
       
    }
    // google Login
 const handleGoogle = () => {
            googleLogin()
             .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged in with Google!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: "Something went wrong.",
        });
      });
        }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-green-200 to-green-100 px-4">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl space-y-5">
                <h2 className="text-3xl font-bold text-center text-green-700">Create Your Account</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input type="text" name="name" required className="input input-bordered w-full bg-white text-black" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Photo URL</label>
                        <input type="text" name="photo" required className="input input-bordered w-full bg-white text-black" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input type="email" name="email" required className="input input-bordered w-full bg-white text-black" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input type="password" name="password" required className="input input-bordered w-full bg-white text-black" />
                    </div>
                    <button type="submit" className="btn btn-success w-full text-white">
                        Register
                    </button>
                </form>

                <button onClick={handleGoogle} className="btn btn-soft w-full">
                    Register with Google
                </button>

                <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-green-600 font-medium hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;

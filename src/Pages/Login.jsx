import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link,  useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { login,googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Logged in successfully",
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            }).catch(() => {
                Swal.fire({
                    icon:"error",
                    title:"Login Failed",
                    text:"Invalid email and password"
                })
            })

    }
    //handleGoogleLogin
    const handleGoogle = ()=>{
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
                <h2 className="text-3xl font-bold text-center text-green-700">Log in Your Account</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                 
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="input outline input-bordered w-full bg-white text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Password</label>
                    <input
                      type="password"
                      name="password"
                      required
                      className="input outline w-full bg-white text-black"
                    />
                  </div>
                  <button type="submit" className="btn btn-success w-full text-white">
                    Login
                  </button>
                </form>
        
                <button onClick={handleGoogle}  className="btn btn-soft w-full">
                  Log in with Google
                </button>
        
                <p className="text-center text-sm text-gray-600">
                 Don't have an account?{" "}
                  <Link to="/register" className="text-green-600 font-medium hover:underline">
                    Register
                  </Link>
                </p>
              </div>
            </div>
    );
};

export default Login;
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import { auth_apis } from "./API/api";
import toast from "react-hot-toast";

const Signup = () => {
  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name , setName] = useState("");
  const navigate = useNavigate();


    
  useEffect(() => {
    console.log(auth_apis);  
  } , []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup:", { role, email, password });
    if(!role || !email || !password || !name){
      toast("please fill all the details");
    }
    try{
        const signup_api = auth_apis.SIGNUP;
        console.log(signup_api);
        const response = await axios.post(signup_api , {name : name, password :password, role : role , email : email});    
        // leftover adding validation what if user already present
        if(!response?.data?.success){
          toast("already exist");
          return ;
        }

        console.log(response);
        const role2 = response?.data?.user?.role;
        
        if(role2 == 'admin'){
           navigate('/admin/dashboard');
        }else {
          navigate('/user/dashboard');  
        }
    }catch(error){ 
      console.log(error);   
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold gradient-text">
            
          </Link>
          <h1 className="text-2xl font-semibold mt-6 mb-2">
            Create an account
          </h1>
          <p className="text-muted-foreground">Join us today</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-2xl p-8 shadow-sm"
        >
          <div className="space-y-5">
            {/* Role Selection */}
            <div className="space-y-2">
              <label className="font-medium">I am signing up as</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole("admin")}
                  className={`h-12 rounded-xl border-2 font-medium transition-all
                    ${
                   role === "admin"
                   ? "border-[#2E8B57] bg-[#2E8B57] text-white shadow-md"
                  : "border-border hover:border-[#2E8B57]"
                  }`}
                >
                  Admin
                </button>

                <button
                  type="button"
                  onClick={() => setRole("user")}
                  className={`h-12 rounded-xl border-2 font-medium transition-all
                    ${
                   role === "user"
                    ? "border-[#2E8B57] bg-[#2E8B57] text-white shadow-md"
                  : "border-border hover:border-[#2E8B57]"
                  }`}
                >
                  User
                </button>
              </div>
            </div>

             <div className="space-y-2">
              <label htmlFor="name" classname="font-medium">
                Name
              </label>
              <input
                id="name"
                type="name"
                placeholder="••••••••"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12 w-full rounded-lg border border-border px-4 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 w-full rounded-lg border border-border px-4 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 w-full rounded-lg border border-border px-4 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

           

            {/* Submit */}
            <button
              type="submit"
              disabled={!role}
              className="w-full h-12 bg-gradient-to-r from-[#2E8B57] via-[#3CB371] to-[#66CDAA] text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              Create Account
            </button>
          </div>
        </form>

        <p className="text-center mt-6 text-muted-foreground">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

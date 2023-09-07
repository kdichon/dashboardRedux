import React from 'react'
import { loginByEmail } from '../../commonjs/auth';

const Public = () => {

    const login = async (event) => { 
        
        event.preventDefault() ;
         console.log(event )   ; 
         const { email , password } = event.target ; 
         
         loginByEmail(email.value, password.value ) .then(user=>{

            console.log('user' , user) ; 

         }).catch(error =>{

            console.log('error' , error.code) ;

         }) 

     }


  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <form onSubmit={login} >
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="text" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="text" name='password' placeholder="password" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
            <button type='submit'  className="btn btn-primary">Login</button>
            </div>
        </div>
        </div>
        </form>

    
    </div>
    </div>
  )
}

export default Public